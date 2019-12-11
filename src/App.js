import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      clickPower: 1,
      existOptions: ["exists", "notExist"],
      existIndex: 0,
      winnerOptions: ["exists", "notExist"],
      winnerIndex: 1,
      winner: "You Won!!!"

    }
  }

  addPoint = (event) => {
    let counter = this.state.counter;
    let clickPower = this.state.clickPower;
    this.setState({
      counter: counter + clickPower
    })
    // console.log(counter)
  }

  upgradeButton = () => {
    let counter = this.state.counter;
    let clickPower = this.state.clickPower;

    if(counter >= 10) {
    // console.log("Counter", counter, "ClickPower", clickPower)
      
      this.setState({
        clickPower: clickPower + 1,
        counter: counter - 10
      })

    } else {
      window.alert("Dont have enough points");
    }
    // console.log("Counter", counter, "ClickPower", clickPower)
  }

  reset = () => {

    // let counter = this.state.counter;
    // let clickPower = this.state.clickPower;
    this.setState({
      counter: 0,
      clickPower: 1,
      winner: "You Won!!!"
    })
  }

  render() {
    // this.handleClick();
    let { clickPower, counter, existIndex, existOptions, winnerIndex, winnerOptions } = this.state
    let exists = existOptions[existIndex]
    let winYet = winnerOptions[winnerIndex]
    let victory = this.state.winner


    if(this.state.counter >= 100) {
      return (
        <div className="App">
          <p>Current Score</p>
          <p>{counter}</p>
          <p>{victory}</p>
          <button onClick={this.reset}>Restart Game</button>

        </div>
    );
    } else {
      return (
        <div className="App">
          <p>Current Score</p>
          <p>{counter}</p>
          
          <button className={exists} onClick={this.addPoint}>{ clickPower }</button>
          <button className={exists} onClick={this.upgradeButton}>Power Up by 1</button>

        </div>
    );
    }
    // if(this.state.counter >= 100) {
    //   let { existIndex } = this.state
    //   let { winnerIndex } = this.state

    //   this.setState({
    //     existIndex: existIndex + 1,
    //     winnerIndex: winnerIndex - 1
    //   })
    // }


  }
}

export default App;

