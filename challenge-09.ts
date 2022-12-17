function countTime(leds: number[]) {
  const size = leds.length;
  const firstOne = leds.indexOf(1);

  let maxZeroSpace = 0;
  let counter = 0;
  for (let i = 0; i < leds.length; i++) {
    const index = (i + firstOne) % size;

    if (leds[index] === 1) {
      maxZeroSpace = Math.max(maxZeroSpace, counter);
      counter = 0;
    } else {
      counter++;
    }
  }
  maxZeroSpace = Math.max(maxZeroSpace, counter);

  return maxZeroSpace * 7;
}

const leds = [0, 1, 1, 0, 1];
console.log(countTime(leds)); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
