function getCompleted(part: string, total: string) {
  const hourToSeconds = (hour: string) => {
    const [h, m, s] = hour.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };
  function erathostenes(n: number) {
    const sieve: boolean[] = [];
    const primes: number[] = [];

    for (let i = 2; i <= n; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (let j = i << 1; j <= n; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }

  const primes = erathostenes(10000);

  let partSeconds = hourToSeconds(part);
  let totalSeconds = hourToSeconds(total);

  while (primes.length > 0) {
    const prime = primes.shift()!;

    while (partSeconds % prime === 0 && totalSeconds % prime === 0) {
      partSeconds /= prime;
      totalSeconds /= prime;
    }
  }

  return `${partSeconds}/${totalSeconds}`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // '1/3'
console.log(getCompleted("02:00:00", "04:00:00")); // '1/2'
console.log(getCompleted("01:00:00", "01:00:00")); // '1/1'
console.log(getCompleted("00:10:00", "01:00:00")); // '1/6'
console.log(getCompleted("01:10:10", "03:30:30")); // '1/3'
console.log(getCompleted("03:30:30", "05:50:50")); // '3/5'
