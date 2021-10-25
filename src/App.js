import React from "react";
import logo from './logo.svg';
import './App.css';
import STLViewer from 'stl-viewer';
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
        <STLViewer
            url='https://quicklearn.online/models/monket-test.stl'
            width={400}
            height={400}
            rotate={true}
        />
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
