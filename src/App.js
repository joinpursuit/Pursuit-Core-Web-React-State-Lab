import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 90,
      currCount: 1
    }
  }

  addClick = (event) => {
    let { counter, currCount } = this.state;
    this.setState({
      counter: counter + currCount
    })
  }

  subClick = (event) => {
    let { counter, currCount } = this.state;
    this.setState({
      counter: counter - 10,
      currCount: currCount + 1
    });
  }
  enoughPoints = (event) => {
    let { counter } = this.state;
    if (counter > 0 && counter >= 10) {
      this.subClick(event)
    } else {
      window.alert('not enough points')
    }
  }

  resetClick = (event) => {
    this.setState({
      counter: 0,
      currCount: 1
    });
  }

  render() {
    let { counter, currCount } = this.state
    if (counter >= 100) {
      return (
        <div className="App">
          <div className='win'>
          <p>Current Score: {counter}</p>
            <p>You Win</p>
            <button onClick={this.resetClick}> Reset</button>
          </div>
        </div>
      )
    }
    return (
      <div className="App">
        <div className='game'>
          <p>Current Score: {counter}</p>
          <button onClick={this.addClick}>+{currCount}</button>
          <button onClick={this.enoughPoints}>Pay 10 points to upgrade from {currCount} to {currCount + 1}</button>
        </div>
      </div>

    );
  }
}

export default App;
