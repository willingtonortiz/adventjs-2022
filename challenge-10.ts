function checkJump(heights: number[]) {
  let hasDescend = false;
  let hasAscend = false;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[i + 1] && !hasDescend) {
      hasDescend = true;
    }

    if (heights[i] < heights[i + 1]) {
      if (hasDescend) {
        return false;
      }
      hasAscend = true;
    }
  }

  return hasAscend && hasDescend;
}

const heights1 = [1, 3, 8, 5, 2];
console.log(checkJump(heights1)); // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5];
console.log(checkJump(heights2)); // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5
 ↗ ↘ ↗
1   3

 */

console.log(checkJump([2, 2, 2, 2])); // false;
console.log(checkJump([1, 2, 3])); // false;
console.log(checkJump([3, 2, 1])); // false;
