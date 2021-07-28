import Big from 'big.js';

const Operate = (number1, number2, operation) => {
  if (!number1) {
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
    default:
      results = numberOne.div(100);
      break;
  }
  return `${results}`;
};

export default Operate;
