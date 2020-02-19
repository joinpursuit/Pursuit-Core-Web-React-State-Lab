import React from "react";
import "../master/Clicker.css";

class Clicker extends React.Component {
  state = { count: 0, increase: 1, win: false };

  handleClick = e => {
    this.setState((prevState, props) => {
      this.handleWin();
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

  handleWin = e => {
    this.setState((prevState, props) => {
      if (prevState.win) {
        let gameDisplay = document.querySelector("#gameDisplay");
        let winner = document.querySelector("#winner");
        let playAgainBtn = document.querySelector("#playAgainBtn");
        winner.innerHTML = "You won!!";
        gameDisplay.hidden = true;
        winner.hidden = false;
        playAgainBtn.hidden = false;
      }
    });
  };

  playAgain = e => {
    this.setState((prevState, props) => {
      if (prevState.win) {
        return { count: 0, increase: 1, win: false };
      }
    });
    let gameDisplay = document.querySelector("#gameDisplay");
    let winner = document.querySelector("#winner");
    let playAgainBtn = document.querySelector("#playAgainBtn");
    gameDisplay.hidden = false;
    winner.hidden = true;
    playAgainBtn.hidden = true;
  };

  render() {
    let { count, increase } = this.state;
    return (
      <>
        <div id="gameDisplay">
          <h3>Current Score: {count}</h3>
          <button onClick={this.handleClick}>{increase}</button>
          <button onClick={this.handleIncrease}>
            Upgrade to {increase + 1} with 10 points
          </button>
        </div>
        <div id="winner"></div>
        <div>
          <button id="playAgainBtn" hidden={true} onClick={this.playAgain}>
            Play again?
          </button>
        </div>
      </>
    );
  }
}

export default Clicker;
