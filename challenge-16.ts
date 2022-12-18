function fixLetter(letter: string) {
  return letter
    .replace(/,/g, ", ")
    .replace(/\s+([?,.])/g, (_, p1) => p1)
    .replace(/\s+/g, " ")
    .replace(/\?+/g, "?")
    .replace(/Santa Claus/ig, "Santa Claus")
    .replace(
      /([?.!])\s([a-zA-Z])/g,
      (_, p1, p2) => `${p1} ${p2.toUpperCase()}`,
    )
    .trim()
    .replace(/^([a-zA-Z])/g, (_, p1) => p1.toUpperCase())
    .replace(/([a-zA-Z])$/g, (_, p1) => `${p1}.`);
}

console.log(fixLetter(
  ` hello,  how are you??     
  do you know if santa claus exists?  
  i really hope he does!  bye  `,
));
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
//
console.log(fixLetter(
  `  Hi Santa claus. 
  I'm a girl from Barcelona , Spain . 
  please, send me a bike.  
  Is it possible?`,
));
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter("  hi,santa claus. are you there ?   "));
