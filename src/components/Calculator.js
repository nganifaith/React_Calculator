import React, { useState } from 'react';
import './Calculator.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../Logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    next: null,
    total: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setData(Calculate(data, buttonName));
  };
  return (
    <div className="App">
      <h4>Lets do some math!</h4>
      <div className="calc">
        <Display result={data.next || data.total} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
