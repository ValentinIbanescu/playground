const isGood = soldierType => ["Hobbits", "Elves", "Dwarves", "Eagles"].includes(soldierType);
console.log(isGood("Hobbits"));
console.log(isGood("Uruk-hai"));

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const soldiers = {};
  const soldierString = battlefield.split(",");
  soldierString.forEach((soldier) => {
    const type = soldier.split(':')[0];
    const count = parseInt(soldier.split(':')[1], 10);
    soldiers[type] = count;
  });
  return (soldiers);
};
console.log(buildSoldierObject("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1"));

const whoWinsTheWar = (battlefield) => {
  if (!battlefield || /^\s*$/.test(battlefield)) {
    return "Tie";
  }

  const soldiers = buildSoldierObject(battlefield);

  let win = 0;
  Object.keys(soldiers).forEach((soldierType) => {
    win = isGood(soldierType) ? win + soldiers[soldierType] : win - soldiers[soldierType];
  });
  if (win === 0) {
    return ("Tie");
  }
  return (win > 0 ? "Good" : "Evil");
};

console.log(whoWinsTheWar("Hobbits:4,Dwarves:1,Elves:1,Goblins:1,Uruk-hai:1,Elves:5,Orcs:1,Noncombat:11"));
