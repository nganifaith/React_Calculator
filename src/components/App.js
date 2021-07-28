import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <h2> Welcome to Calculator Project</h2>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
