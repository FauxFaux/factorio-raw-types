const techs = ((await import('../sample-data/data.json')) as unknown as RawData)
  .technology;
import { RawData, TechnologyPrototype } from '../src/prototypes.js';

type TechName = keyof typeof techs;

type Tech = Omit<TechnologyPrototype, 'name' | 'prerequisites'> & {
  name: TechName;
  prerequisites?: TechName[];
};

function fullTree(run: Set<TechName>, tech: Tech) {
  if (run.has(tech.name)) return;
  run.add(tech.name);

  for (const prereq of tech.prerequisites ?? []) {
    fullTree(run, techs[prereq]!);
  }

  console.log(tech.name);
}

function main() {
  const target = techs['rocket-silo']!;
  const run = new Set<TechName>();
  fullTree(run, target);

  const costs: Record<string, number> = {};
  for (const name of [...run]) {
    const tech = techs[name]!;
    if (tech.unit) {
      const count = tech.unit.count;
      if (count === undefined) {
        throw new Error('only support fixed count');
      }

      for (const val of tech.unit.ingredients) {
        if (!Array.isArray(val)) {
          throw new Error('only support simple ingredients');
        }
        const [name, amount] = val;
        costs[name] = (costs[name] ?? 0) + amount * count;
      }
    }
  }

  console.log(costs);
}

main();
