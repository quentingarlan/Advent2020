

export function passwordPhilosophy(advList: string[]): number {
  let validPasswordNb = 0;
  for (let i = 0; i < advList.length; i++) {
    var passPolicy = advList[i].split(' ');
    const numbers = passPolicy[0].split('-');
    let lowestNb: number = parseInt(numbers[0]);
    let highestNb = parseInt(numbers[1]);
    const letter = passPolicy[1].charAt(0);
    const password = passPolicy[2];
    let passwordMatchArray = password.match(letter);
    let nbOfOccurence: number = 0;
    if (passwordMatchArray) {
      nbOfOccurence = passwordMatchArray.length;
    }
    console.log('nbOfOccurence', nbOfOccurence)
    if (nbOfOccurence > lowestNb && nbOfOccurence < highestNb) {
      validPasswordNb++;
    }
    console.log('validPasswordNb', validPasswordNb)
  }
  return null;
}



