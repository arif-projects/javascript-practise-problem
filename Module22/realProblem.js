function woodLagbe(chair, table, bed) {
  const perChairWood = 4;
  const perTableWood = 5;
  const perBedWood = 15;

  const chairWoodQuantity = perChairWood * chair;
  const tableWoodQuantity = perTableWood * table;
  const bedWoodQuantity = perBedWood * bed;

  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

  return totalWood;
}

var chair = 4;
var table = 2;
var bed = 2;

const totalWoodNeeded = woodLagbe(chair, table, bed);
console.log(totalWoodNeeded);
