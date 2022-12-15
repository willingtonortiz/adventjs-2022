const createCube = (size: number): string => {
  const s1 = "/\\";
  const s2 = "\\/";
  const s3 = "_\\";
  const s4 = "_/";
  let cube = "";

  const createSpacesRow = (size: number) => " ".repeat(size);
  const createS1Row = (size: number) => s1.repeat(size);
  const createS2Row = (size: number) => s2.repeat(size);
  const createS3Row = (size: number) => s3.repeat(size);
  const createS4Row = (size: number) => s4.repeat(size);

  for (let i = 0; i < size; i++) {
    const spacesRow = createSpacesRow(size - (i + 1));
    const s1Row = createS1Row(i + 1);
    const s3Row = createS3Row(size);
    cube += `${spacesRow}${s1Row}${s3Row}\n`;
  }

  for (let i = 0; i < size; i++) {
    const spacesRow = createSpacesRow(i);
    const s2Row = createS2Row(size - i);
    const s4Row = createS4Row(size);
    cube += `${spacesRow}${s2Row}${s4Row}${i === size - 1 ? "" : "\n"}`;
  }

  return cube;
};

console.log(createCube(3));
