import React from 'react';
import './App.css';

// Display the current score to the user
// Clicking a button increments the score by one
// Have a button where the user can spend points to increase the value of each click
// Display a warning if the user doesn't have enough points to spend
// When the user has 100 points, display a victory screen
// Have a button that resets the game
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      pay: 1,
      price: 10
    }
  }
  handleClick = (event) => {
    // console.log("the button was clicked", event)
    let counter = this.state.counter;
    let pay = this.state.pay;
    // let count = this.state.count
    this.setState({
      counter: counter + pay,
    })
  }
handleAddBy = (event) => {
let pay = this.state.pay;
let price = this.state.price;
let counter = this.state.counter;

if(counter >= price){
 this.setState({
counter: counter - price,
pay: pay + 1})
}
// else if(counter >= 100){
else{
  window.alert("You can't afford that")
}
}

playAgain = () => {
  window.location.reload()
}

render() {
    let counter = this.state.counter;
    if(counter >= 100){
      return (
        <div className="won">
        <h2>You Win!</h2>
        <button className="playButton" onClick={this.playAgain}>Play Again!</button>
        </div>
      )
      
    }else{
    return(
      <div className="App">
        <p>Current Score: {counter}</p>
        <button onClick={this.handleClick}>+{this.state.pay}</button>
        <button onClick={this.handleAddBy}>Pay 10 points to change from +{this.state.pay} to +{this.state.pay + 1}</button>
      </div>
    )
    }
  }
}

export default App;
