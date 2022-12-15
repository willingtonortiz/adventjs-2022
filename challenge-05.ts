function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number,
) {
  const maxiCities = Math.min(maxCities, giftsCities.length);

  const backtrack = (index = 0, left: number, sum = 0): number => {
    if (sum > maxGifts) {
      return 0;
    }

    if (index >= giftsCities.length) {
      return sum;
    }

    if (left <= 0) {
      return sum;
    }

    return Math.max(
      sum,
      backtrack(index + 1, left - 1, sum + giftsCities[index]),
      backtrack(index + 1, left, sum),
    );
  };

  return backtrack(0, maxiCities, 0);
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20

// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
