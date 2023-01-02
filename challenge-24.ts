function canExit(maze: string[][]) {
  const height = maze.length;
  const width = maze[0].length;

  const visited = Array
    .from({ length: height })
    .map(() => Array.from({ length: width }).fill(false));

  const findPosition = (char: string) => {
    for (let i = 0; i < height; i++) {
      const index = maze[i].indexOf(char);
      if (index !== -1) {
        return [i, index];
      }
    }
  };
  const dfs = (x: number, y: number) => {
    const queue = [{ x, y }];

    while (queue.length > 0) {
      const { x, y } = queue.pop()!;

      if (visited[y][x]) {
        continue;
      }

      visited[y][x] = true;

      if (maze[y][x] === "W") {
        continue;
      }

      if (x > 0) {
        queue.push({ x: x - 1, y });
      }

      if (y < height - 1) {
        queue.push({ x, y: y + 1 });
      }

      if (y > 0) {
        queue.push({ x, y: y - 1 });
      }

      if (x < width - 1) {
        queue.push({ x: x + 1, y });
      }
    }
  };

  const [yStart, xStart] = findPosition("S");
  dfs(xStart, yStart);
  const [y, x] = findPosition("E");
  return visited[y][x];
}

console.log(canExit([
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
])); // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

console.log(canExit([
  [" ", " ", "W", "W", "S"],
  [" ", " ", " ", "W", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
])); // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
