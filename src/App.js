import logo from './logo.svg';
import './App.css';
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
//import {Greet} from './Components/Greet'; // for named exports

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
        <Welcome/>
      </header>
    </div>
  );
}

export default App;
