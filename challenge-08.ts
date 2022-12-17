// Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.
//
//     Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.
//
//     Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
//
//     Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:
//
//     checkPart("uwu") // true
// // "uwu" es un palíndromo sin eliminar ningún carácter
//
// checkPart("miidim") // true
// // "miidim" puede ser un palíndromo después de eliminar la primera "i"
// // ya que "midim" es un palíndromo
//
// checkPart("midu") // false
// // "midu" no puede ser un palíndromo después de eliminar un carácter

function checkPart(part: string) {
  const isPalindrome = (value: string) =>
    value === value.split("").reverse().join("");

  for (let i = 0; i < part.length; i++) {
    const newValue = part.slice(0, i) + part.slice(i + 1);
    if (isPalindrome(newValue)) {
      return true;
    }
  }
  return false;
}

console.log(checkPart("uwu")); // true
console.log(checkPart("miidim")); // true
console.log(checkPart("midu")); // false

//  miidim
//  Quitar el caracter inicial
//      iidim
//  Quitar el caracter final
//      miidi
//  Quitar los extremos y repetir
//      iidi
