import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      life: 1
    };
  }

  addOne = () => {
    //  console.log('button clicked');
    this.setState({
      count: this.state.count + this.state.life
    });
  };

  deal = () => {
    let souls = 10;
    let count = this.state.count;
    let life = this.state.life;

    console.log(count);

    if (count >= 10) {
      this.setState({
        count: count - souls,
        life: life + 1
      })
    } else {
      window.alert('Your time is up')
    }
  }

  secondChance = () => {
    this.setState({
      count: 0,
      life: 1
    })
  }


  render() {
    const { count, life } = this.state;

    if (count >= 100) {
      return (
        <div className='App'>
          <h2>Current Score: {count}</h2>
          <h3>You Won</h3>
          <button onClick={this.secondChance}>New Deal</button>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h2>Current Score: {count}</h2>
          <button onClick={this.addOne}>+{life}</button>
          <button onClick={this.deal}>Pay 10 points to change from +{life} to +{life + 1}</button>
        </div >
      );
    }
  }
}

export default App;
