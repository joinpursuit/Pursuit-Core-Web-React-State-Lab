import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    //  console.log('button clicked');
    this.setState({
      count: this.state.count + 1
    });
  };


  subtract = () => {
    this.setState({
      counter: this.state.count - 10
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h2>Current Score: {count}</h2>
        <button onClick={this.addOne}>{count}</button>
        <button onClick={this.subtract}>Pay 10 points to change from{+count} to {count + 1}</button>
      </div >
    );
  }
}

export default App;
