function selectSleigh(
  distance: number,
  sleighs: { name: string; consumption: number }[],
) {
  const MAXIMUM_ENERGY = 20;

  let bestSleigh: { name: string; consumption: number } | null = null;
  for (let i = 0; i < sleighs.length; i++) {
    const energyConsumed = sleighs[i].consumption * distance;
    if (energyConsumed <= MAXIMUM_ENERGY) {
      bestSleigh = sleighs[i];
    }
  }

  return bestSleigh?.name ?? null;
}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
