import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route,
        Link

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Testing the systems for launch!
        </p>

        <p>
            Information is power!
        </p>
      </header>
    </div>
  );
}

export default App;
