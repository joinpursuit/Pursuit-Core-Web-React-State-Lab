import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countIncrement: 1,
      incrementToll: 10
    }
  }

    handleIncreaseCount = () => {
      let {count, countIncrement} = this.state
      this.setState({
        count: count + countIncrement
      })
    }

    handleIncreaseCountIncrement = () => {
      let {count, countIncrement} = this.state

      if(count > 9){
        this.setState({
          count: count - 10,
          countIncrement: countIncrement + 1
        })
      } else{
        window.alert('Not enough points to spend')
      }
      
    }

    handleClearScore = () => {
      this.setState({
        count: 0,
        countIncrement: 1
      })
    }

    render() {
    let {count, countIncrement, incrementToll} = this.state

    if(count > 99){
      return (
        <div className="App">
          <div className='score'>
            <h1>Current Score: {count}</h1>
          </div>
          <div>
            <button onClick= {this.handleClearScore}>Restart Game</button>
          </div>
          <div>
            <h3>You Win!!!</h3>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className='score'>
            <h1>Current Score: {count}</h1>
          <div> 
            <button onClick= {this.handleIncreaseCount}>+{countIncrement}</button>
          </div>         
          <div>
            <button onClick= {this.handleIncreaseCountIncrement}>Spend {incrementToll} points to increase from +{countIncrement} to +{countIncrement + 1} </button>
          </div> 
          <div>
            <button onClick= {this.handleClearScore}>Clear Score</button>
          </div>  
          </div>
        </div>
      );
    }
      
    }
}

export default App;
