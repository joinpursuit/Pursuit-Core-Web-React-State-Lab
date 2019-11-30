import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    increment: 1
  };

  handleAddToScore = event => {
    // const newScore = this.state.score + this.state.increment;
    this.setState(
      ({ score, increment }) => {
        const newScore = score + increment;
        return {
          score: newScore
        };
      },
      () => console.log(this.state)
    );
    // this.setState(
    //   {
    //     score: newScore
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  handlePayTen = event => {
    if (this.state.score >= 10) {
      this.setState(
        ({ score, increment }) => {
          const newIncrement = increment + 1;
          const newScore = score - 10;
          return {
            increment: newIncrement,
            score: newScore
          };
        },
        () => console.log(this.state)
      );
    } else {
      alert("you do not have enough points");
    }
  };

  handleReset = event => {
    this.setState({
      score: 0,
      increment: 1
    });
  };

  render() {
    const { score, increment } = this.state;
    if (score >= 100) {
      return (
        <div className="App">
          <h1>Counter Score: {score}</h1>
          <h2>YOU WON!</h2>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Counter Score: {score}</h1>
        <button onClick={this.handleAddToScore}>+{increment}</button>
        <button onClick={this.handlePayTen}>
          Pay 10 points to change +{increment} to +{increment + 1}{" "}
        </button>
      </div>
    );
  }
}
export default App;
