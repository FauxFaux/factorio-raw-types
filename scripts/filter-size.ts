import { readFileSync } from 'node:fs';
import { format } from 'node:util';
import { RawData } from '../src/lib/g-protos.js';
import { entriesOf, shuffled } from '../src/lib/ts.js';

const sizeKeys = <K extends string>(raw: Record<K, unknown>) =>
  entriesOf(raw)
    .map(([k, v]) => [k, JSON.stringify(v).length ?? 0] as const)
    .sort(([, a], [, b]) => b - a);

function main() {
  const [, , rawPath, ...rest] = process.argv;
  if (!rawPath) {
    console.error('usage: filter-size <raw-data.json> [keys...] [.subkeys...]');
    process.exit(1);
  }

  const log = (...args: unknown[]) => {
    process.stderr.write(format(...args) + '\n');
  };

  const orig: RawData = JSON.parse(readFileSync(rawPath!, 'utf-8'));
  const raw = structuredClone(orig);
  const subDels: string[] = [];
  for (const k of rest) {
    if (k.startsWith('.')) {
      subDels.push(k.slice(1));
    } else {
      delete raw[k as keyof RawData];
    }
  }
  for (const v of Object.values(raw)) {
    for (const sub of subDels) {
      for (const item of Object.values(v)) {
        delete (item as Record<string, unknown>)[sub];
      }
    }
  }

  const total = JSON.stringify(raw).length;
  const results = sizeKeys(raw);
  const subs = {} as Record<keyof RawData, [string, number][]>;
  const allSubTotals: Record<string, number> = {};

  for (const [k, v] of entriesOf(raw)) {
    const subTotals: Record<string, number> = {};
    for (const item of Object.values(v)) {
      const subs = sizeKeys(item);
      for (const [subK, subV] of subs) {
        subTotals[subK] = (subTotals[subK] ?? 0) + subV;
        allSubTotals[subK] = (allSubTotals[subK] ?? 0) + subV;
      }
    }
    subs[k] = Object.entries(subTotals).sort(([, a], [, b]) => b - a);
  }

  log('Keys:');
  for (const [k, v] of results.slice(0, 5)) {
    const examples = shuffled(Object.keys(raw[k]!)).slice(0, 3);
    log(
      ` * ${k}: ${humanSize(v)} ${perc(v, total)}: ${examples.join(', ')}, ...`,
    );

    for (const [subK, subV] of subs[k].slice(0, 3)) {
      log(`   - ${subK}: ${humanSize(subV)} ${perc(subV, v)}`);
    }
  }

  log();
  log('Subkeys:');
  for (const [k, v] of Object.entries(allSubTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)) {
    log(` * ${k}: ${humanSize(v)} ${perc(v, total)}`);
  }
}

const humanSize = (size: number) => {
  return `${Math.round(size / 1024).toLocaleString()}kB`;
};

const perc = (size: number, total: number) => {
  return `(${((size / total) * 100).toFixed(2)}%)`;
};

main();
