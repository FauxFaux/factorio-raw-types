import raw from '../data/raw-tech.json';

type TechName = keyof typeof raw;

interface Tech {
  name: TechName;
  prerequisites?: TechName[];
  unit: {
    count: number;
    time: number;
    ingredients: [string, number][];
  };
}

const techs = raw as unknown as Record<TechName, Tech>;

function fullTree(run: Set<TechName>, tech: Tech) {
  if (run.has(tech.name)) return;
  run.add(tech.name);

  for (const prereq of tech.prerequisites ?? []) {
    fullTree(run, techs[prereq]);
  }

  console.log(tech.name);
}

function main() {
  const target = techs['rocket-silo'];
  const run = new Set<TechName>();
  fullTree(run, target);

  const costs: Record<string, number> = {};
  for (const name of [...run]) {
    const tech = techs[name];
    const count = tech.unit.count;
    for (const [name, amount] of tech.unit.ingredients) {
      costs[name] = (costs[name] ?? 0) + amount * count;
    }
  }

  console.log(costs);
}

main();
