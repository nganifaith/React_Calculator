import Big from 'big.js';

const operate = (number1, number2, operation) => {
  let results = 0;
  const numberOne = new Big(number1);
  const numberTwo = new Big(number2);

  switch (operation) {
    case '-':
      results = numberOne.minus(numberTwo);
      break;
    case '+':
      results = numberOne.plus(numberTwo);
      break;
    case '*':
      results = numberOne.times(numberTwo);
      break;
    case '/':
      try {
        results = numberOne.div(numberTwo);
      } catch (error) {
        results = 'Infinity';
      }
      break;
    default:
      results = numberTwo.div(100);
      break;
  }
  return `${results}`;
};

export default operate;
