function decorateTree(base: string) {
  const treeBase = base.split(" ");
  if (treeBase.length === 1) {
    return [base];
  }
  const tree = Array.from<string>({ length: treeBase.length }).fill("");
  tree[0] = treeBase.join("");

  for (let i = 1; i < treeBase.length; i++) {
    const prev = tree[i - 1];
    let newRow = "";

    for (let j = 0; j < prev.length - 1; j++) {
      const firstTwo = prev.slice(j, j + 2);
      if (firstTwo === "RP" || firstTwo === "PR") {
        newRow += "B";
      } else if (firstTwo === "BR" || firstTwo === "RB") {
        newRow += "P";
      } else if (firstTwo === "BP" || firstTwo === "PB") {
        newRow += "R";
      } else {
        newRow += firstTwo[0];
      }
    }

    tree[i] = newRow;
  }

  return tree.map((x) => x.split("").join(" ")).reverse();
}

console.log(decorateTree("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree("B B")); // ['B', '
// B B']
console.log(decorateTree("B")); // ['B', 'B B']
