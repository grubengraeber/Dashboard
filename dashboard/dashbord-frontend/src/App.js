import './App.css';
import {FetchData} from './fetch.js';


function App() {
    let Hello = FetchData();
  return (
    <div className="App">
      <header className="App-header">
        <h1> {Hello} </h1>
      </header>
    </div>
  );
}

export default App;
