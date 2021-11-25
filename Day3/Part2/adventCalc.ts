export function tobogganTrajectory(advList: string[]): number {
  let map = CreateMap(advList);

  let firstSlope = GetNbOfTrees(map, 1, 1);
  let secondSlope = GetNbOfTrees(map, 3, 1);
  let thirdSlope = GetNbOfTrees(map, 5, 1);
  let fourthSlope = GetNbOfTrees(map, 7, 1);
  let fifthSlope = GetNbOfTrees(map, 1, 2);

  let allTrees = firstSlope * secondSlope * thirdSlope * fourthSlope * fifthSlope;

  return allTrees;
}

function GetNbOfTrees(map: string[], rightPadding: number, downPadding: number) {
  let nbOfTrees: number = 0;
  let padding: number = 0
  for (let i = 1; i < map.length; i += downPadding) {
    padding += rightPadding;
    let tree: string = map[i].charAt(padding);

    if (tree === "#") {
      nbOfTrees++;
    }
  }
  return nbOfTrees;
}

//I think the map is incorrect
function CreateMap(originMap: string[]): string[] {
  for (let i = 0; i < originMap.length; i++) {
    originMap[i] = originMap[i].repeat(100);
  }
  console.log(originMap)
  return originMap;
}



