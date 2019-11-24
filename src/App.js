import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      score: 0,
      value: 1
    }
  }
  increaseScore = (event) => {
    let score = this.state.score;
    let value = this.state.value;

    this.setState({
      score: score + value,
    
    })
  }
  
  increaseValue = (event) => {
    let score = this.state.score;
    let value = this.state.value
  
    this.setState({
      score: score - 10,
      value: value + 1
    })
    return value
  }
  checkValue = (event) => {
    let score = this.state.score;

    if (score >= 10) {
        this.increaseValue()
    }else {
      window.alert('You cannot afford that.')
    }
    
  }

  handleClick = (event) => {
    let score = this.state.score;

    if (score < 100) {
      this.increaseScore()
    }else if (score >= 100) {
      this.winMessage()
      this.createReset()
    }
  }
  createReset = (event) =>{
    let reset = document.createElement('button')
    reset.innerText = 'Restart'
  }
  winMessage = (event) => {
    let para = document.querySelector('#print')
    para.innerText = 'You won'
  }

  render() {
    let score = this.state.score;
    let value = this.state.value;
    return (
      <div className="App">
        <p>{score}</p>
        <button onClick={this.handleClick}>Click Me!</button>
        <button onClick={this.checkValue}>Spend 10 points to increase button value from +{value} to +{value + 1}</button>
        <p id='print'></p>
      </div>
    );
  }
}

export default App;
