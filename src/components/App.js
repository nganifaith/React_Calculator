import React from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../Logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((data) => Calculate(data, buttonName));
  };

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="App">
        <Display result={next || total} />
        <ButtonPanel operation={operation} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
