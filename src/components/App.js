import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel onCalculate={Calculate} />
    </div>
  );
}

export default App;
