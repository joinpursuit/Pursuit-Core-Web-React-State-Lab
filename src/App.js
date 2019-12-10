import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      count: 1,
    };
  }


  handleClick = () => {

    this.setState({
      score: this.state.score + this.state.count
    })

  }

  ChangeCount = () => {
    if (this.state.score < 10) {
      window.alert("You can't afford that!")
    }
    if (this.state.score >= 10) {
      this.setState({
        count: this.state.count + 1,
        score: this.state.score - 10
      })
    }
  }

  PlayAgain = () => {
    if (this.state.score >= 100) {
      this.setState({
        score: 0,
        count: 1
      })
    }
  }
  render() {
    let screen1 = (<div><h2>Current Score: {this.state.score}</h2><button onClick={this.handleClick}>+{this.state.count}</button><p></p><button onClick={this.ChangeCount}>Pay 10 points to change from +{this.state.count} to +{this.state.count + 1}</button> </div>)

    let screen2 = (<React.Fragment> <h2>You Win!</h2><button onClick={this.PlayAgain}>Play Again</button></React.Fragment>)
    return (

      <div className="App">
        {this.state.score >= 100 ? screen2 : screen1}
      </div>

    )
  }
}

export default App;
