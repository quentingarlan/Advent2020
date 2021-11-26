export function PassportProcessing(advList: string): number {
  let passportFields: string[] = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let allPassportElements: Map<number, string[]> = ProcessPassport(advList);
  let validPassportCount: number = 0;
  let passportCount: number = 0;
  for (const [key, value] of allPassportElements.entries()) {
    
if (value.length > 7){
  console.log(value)
}
    let hasBirth = false;
    let hasIssue = false;
    let hasExpiration = false;
    let hasHeight = false;
    let hasHair = false;
    let hasEye = false;
    let hasPassport = false;
    let hasCountry = false;
    let hasIncorrectField = false;
    value.forEach(elt => {
      let field: string = elt.split(":")[0];
      let fieldValue: string = elt.split(":")[1];

      if (field !== "byr" && field !== "iyr" && field !== "eyr" && field !== "hgt" && field !== "hcl" && field !== "ecl" && field !== "pid" && field !== "cid"){
        hasIncorrectField = true;
      }

      if (field === "byr") {
        hasBirth = hasValidBirth(fieldValue);
      }
      if (field === "iyr") {
        hasIssue = hasValidIssue(fieldValue);
      }
      if (field === "eyr") {
        hasExpiration = hasValidExpiration(fieldValue);
      }
      if (field === "hgt") {
        hasHeight = hasValidHeight(fieldValue);
      }
      if (field === "hcl") {
        hasHair = hasValidHair(fieldValue);
      }
      if (field === "ecl") {
        hasEye = hasValidEye(fieldValue);
      }
      if (field === "pid") {
        hasPassport = hasValidPassport(fieldValue);
      }
      if (field === "cid") {
        hasCountry = true;
      }

    });
    if (hasBirth && hasIssue && hasExpiration && hasHeight && hasHair && hasEye && hasPassport && !hasIncorrectField) {
      validPassportCount++;
      console.log('valid passport')
    }else{
      console.log('invalid passport')
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


function hasValidBirth(birth: string): boolean {
  let value:number = parseInt(birth);
  if (birth.length === 4 && value >= 1920 && value <= 2002) {
    return true;
  }
  else {
    console.log("invalid Birth")
    return false;
  }
}

function hasValidIssue(fieldValue: string): boolean {
  let value:number = parseInt(fieldValue);
  if (fieldValue.length === 4 && value >= 2010 && value <= 2020){
    return true
  } else {
    console.log("invalid Issue")
    return false;
  }
}

function hasValidExpiration(fieldValue: string): boolean {
  let value:number = parseInt(fieldValue);
  if (fieldValue.length === 4 && value >= 2020 && value <= 2030){
    return true
  } else {
    console.log("invalid Expiration")
    return false;
  }
}

function hasValidHeight(fieldValue: string): boolean {
  let numbersInField: string = fieldValue.replace(/\D/g, '');
  let value = parseInt(numbersInField);

  let cmOrIn = fieldValue.substr(fieldValue.length - 2, fieldValue.length);
  if (cmOrIn === "cm") {
    if (value >= 150 && value <= 193){
      return true
    } else {
      console.log("invalid cm height")
      return false;
    }
  } else if (cmOrIn === "in"){
    if (value >= 59 && value <= 76){
      return true
    } else {
      console.log("invalid in height")
      return false;
    }
  }else{
    return false;
  }
}

function hasValidHair(fieldValue: string): boolean {
  let containsLettersAndNumbers = /^#[a-f0-9]{6}$/.test(fieldValue);
  if (containsLettersAndNumbers){
    return true;
  } else {
    console.log("invalid Hair")
    return false;
  }
}

function hasValidEye(fieldValue: string): boolean {
  if (fieldValue === "amb" || fieldValue === "blu" || fieldValue === "brn" || fieldValue === "gry" || fieldValue === "grn" || fieldValue === "hzl" || fieldValue === "oth"){
    return true;
  } else {
    console.log("invalid Eye")
    return false;
  }
}

function hasValidPassport(fieldValue: string): boolean {
  let containsLetters = /^\d{9}$/.test(fieldValue);
  if (containsLetters){
    return true;
  } else {
    console.log("invalid Passport")
    return false;
  }
}

