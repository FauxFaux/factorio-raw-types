export const entriesOf = <K extends string, V>(obj: Record<K, V>): [K, V][] =>
  Object.entries(obj) as [K, V][];

// https://stackoverflow.com/a/12646864/1216956
export const shuffled = <T>(inp: T[]): T[] => {
  const arr = [...inp];
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
};
