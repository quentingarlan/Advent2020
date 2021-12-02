const searchedColorAdjective: string = 'shiny';
const searchedColor: string = 'gold';

export function HandyHaversacks(advList: string): number {
  const listOfRules = advList.split('\n');

  let containerBags: container[] = [];
  //Check if bags can contain our bag
  let bags: container[] = [];
  let uniqueBags = new Set<string>();

  // check which bags directly contain our searched bag
  listOfRules.forEach(elt => {
    bags = GetContainedBags(elt);
    const directContainer: container = FillContainers(elt, bags)

    if (directContainer) {
      if (directContainer.colorAdjective) {
        containerBags.push(directContainer);
      }
    }
  })


  // check which bags contain bag that can contain our searched bag
  listOfRules.forEach(elt => {
    bags = GetContainedBags(elt);
    const secondLevelContainer: container = FillSecondlevelContainers(elt, bags, containerBags)

    if (secondLevelContainer) {
      if (secondLevelContainer.colorAdjective) {
        containerBags.push(secondLevelContainer);
      }
    }
  })
  console.log("containerBags", containerBags)


  // check rules
  listOfRules.forEach(elt => {
    bags = GetContainedBags(elt);

    const returnedBag = CheckRules(elt, containerBags, bags)
    if (returnedBag !== null) {
      console.log("bag", returnedBag)
      uniqueBags.add(returnedBag.color + returnedBag.colorAdjective);
    }
  }
  )
  console.log("uniqueBags", uniqueBags)
  console.log(" uniqueBags.keys.length", uniqueBags.size)
  return uniqueBags.size;
}

function CheckRules(firstBag: string, containerBags: container[], bags: container[]): container {
  let returnedBag = null;
  const rules = firstBag.split(' ');

  const firstColorAdjective = rules[0];
  const firstColor = rules[1];

  bags.forEach(bag => {

    const bagIsContainer = containerBags.some(elt => elt.colorAdjective === firstColorAdjective && elt.color === firstColor)
    const bagContainsContainer = containerBags.some(elt => elt.colorAdjective === bag.colorAdjective && elt.color === bag.color)
    if (bagContainsContainer || bagIsContainer) {
      let returnedContainer = new container();
      returnedContainer.color = firstColor;
      returnedContainer.colorAdjective = firstColorAdjective;
      returnedBag =  returnedContainer;
    }
  })
  return returnedBag;
}

function FillContainers(rule: string, bags: container[]): container {
  const rules = rule.split(' ');

  const firstColorAdjective = rules[0];
  const firstColor = rules[1];

  let returnedBag: container = null;

  bags.forEach(bag => {
    if (bag.color === searchedColor && bag.colorAdjective === searchedColorAdjective) {
      returnedBag = { colorAdjective: firstColorAdjective, color: firstColor }
    }
  })
  return returnedBag;
}

function FillSecondlevelContainers(rule: string, bags: container[], containerBags: container[]): container {
  const rules = rule.split(' ');

  const firstColorAdjective = rules[0];
  const firstColor = rules[1];

  let returnedBag: container = null;

  bags.forEach(bag => {
    containerBags.forEach(elt => {
      if (elt.color === bag.color && elt.colorAdjective === bag.colorAdjective) {
        returnedBag = { colorAdjective: firstColorAdjective, color: firstColor }
      }
    })
  })
  return returnedBag;
}

function GetContainedBags(rules: string): container[] {
  const contain = rules.split('contain')
  const ruleList = contain[1].split(',')

  let bagList: container[] = [];
  ruleList.forEach(elt => {
    const spaced = elt.split(' ');
    bagList.push({ colorAdjective: spaced[2], color: spaced[3] })
  })
  return bagList;
}

class container {
  colorAdjective: string;
  color: string;
}
