
import './App.css';
import Crossword from './Crossword.js';
import Header from './Header.js'
import Toggle from './Toggle.js'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <Toggle/>
      </div>
      <div>
        <Crossword/>
      </div>
    </div>
  );
}

export default App;
