import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      currCount: 1,
      clicks: 0
    };
  };

  addClick = (event) => {
    let { counter, currCount, clicks } = this.state;
    this.setState({
      counter: counter + currCount,
      clicks: clicks + 1
    });
  };

  subClick = (event) => {
    let { counter, currCount, clicks } = this.state;
    this.setState({
      counter: counter - 10,
      currCount: currCount + 1,
      clicks: clicks + 1
    });
  };

  checkPoints = (event) => {
    let { counter } = this.state;
    if (counter > 0) {
      this.subClick(event);
    }
  };

  resetClick = (event) => {
    this.setState({
      counter: 0,
      currCount: 1,
      clicks: 0
    });
  };

  render() {
    let { counter, currCount, clicks } = this.state

    if (counter >= 100) {
      return (
        <div className="App">
          <div className='win'>
            <p id='message' >You Win!</p>
            <p id='score'>Final Score: {counter}</p>
            <p id='clicks'>It took you {clicks} clicks to reach 100!</p>
            <button onClick={this.resetClick}> Play Again</button>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <div className='game'>
          <p id='score'>Current Score: {counter}</p>
          <button onClick={this.addClick}>Add {currCount}</button>
          <br></br>
          <p id='directions'> Pay 10 points to upgrade button to +{currCount + 1}</p>
          <button onClick={this.checkPoints} disabled={counter >= 10 ? false : true}>Upgrade</button>
        </div>
      </div>
    );
  };
};

export default App;
