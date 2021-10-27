import React from "react";
import logo from './logo.svg';
import './App.css';
import STLViewer from 'stl-viewer';

import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <STLViewer
            width={400}
            height={400}
            modelColor='#B92C2C'
            backgroundColor='#EAEAEA'
            rotate={true}
            orbitControls={true}
            model='/models/test-monkey.stl'
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
