function getOptimalPath(path: number[][]): number {
  const backtrack = (sum: number, level: number, pos: number): number => {
    if (level === path.length) {
      return sum;
    }

    return Math.min(
      backtrack(sum + path[level][pos], level + 1, pos),
      backtrack(sum + path[level][pos + 1], level + 1, pos + 1),
    );
  };

  return backtrack(path[0][0], 1, 0);
}

console.log(getOptimalPath([[0], [2, 3]])); // 2
// 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); // 5
// 0 -> 4 -> 1

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // 8
// 1 -> 1 -> 5 -> 1
