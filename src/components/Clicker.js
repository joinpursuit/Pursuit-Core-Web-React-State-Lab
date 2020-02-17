import React from "react";

class Clicker extends React.Component {
  state = { count: 0, increase: 1, win: false };

  handleClick = e => {
    this.setState((prevState, props) => {
      // this.handleWin();
      if (prevState.count + prevState.increase >= 100) {
        return { count: prevState.count + prevState.increase, win: true };
      } else {
        return { count: prevState.count + prevState.increase };
      }
    });
  };

  handleIncrease = e => {
    this.setState((prevState, props) => {
      if (this.state.count < 10) {
        alert("You can't afford upgrade..");
      } else {
        return {
          count: prevState.count - 10,
          increase: (prevState.increase += 1)
        };
      }
    });
  };

  render() {
    let { count, increase } = this.state;
    return (
      <div id="gameDisplay">
        <h3>Current Score: {count}</h3>
        <button onClick={this.handleClick}>{increase}</button>
        <button onClick={this.handleIncrease}>Upgrade to {increase + 1}</button>
        <button id="playAgainBtn" hidden="true" onClick={this.playAgain}>
          Play again?
        </button>
      </div>
    );
  }
}

export default Clicker;
