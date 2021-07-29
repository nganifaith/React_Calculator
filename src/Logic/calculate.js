import Big from 'big.js';
import Operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total = new Big(total).times(-1);
    next = new Big(next).times(-1);
  } else if (Number.isInteger(parseInt(buttonName, 10)) || buttonName === '.') {
    next = `${next || ''}${buttonName}`;
  } else if (buttonName === '=') {
    total = Operate(total, next, operation);
    next = null;
    operation = null;
  } else {
    if (!total || !operation) {
      operation = buttonName;
      total = total || next;
    } else {
      operation = buttonName;
      total = Operate(total, next, operation);
    }
    next = 0;
  }
  return { total, next, operation };
};

export default Calculate;
