

export function tobogganTrajectory(advList: string[]): number {
  let nbtrees = 0;
  let rightPadding = 0;

  for (let i = 1; i < advList.length; i++) {
    let mapLine = CreateMapLine(advList[i]);
    rightPadding += 3;
    let tree: string = mapLine.charAt(rightPadding);

    if (tree === "#") {
      nbtrees++
    }
  }
  return nbtrees;
}
function CreateMapLine(mapLine: string): string {
  const manyTimes = 10;
  for (let i = 0; i < manyTimes; i++) {
    mapLine += mapLine;
  }
  return mapLine;
}

