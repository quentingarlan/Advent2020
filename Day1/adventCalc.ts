function AdventCalc() {

  function Sum2020(advList) {
    for (let i = 0; i < advList.length; i++) {
      for (let j = 0; j < advList.length; j++) {
        if (advList[i] + advList[j] === 2020) {
          return advList[i] * advList[j];
        }
      }
    }
    return null;
  }


  return {
    Sum2020
  }

}

module.exports = AdventCalc();