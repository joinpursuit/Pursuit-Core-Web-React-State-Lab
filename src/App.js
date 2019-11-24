import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
constructor(){
  super();
  this.state = {
    counter:0, 
    increaseNum: 1
  }
}

increaseScore = (event) =>{
  let { counter, increaseNum } = this.state
  this.setState({
    counter: counter + increaseNum
  })
}

paySwitch = (event) => {
  let { counter, increaseNum } = this.state
  if(counter < 10){
    window.alert('You dont have enough coins')
    return;
  }
  this.setState({
    counter: counter - 10,
    increaseNum: increaseNum + 1
  })
}

resetGame = (event) => {
    this.setState({
      counter: 0, 
      increaseNum: 1
    })
}

render(){
  let { counter, increaseNum } = this.state
  if( counter >= 100){
    return(
      <div className = 'App'>
        <h2>You WON!</h2>
        <button onClick = {this.resetGame}>Reset</button>
      </div>
    )
  } else{
    return (
      <div className="App">
        <div className = 'game'>
          <h1>Current Score: { counter }</h1>
          <button onClick ={this.increaseScore}>+{ increaseNum }</button> <br></br>
          <button onClick = {this.paySwitch}>Pay 10 to switch +{ increaseNum } to +{ increaseNum +1 }</button>
        </div>
      </div>
    );
  }
}
}

  

export default App;
