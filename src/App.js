import logo from './logo.svg';
import './App.css';
import StateExample from "./Components/StateExample";
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
// import Hello from "./Components/Hello";
//import {Greet} from './Components/Greet'; // for named exports

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greet />*/}
        {/*<Welcome/>*/}
        {/*  <Hello />*/}
          <StateExample/>
      </header>
    </div>
  );
}

export default App;
