function carryGifts(gifts: string[], maxWeight: number): string[] {
  const result: string[] = [];
  let index = 0;
  let currentBox: string[] = [];
  let currentWeight = 0;
  gifts = gifts.map((x) => x.trim()).filter((x) => x.length <= maxWeight);

  while (index < gifts.length) {
    const gift = gifts[index];

    if (currentWeight + gift.length <= maxWeight) {
      currentBox.push(gift);
      currentWeight += gift.length;
      index++;
    } else {
      result.push(currentBox.join(" "));
      currentBox = [];
      currentWeight = 0;
    }
  }

  if (currentBox.length > 0) {
    result.push(currentBox.join(" "));
  }

  return result;
}

console.log(carryGifts(["game", "bike", "book", "toy"], 10));
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

console.log(carryGifts(["game", "bike", "book", "toy"], 7));
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

console.log(carryGifts(["game", "bike", "book", "toy"], 4));
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

console.log(carryGifts(["toy", "gamme", "toy", "bike"], 6));
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

console.log(carryGifts(["toy", "gamme", "toy", "bike"], 5));
console.log(carryGifts(["toy", "gamme", "toy", "bike"], 100));
