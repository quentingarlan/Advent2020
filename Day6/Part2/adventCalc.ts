export function CustomCustoms(advList: string): number {
  let groupList: string[] = advList.split(/\n\s*\n/)
  let count = 0;
  groupList.forEach(element => {
    const nbPersons = element.split('\n').length;
    let cleanElt = element.replace(/\s+/g, '');
    let chars = cleanElt.split('')

    const grouped = groupBy(chars, i => i);
    for (const key in grouped) {
      if (grouped[key].length === nbPersons){
        count++;
      }
  }
  });
  return count;
}

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

