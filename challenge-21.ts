function printTable(gifts: { name: string; quantity: number }[]) {
  const maxGiftNameLength = gifts.reduce(
    (max, gift) => Math.max(max, gift.name.length),
    4,
  );
  const maxGiftQuantityLength = gifts.reduce(
    (max, gift) => Math.max(max, gift.quantity.toString().length),
    8,
  );

  const firstRow = "+".repeat(
    maxGiftNameLength + maxGiftQuantityLength + 7,
  );
  const lastRow = "*".repeat(
    maxGiftNameLength + maxGiftQuantityLength + 7,
  );
  const header = `| ${"Gift".padEnd(maxGiftNameLength)} | ${
    "Quantity".padEnd(maxGiftQuantityLength)
  } |`;
  const separator = `| ${"-".repeat(maxGiftNameLength)} | ${
    "-".repeat(maxGiftQuantityLength)
  } |`;

  const rows = gifts.map((gift) => {
    const name = gift.name.padEnd(maxGiftNameLength);
    const quantity = gift.quantity.toString().padEnd(maxGiftQuantityLength);
    return `| ${name} | ${quantity} |`;
  });

  return [firstRow, header, separator, ...rows, lastRow].join("\n");
}

console.log(printTable([
  { name: "Game", quantity: 2 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
]));

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

console.log(printTable([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]));

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
