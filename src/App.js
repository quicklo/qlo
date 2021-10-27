import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import STLViewer from 'stl-viewer';
import { BrowserRouter as Router,
        Switch,
        Route,
        Link

} from "react-router-dom";

class ModelTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'FF0000',
            model: undefined
        };
    }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <STLViewer
            url='https://quicklearn.online/models/test-monkey.stl'
            width={400}
            height={400}
            modelColor='#B92C2C'
            backgroundColor='#EAEAEA'
            rotate={true}
            orbitControls={true}
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
