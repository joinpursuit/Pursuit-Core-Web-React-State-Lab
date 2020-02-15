import React, { Component } from 'react';
// import logo from './logo.svg';
import Clicker from "./Components/Clicker";
import Score from "./Components/CurrentScore";
import Points from "./Components/Points";
import './App.css';

class App extends Component {
  state = {
    counter: 1,
    currentScore: 0
  }
  render() {
    const {counter, currentScore} = this.state;
    return (
      <div className="App">
        <Score currentScore={currentScore}/>
        <Clicker counter={counter}/>
      </div>
    );
  }
}

export default App;
