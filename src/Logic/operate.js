import Big from 'big.js';

const Operate = (number1, number2, operation) => {
  if (number1 === 0) {
    return number2;
  }
  if (number1 === 'Infinity') {
    return 'Error';
  }

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
    case 'X':
      results = numberOne.times(numberTwo);
      break;
    case '/':
      try {
        results = numberOne.div(numberTwo);
      } catch (error) {
        results = 'Infinity';
      }
      break;
    case '%':
      results = numberTwo.div(100);
      break;
    default:
      results = 0;
  }
  return `${results}`;
};

export default Operate;
