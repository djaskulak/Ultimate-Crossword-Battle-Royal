import './App.css';
import Crossword from './Crossword.js';
import Header from './Header.js';
import Rules from './rules';
import Toggle from './Toggle.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <Rules />
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
