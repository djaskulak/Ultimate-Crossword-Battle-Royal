import './App.css';
import Crossword from './Crossword.js';
import Header from './header.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Crossword/>
      </div>
    </div>
  );
}

export default App;
