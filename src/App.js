import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      increaseIncrement: 1,
     
    }
  }

  incrementScore = () => {
    let { score } = this.state
    this.setState({
    score: score + 1
    })
    console.log('this increases the score', score)
  }

  useCoins= () => {
    let {score, increaseIncrement } = this.state
      if (score < 10) {
        window.alert(`You don't have enough coins`)
        return
      }

    this.setState({
      score: score - 10,
      increaseIncrement: increaseIncrement + 1

    })
  }
 
  render(){
    let {
        score,
          increaseIncrement
        } = this.state
        let increment = increaseIncrement
        let newIncrement = increment + 1
        console.log('new increment', newIncrement)

    if (score >= 100) { 
      return(
        <div className= 'App'>
            <h2>You won</h2>
          <button onClick={this.resetGame}> Restart Game</button>
        </div>
      )
    } else {

    return(
      <div className="App">
        <div className={increment}>
          <p> Current  Score: {score}</p>
          <button onClick={this.incrementScore}>+{increaseIncrement}</button>
          <br></br>
          <button onClick={this.useCoins}>Pay 10 points to change from +{increment} to +{newIncrement}</button>
        </div>
      </div>
         
    )
  }
    }
}




export default App;
