import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      flavor: 1,
      cost: 5
    }
  }

  handleClick = () => {
    let counter = this.state.counter;
    let flavor = this.state.flavor;

    this.setState({
      counter: counter + flavor
    })
  }

  handleFlavor = () => {
    let counter = this.state.counter;
    let flavor = this.state.flavor;
    let cost = this.state.cost;

    if (counter >= cost) {
      this.setState({
        counter: counter - cost,
        flavor: flavor + 1,
        cost: cost + 5
      })
    } else {
      window.alert("You call that FLAVOR?! YOU DISGUST ME! EARN MORE FLAVOR, YOU FOOL!")
    }
  }

  handleReset = () => {
    let counter = this.state.counter;
    let flavor = this.state.flavor;
    let cost = this.state.cost;

    this.setState({
      counter: 0,
      flavor: 1,
      cost: 5
    })
  }

  render() {
    let {counter, flavor, cost} = this.state

    if (counter >= 10000) {
      return (
        <div className="App">
          <div className="Counter">
            <h1>Clicky Sweats</h1>
            <h1>YOU WIN!</h1>
            <h2>Flavor Points: {counter}</h2>
          </div>
          <div className="image">
            <img src="https://vignette.wikia.nocookie.net/tmnt/images/e/e8/Meatsweats_Profile_Pic.png/revision/latest/scale-to-width-down/640?cb=20190618031644" alt="Rupert Swaggart"></img>
          </div>
          <div className="button">
            <h3>Flavor MULTIPLIER: X{flavor}</h3>
            <button onClick={this.handleReset}>RESET</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="Counter">
            <h1>Clicky Sweats</h1>
            <h2>Flavor Points: {counter}</h2>
          </div>
          <div className="image">
            <img onClick={this.handleClick} src="https://vignette.wikia.nocookie.net/tmnt/images/e/e8/Meatsweats_Profile_Pic.png/revision/latest/scale-to-width-down/640?cb=20190618031644" alt="Rupert Swaggart"></img>
          </div>
          <div className="button">
            <h3>Cost to UNLEASH: {cost}</h3>
            <button onClick={this.handleFlavor}>UNLEASH THE FLAVOR!</button>
            <h3>Flavor MULTIPLIER: X{flavor}</h3>
          </div>
        </div>
      );
    }
  }
}

export default App;
