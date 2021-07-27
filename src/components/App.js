import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
