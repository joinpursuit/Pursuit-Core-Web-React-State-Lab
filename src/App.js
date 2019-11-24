import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      clickVal: 1,
    };
  }
  handleIncrement = () => {
  let {score, clickVal} = this.state;
    this.setState({
      score: score + clickVal,
    })
  }
  handleSpendPoints = () => {
    let {score, clickVal} = this.state;
    if(score >= 10) {
    this.setState({
      score: score - 10,
      clickVal: clickVal + 1,
    })}
    else {
      window.alert("You don't have enough points!")
    }
  }
  handleVictory = () => {
    let { score } = this.state;
    window.alert(`You win with a score of ${score}!`);
  }
  handleRestart = () => {
    this.setState({
      score: 0,
      clickVal: 1,
    })
  }
  render() {
  let { score, clickVal } = this.state;

  if(score >= 100){
    return (
    <div className="Winner">
      <h1>Current Score: {score}</h1>
      <h1> You Win! </h1>
      <button onClick={this.handleRestart}>Play Again!</button>
    </div>
    )
  }
  else {
  return (
    <div className="App">
      <h1>Current Score: {score}</h1>
      <button onClick={this.handleIncrement}>+{clickVal}</button>
      <button onClick={this.handleSpendPoints}>Pay 10 points to change from +{clickVal} to +{clickVal + 1}</button>
    </div>
  );
}
  }
}
export default App;
