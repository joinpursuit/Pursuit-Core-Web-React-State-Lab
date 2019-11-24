import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      clickPower: 1
    }
  }

  addPoint = (event) => {
    let counter = this.state.counter;
    let clickPower = this.state.clickPower;
    this.setState({
      counter: counter + clickPower
    })
    if(counter >= 100) {
      window.alert("You won")
    }
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

  render() {
    // this.handleClick();
    let { clickPower } = this.state
    let { counter } = this.state

    return (
        <div className="App">
          <p>Current Score</p>
          <p>{counter}</p>
          <button className="clicker" onClick={this.addPoint}>{ clickPower }</button>
          <button className="upgrader" onClick={this.upgradeButton}>Power Up by 1</button>
        </div>
    );
  }
}

export default App;
