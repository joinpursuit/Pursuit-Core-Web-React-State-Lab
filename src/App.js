import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counterAdd: 1
    }

  }

  handleCounter = () => {
    let { counter, counterAdd } = this.state
    this.setState({
      counter: counter + counterAdd
    })
  }

  handleSubtract10 = () => {
    let { counter, counterAdd } = this.state
    if (counter >= 10) {
      this.setState({
        counter: counter - 10,
        counterAdd: counterAdd + 1
      })
    } else {
      alert("You can't afford that!");
    }
  }

  resartGame = () => {
    this.setState({
      counter: 0,
      counterAdd: 1
    })
  }

  render() {
    let { counter, counterAdd } = this.state
    if (counter < 100) {
      return (
        <div className="App">
          <p><strong>Current Score: {counter}</strong></p>
          <button onClick={this.handleCounter}>+{counterAdd}</button>
          <button onClick={this.handleSubtract10} >Pay 10 to change from {counterAdd} to {counterAdd + 1}</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p><strong>Current Score: {counter}</strong></p>
          <p><strong>You Win!</strong></p>
          <button onClick={this.resartGame}>Play Again!</button>
        </div>
      );
    }
  }
}

export default App;
