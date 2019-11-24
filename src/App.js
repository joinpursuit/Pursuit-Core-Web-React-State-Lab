import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      payFor: 1
    }
  }

  handleClick = () => {
    let counter = this.state.counter;
    let payFor = this.state.payFor;
    this.setState({
        counter: counter + payFor
      })
      console.log(counter)
  }

  pay = () => {
    let counter = this.state.counter;
    let price = 10;
    let payFor = this.state.payFor;

    if(counter >= 10) {
      this.setState({
        counter: counter - price,
        payFor: payFor + 1
      })
    } else {
      window.alert("You don't have enough points to do that!")
    }
  }

  restart = () => {
    this.setState({
      counter: 0,
      payFor: 1
    })
  }

  replay = () => {
    window.location.reload();
  }

    render() {
      let counter = this.state.counter
      if(counter >= 100) {
        return(
          <div>
          <h1>You won!</h1>
          <button onClick={this.replay}>Play Again</button>
          </div>)

      } else {
        return (
          <div className="App">
            <p>{this.state.counter}</p>
            <button onClick={this.handleClick}>+</button>
            <button onClick={this.pay}>Pay 10 points to change +{this.state.payFor} to +{this.state.payFor + 1}</button>
            <button onClick={this.restart}>Restart</button>
          </div>
        );
      }
  }
}


export default App;
