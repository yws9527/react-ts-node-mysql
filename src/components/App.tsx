import * as React from 'react';
import './App.css';
import Hello from './Hello';

const logo = require('../others/imgs/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello />
      </div>
    );
  }
}

export default App;
