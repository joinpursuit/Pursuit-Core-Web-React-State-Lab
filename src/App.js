import React, { Component } from 'react';
// import logo from './logo.svg';
// import Clicker from "./Components/Clicker";
// import Score from "./Components/CurrentScore";
import Points from "./Components/Points";
import './App.css';

class App extends Component {
  state = {
    addend: 1,
    currentScore: 0
  }

  handleIncrementor = () => {
    // this.setState({currentScore: this.state.currentScore + 1})
    if (this.state.currentScore < 100) {
      this.setState((prevState) => {
        return {
          currentScore: prevState.currentScore + this.state.addend
        }
      })
    } else {
      alert("You have won the game!")
    }
  }

  handleAddend = () => {
    if (this.state.currentScore >= 10) {
      this.setState({addend: this.state.addend + 1, currentScore: this.state.currentScore - 10})
    } else {
      alert("You do not have enough points!")
    }
  }

  render() {
    const {addend, currentScore} = this.state;
    if (currentScore >= 100) {
      alert("You have won the game!")
    }
    return (
      <div className="App">
        <Points
          addend={addend}
          currentScore={currentScore}
        />
        <h1>Current Score: {currentScore}</h1>
        <button onClick={this.handleIncrementor}>
          + {addend}
        </button>
        <button onClick={this.handleAddend}>Pay 10 points to change {addend} to {addend + 1}</button>
      </div>
    );
  }
}

export default App;
