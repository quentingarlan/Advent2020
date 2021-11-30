export function HandyHaversacks(advList: string): number {
  const listOfRules = advList.split('\n');

  let count = 0;
  let containerBags: container[] = [];
  //Check if bags can contain our bag
  let bags: container[] = [];
  listOfRules.forEach(elt => {
    bags = GetContainedBags(elt);
    const container: container = FillContainers(elt, 'shiny', 'gold', bags)

    if (container) {
      if (container.colorAdjective) {
        containerBags.push(container);
      }
    }
  })

  // check rules
  listOfRules.forEach(elt => {
    bags = GetContainedBags(elt);
    console.log(bags)
    const ruleOk = CheckRules('shiny', 'gold', containerBags, bags)
    if (ruleOk) {
      count++;
    }
  }
  )
  return count;
}

function FillContainers(rule: string, adjective: string, color: string, bags: container[]): container {
  const rules = rule.split(' ');

  const firstColorAdjective = rules[0];
  const firstColor = rules[1];
  let returnedBag: container = null;

  bags.forEach(bag => {
    if (bag.color === color && bag.colorAdjective === adjective) {
      returnedBag = { colorAdjective: firstColorAdjective, color: firstColor }
    }
  })
  return returnedBag;
}

function CheckRules(adjective: string, color: string, containerBags: container[], bags: container[]): boolean {
  let bagCanContain= false;

  bags.forEach(bag => {
    const bagIsContainer = containerBags.some(elt => elt.colorAdjective === bag.colorAdjective && elt.color === bag.color)
    if (bag.color === color && bag.colorAdjective === adjective) {
      console.log("bag.color", bag.color)
      console.log("bag.colorAdjective", bag.colorAdjective)
      bagCanContain = true;
    }else if (bagIsContainer){
      console.log("bagIsContainer", bagIsContainer)
      bagCanContain = true;
    }else{
      bagCanContain = false;
    }
  })
  return bagCanContain;
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
