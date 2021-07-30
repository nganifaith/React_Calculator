import React, { useState } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../Logic/calculate';

const App = () => {
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
      <Display result={data.next || data.total} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
