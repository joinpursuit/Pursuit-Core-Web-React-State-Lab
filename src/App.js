import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      score: 0,
      clickPoints: 1
    };
  }

  oneClick = (event) => {
    let counter = this.state.counter;
    let score = this.state.score;
    let clickPoints = this.state.clickPoints;
    if(score < 100) {
      this.setState({
        counter: counter + clickPoints,
        score: score + clickPoints
      });
    } else {
      alert("VICTORY! You reached 100 points or more!");
    }
  }

  buymore = (event) => {
    //let counter = this.state.counter
    let score = this.state.score;
    let clickPoints = this.state.clickPoints;
    if(score >= 10) {
      this.setState({
        score: score - 10,
        clickPoints: clickPoints + 1
      });
    } else {
      alert("You don't have enough points to increase by 1")
    }
  }

  resetGame = (event) => {
    alert("Game has reseted")
    window.location.reload();
  }

  render() {
    //let counter = this.state.counter;
    let clickPoints = this.state.clickPoints;
    let score = this.state.score;

    return (
      <div className="App">
        <strong><h1>Current Score: {score}</h1></strong>
        <button onClick={this.oneClick}>Increase!</button>
    <button onClick={this.buymore}>Pay 10 Points to change ever click increase to {clickPoints+1}</button>
    <button onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }
}

export default App;
