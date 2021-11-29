
let maxRows = 127
let maxColumns = 7

export function BinaryBoardingList(advList: string[]): number {
  let highestSeatId = 0;
  
  let seats:Map<{}, boolean> = new Map<{}, boolean>();
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxColumns; j++) {
      seats.set({i,  j}, false);
    }
  }
  console.log("seats count", seats.keys.length)
  //Enter the taken seats
  advList.forEach(elt => {
    let { maxRow, maxColumn } = GetRowCol(elt);
    // console.log("{ maxRow, maxColumn } ", { maxRow, maxColumn } )
      seats.set({maxRow, maxColumn}, true);
  })
  let mySeat = Array.from(seats.values()).filter((item) => item === false);
  console.log("mySeat", mySeat.values())

  return highestSeatId;
}

export function BinaryBoarding(advList: string): number {
  let { maxRow, maxColumn } = GetRowCol(advList);
  return maxRow * 8 + maxColumn;
}

function GetRowCol(advList: string): { maxRow: number, maxColumn: number } {
  let minRow = 0;
  let maxRow = maxRows;
  let minColumn = 0;
  let maxColumn = maxColumns;
  for (let i = 0; i < advList.length; i++) {
    let char = advList.charAt(i);

    if (char === "F") {
      maxRow = Math.trunc((minRow + maxRow) / 2);
    }
    if (char === "B") {
      minRow = Math.trunc((minRow + maxRow) / 2);
    }
    if (char === "R") {
      minColumn = Math.trunc((minColumn + maxColumn) / 2);
    }
    if (char === "L") {
      maxColumn = Math.trunc((minColumn + maxColumn) / 2);
    }
  }
  return { maxRow, maxColumn }
}
