import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      currCount: counter,
      nextCount: counter +1
    }
  }

  addClick = (event) => {
    let { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  subClick = (event) => {
    let { counter } = this.state;
    this.setState({
      counter: counter - 10
    })
  }

  render() {
    let { counter } = this.state
    return (
      <div className="App">
        <p>Current Score: {counter}</p>
        <button onClick={this.addClick}>+</button>
        <button onClick={this.subClick}>Pay 10 points to upgrade from {counter} to {counter + counter}</button>
      </div>

    );

  }
}

export default App;
