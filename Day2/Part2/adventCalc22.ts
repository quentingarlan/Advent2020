

export function passwordPhilosophy(advList: string[]): number {
  let validPasswordNb = 0;
  for (let i = 0; i < advList.length; i++) {
    var passPolicy = advList[i].split(' ');
    const numbers = passPolicy[0].split('-');
    let firstNb: number = parseInt(numbers[0]);
    let secondNb = parseInt(numbers[1]);
    const letter = passPolicy[1].charAt(0);
    const password = passPolicy[2];  
    if (password.charAt(firstNb -1) === letter && password.charAt(secondNb-1) !== letter
    || password.charAt(firstNb -1) !== letter && password.charAt(secondNb-1) === letter) {
      validPasswordNb++;
    }
  }
  console.log('validPasswordNb', validPasswordNb)
  return validPasswordNb;
}



