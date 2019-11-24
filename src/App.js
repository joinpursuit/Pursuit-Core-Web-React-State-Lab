import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      increment: 1
    }
  }

  addOne = (event) => {
    let {score, increment} = this.state
    this.setState({
      score: score + increment
    })
  }

  changeBtn = (event) => {
    let {score, increment} = this.state
    if (score < 10) {
      window.alert("You can't afford that!")
    } else {
      this.setState({
        score: score - 10,
        increment: increment + 1
      })
    }
  }

  refreshPage = () => {
    window.location.reload()
  }

  render() {
    let {score, increment} = this.state
    if (score >= 100) {
      return (
        <div className="App">
        <h1>Current Score: {score}</h1>
        <h1>You Win!</h1>
        <button onClick={this.refreshPage}>Play Again!</button>
      </div>
      )
    } else {
      return (
        <div className="App">
          <h1>Current Score: {score}</h1>
          <button onClick={this.addOne}> +{increment} </button>
          <br></br>
          <button onClick={this.changeBtn} >Pay 10 points to change from +{increment} to +{increment + 1}</button>
        </div> 
    )
   }
 }
}

export default App;
