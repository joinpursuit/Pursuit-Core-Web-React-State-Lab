import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      adder: 1,
      clicker: 0,
      clickLog: []
    }
  }

  addToCount = (event) => {
    let {counter, adder, clicker} = this.state
    this.setState({
      counter: counter + adder,
      clicker: clicker + 1
    })
  }

  addToAdder = (event) => {
    let {counter, adder, clicker} = this.state
    
    if (counter < 10) {
      window.alert(`You can't afford that!`)
      return
    }

    this.setState({
      counter: counter - 10,
      clicker: clicker + 1,
      adder: adder + 1
    })
  }

  reset = () => {
    let {clicker, clickLog} = this.state
    clickLog.push(clicker)
    this.setState({counter: 0, adder: 1, clicker:0, clickLog})
  }

  render() {
    let {counter, adder, clicker, clickLog} = this.state

    if (counter < 100) {
      return (
        <div className="App">
          <h1>Clicks: {clicker}</h1>
          <h1>Current Score: {counter}</h1>
          <button onClick={this.addToCount}>+{adder}</button>
          <p></p>
          <button onClick={this.addToAdder}>Pay 10 points to change from +{adder} to +{adder + 1}</button>
          <ul>{clickLog.map(c => `<li>`+c+`</li>\n`).join('')}</ul>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Clicks: {clicker}</h1>
          <h1>Current Score: {counter}</h1>
          <h2>You've Won!</h2>
          <button onClick={this.reset}>Play Again</button>
        </div>
      )
    }
  }
}
        

export default App;
