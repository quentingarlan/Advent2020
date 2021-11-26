export function BinaryBoardingList(advList: string[]): number {
  let highestSeatId = 0;
  advList.forEach(elt =>{
    let nb = BinaryBoarding(elt);
    if (nb > highestSeatId){
      highestSeatId = nb;
    }
  });
  return highestSeatId;
}

export function BinaryBoarding(advList: string): number {
  let {maxRow, maxColumn} = GetRowCol(advList);
  console.log("maxRow", maxRow )
  console.log("maxColumn", maxColumn  )
  return maxRow * 8 + maxColumn;
}

function GetRowCol(advList: string): {maxRow:number, maxColumn:number} {
  let maxRows    = 127
	let maxColumns = 7
  let minRow = 0;
  let maxRow = maxRows;
  let minColumn = 0;
  let maxColumn = maxColumns;
  for (let i = 0; i< advList.length; i++){
    let char = advList.charAt(i);

    if (char === "F"){
      maxRow = Math.trunc((minRow + maxRow) /2);
    }
    if (char === "B"){
      minRow =  Math.trunc((minRow + maxRow) /2);
    }
    if (char === "R"){
      minColumn =  Math.trunc((minColumn + maxColumn) /2);
    }
    if (char === "L"){
      maxColumn =  Math.trunc((minColumn + maxColumn) /2);
    } 
  }
  return {maxRow, maxColumn}
}
