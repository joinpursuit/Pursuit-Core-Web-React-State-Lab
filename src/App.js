import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      incrementNum: 1,
      pay: 10
    }
  }
  handleAdd = (event) => {
    let score = this.state.score;
    let incrementNum = this.state.incrementNum
    this.setState({
      score: score + incrementNum
    })
  }
  handlePay = (event) => {
    let { score, incrementNum, pay } = this.state;
    if (score < 10) {
      console.log('error not enough')
      window.alert('Not enough points');
      return
    }
    this.setState({
      score: score - pay,
      incrementNum: incrementNum + 1
    })
  }

  resetGame = (event) => {
    this.setState({
      score: 0,
      increaseNum: 1
    })
  }




  render() {
    let { score, incrementNum, pay } = this.state;
    if (score >= 99) {
      return (
        <div className="App">
         <h1>Current Score: {score}</h1>
         <h1>You WON</h1>
         <button onClick ={this.resetGame}> Play Again</button>
         </div>
      )
    }else {
      return (
        <div className ="App">
          <p> Current Score : {score}</p>
          <button onClick={this.handleAdd}>+ {incrementNum} </button> <br></br>
          <button onClick={this.handlePay}>Pay {pay} to change +{incrementNum} to +{incrementNum + 1} </button>
        </div>
      ) 
    }
  }
}

  export default App;