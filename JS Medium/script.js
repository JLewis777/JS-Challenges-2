var userNum = Number(prompt(`Enter a number 1 - 12.`))

var months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


while (userNum < 1 || userNum > 12) {
  alert(`Invalid Number!`);
  userNum = Number(prompt(`Please enter a valid number`));
}


console.log(`${userNum} -- ${months[userNum - 1]}`);

