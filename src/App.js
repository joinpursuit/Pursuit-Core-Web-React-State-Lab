import React from 'react';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      points: 1
    }
  }
      
  handleClickAdd = () =>{
    let counter = this.state.counter;
    let points = this.state.points;


    //don't do this
    //this.state.counter = counter + 1
    
    //do this instead
    this.setState({
      counter: counter + points
    })
  }
  
  handlePayPoints = () =>{
    let {counter, points } = this.state;
    if (counter < 10){
      window.alert("not enough points")
      return;

    }
    
    this.setState ({
      counter: counter - 10,
      points: points +1
    })
  }
  
  handleClickReset = () =>{
    
    this.setState({
      counter: 0,
      points: 1
    })
  }

  scoreCheck = () =>{
    
    this.setState(
      this.handleClickReset()
    )
  }
  
  render(){
    let counter = this.state.counter
    let points = this.state.points
    if (counter >= 100){
      window.alert("you win")
      this.scoreCheck();
    }
    return (
      <div className="App">
        <p>Current Score: {counter}</p>
        <button onClick ={this.handleClickAdd}>+{points}</button>
        <button onClick ={this.handlePayPoints}>Pay 10 points to go from +{points} to +{points + 1}</button>
        <button onClick = {this.handleClickReset}>reset</button>
      </div>
    );
  }
        

  
  
}

export default App;
