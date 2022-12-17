function getFilesToBackup(lastBackup: number, changes: [number, number][]) {
  const filesIdsSet = new Set<number>();

  for (const [fileId, timestamp] of changes) {
    if (timestamp > lastBackup) {
      filesIdsSet.add(fileId);
    }
  }
  const fileIdsToBackup = Array.from(filesIdsSet);
  fileIdsToBackup.sort((a, b) => a - b);
  return fileIdsToBackup;
}

const lastBackup = 1546300800;
const changes: [number, number][] = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

console.log(getFilesToBackup(lastBackup, changes)); // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
