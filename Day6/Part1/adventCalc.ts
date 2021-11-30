export function CustomCustoms(advList: string): number {
  let groupList: string[] = advList.split(/\n\s*\n/)
  let count = 0;
  groupList.forEach(element => {
    let cleanElt = element.replace(/\s+/g, '');
    let chars = cleanElt.split('')
    let answered:string[] = [];
    chars.forEach(elt => {
      if (!answered.find(el => el === elt)){
          count++;
      }
      answered.push(elt);
    });
  });
  return count;
}


