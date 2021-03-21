export const filter = (list, word) => {
  let result = [];
  list.forEach((e) => {
    if (e.toLower().includes(word.toLower())) result.push(e);
  });

  return result;
};

const collatz = () => {
  let max = 0;
  let number = 0;
  let winner = 0;
  for (idx = 1; idx < 1000000; idx++) {
    number = idx;
    let counter = 1;
    while (number !== 1) {
      number =
        number % 2 === 0 ? (number = number / 2) : (number = number * 3 + 1);
      counter++;
      if (counter > max) {
        max = counter;
        winner = idx;
        break;
      }
    }
  }

  return `The longest chain is produced by ${winner}`;
};
