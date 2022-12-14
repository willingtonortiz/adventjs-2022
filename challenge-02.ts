function countHours(year, holidays) {
  const dates = holidays.map((holiday) => {
    const [monthStr, dayStr] = holiday.split("/");
    const month = parseInt(monthStr) - 1;
    const day = parseInt(dayStr);
    return new Date(year, month, day);
  });

  return dates.reduce((accu, curr) => {
    if (1 <= curr.getDay() && curr.getDay() <= 5) {
      return accu + 2;
    }

    return accu;
  }, 0);
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año
