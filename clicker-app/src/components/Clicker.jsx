import React, { Component } from "react";

class Clicker extends Component {
  state = {
    count: 0,
    increment: 1
    
  };



  handleIncrement = () => {
    let { count, increment } = this.state;
    this.setState({
      count: count + increment
   });
  };

  handlePayPoints = e => {
    let { count, increment } = this.state;
    if (count < 10) {
      window.alert("Not enough points");
      return;
    }

    this.setState({
      count: count - 10,
      increment: increment + 1
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
      increment: 1
    });
  };

  render() {
    let { count, increment } = this.state;
    
    return (
      <div>
        <h1>Current Score: {count}</h1>
        <button onClick={this.handleIncrement}>+{increment}</button>
        <button onClick={this.handlePayPoints}>Pay 10 points to go from +{increment} to +{increment+1}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Clicker;

  
