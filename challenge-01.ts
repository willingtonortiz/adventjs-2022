const generateRow = (size: number): string =>
  Array.from({ length: size }).fill("*").join("");

const wrapGift = (gift: string) => {
  const length = gift.length;
  return generateRow(length + 2) + `\n*${gift}*\n` + generateRow(length + 2);
};

function wrapping(gifts: string[]) {
  return gifts.map(wrapGift);
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
