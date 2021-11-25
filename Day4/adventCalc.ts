export function PassportProcessing(advList: string): number {
  let passportFields: string[] = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let allPassportElements: Map<number, string[]> = ProcessPassport(advList);
  let validPassportCount: number = 0;
  let passportCount: number = 0;
  for (const [key, value] of allPassportElements.entries()) {
    console.log(key, value)

    let hasBirth = false;
    let hasIssue = false;
    let hasExpiration = false;
    let hasHeight = false;
    let hasHair = false;
    let hasEye = false;
    let hasPassport  = false;
    let hasCountry = false;
    value.forEach(elt=>
      {
        let field:string = elt.split(":")[0];
        
        if (field === "byr"){
          hasBirth = true;
        }
        if (field === "iyr"){
          hasIssue = true;
        }  
        if (field === "eyr"){
          hasExpiration = true;
        }
        if (field === "hgt"){
          hasHeight = true;
        }
        if (field === "hcl"){
          hasHair = true;
        }
        if (field === "ecl"){
          hasEye = true;
        }
        if (field === "pid"){
          hasPassport = true;
        }
        if (field === "cid"){
          hasCountry = true;
        }

      });
      if (hasBirth && hasIssue && hasExpiration && hasHeight && hasHair && hasEye && hasPassport){
        validPassportCount++;
      }    
      passportCount++;
  }
  console.log('passportCount', passportCount)
  return validPassportCount;
}

function ProcessPassport(passportsList: string): Map<number, string[]> {
  let passports: string[] = passportsList.split("\n\n");

  passports.forEach((element, index) => {
    passports[index] = element.replace(/\n/g, ' ')
  });

  
  let passportListCleared: Map<number, string[]> = new Map<number, string[]>();
  let passportNb: number = 0;
  passports.forEach(elt => {
    passportListCleared.set(passportNb, []);
    let passElementsWithValue = elt.split(" ");
    passElementsWithValue.forEach(elt2 => {
      elt2.split(":");
      if (elt2) {
        passportListCleared.get(passportNb).push(elt2);
      }
    });
    passportNb++;
  })
  return passportListCleared;
}


