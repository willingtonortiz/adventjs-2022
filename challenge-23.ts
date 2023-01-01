function executeCommands(commands: string[]) {
  const values = Array.from({ length: 8 }).fill(0);

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    const [action, params] = command.split(" ");

    if (action.startsWith("MOV")) {
      const [from, to] = params.split(",");

      const toIndex = parseInt(to[to.length - 1], 10);

      if (from.includes("V0")) {
        const fromIndex = parseInt(from[from.length - 1], 10);
        values[toIndex] = values[fromIndex];
      } else {
        values[toIndex] = parseInt(from, 10);
      }
    } else if (action.startsWith("ADD")) {
      const [from, to] = params.split(",");

      const fromIndex = parseInt(from[from.length - 1], 10);
      const toIndex = parseInt(to[to.length - 1], 10);

      values[fromIndex] = (values[fromIndex] + values[toIndex]) % 256;
    } else if (action.startsWith("DEC")) {
      const toIndex = parseInt(params[params.length - 1], 10);
      values[toIndex] = (values[toIndex] - 1 + 256) % 256;
    } else if (action.startsWith("INC")) {
      const toIndex = parseInt(params[params.length - 1], 10);
      values[toIndex] = (values[toIndex] + 1 + 256) % 256;
    } else if (action.startsWith("JMP")) {
      const index = parseInt(params[params.length - 1], 10);
      const v0Value = values[0];
      if (v0Value !== 0) {
        i = index - 1;
      }
    }
  }

  return values;
}

console.log(executeCommands([
  "MOV 5,V00", // V00 es 5
  "MOV 10,V01", // V01 es 10
  "DEC V00", // V00 ahora es 4
  "ADD V00,V01", // V00 = V00 + V01 = 14
]));

// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(executeCommands([
  "MOV 255,V00", // V00 es 255
  "INC V00", // V00 es 256, desborda a 0
  "DEC V01", // V01 es -1, desborda a 255
  "DEC V01", // V01 es 254
]));

// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(executeCommands([
  "MOV 10,V00", // V00 es 10
  "DEC V00", // decrementa V00 en 1  <---┐
  "INC V01", // incrementa V01 en 1      |
  "JMP 1", // bucle hasta que V00 sea 0 ----┘
  "INC V06", // incrementa V06 en 1
]));

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]

console.log(executeCommands([
  "MOV 10,V00",
  "MOV V00,V01",
  "MOV V01,V02",
  "MOV V02,V03",
  "MOV V03,V04",
]));

// Output: [ 10, 10, 10, 10, 10, 0, 0, 0]
