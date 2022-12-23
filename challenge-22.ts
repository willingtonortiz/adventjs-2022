function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const groupedSystem = systemNames.reduce((acc, systemName, index) => {
    const list = acc.get(systemName) || [];
    list.push(stepNumbers[index]);
    acc.set(systemName, list);
    return acc;
  }, new Map<string, number[]>());

  for (const [_, stepNumberList] of groupedSystem) {
    const isIncreasing = stepNumberList.every((stepNumber, index, array) => {
      if (index === 0) return true;
      return stepNumber > array[index - 1];
    });

    if (!isIncreasing) {
      return false;
    }
  }

  return true;
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente
