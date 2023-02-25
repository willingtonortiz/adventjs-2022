function howManyReindeers(
  reindeerTypes: { type: string; weightCapacity: number }[],
  gifts: { country: string; weight: number }[],
) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);

  const distributeReindeers = (giftWeight: number) => {
    console.log(giftWeight);
    const filteredReindeers = reindeerTypes
      .filter((reindeer) => reindeer.weightCapacity < giftWeight);

    let totalWeight = filteredReindeers.reduce(
      (acc, reindeer) => acc + reindeer.weightCapacity,
      0,
    );

    return filteredReindeers.map(({ type, weightCapacity }) => {
      const reindeersCount = Math.floor(giftWeight / totalWeight);

      giftWeight -= weightCapacity * reindeersCount;
      totalWeight -= weightCapacity;

      return {
        type,
        num: reindeersCount,
      };
    });
  };

  return gifts.map(({ country, weight }) => ({
    country,
    reindeers: distributeReindeers(weight),
  }));
}

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];

console.log(howManyReindeers(reindeerTypes, gifts));
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
