import React, {Component} from "react";
import "../CSS/ClickerGame.css";
import GameReset from './GameReset'


class ClickerGame extends Component {
  state = { 
    score: 0, 
    evolution: 1, 
    endGame: false 
  };

  handleMove = () => {
    this.setState(prevState => {
      if (prevState.score + prevState.evolution >= 100) {
        return { 
          score: prevState.score + prevState.evolution,
          endGame: true 
        };
      } else {
        return { 
          score: prevState.score + prevState.evolution
        };
      }
    });
  };

  handleEvolution = () => {
    this.setState((prevState) => {
      if (this.state.score < 5) {
        alert("Evolution Insufficience");
      } else {
        return {
          score: prevState.score - 5,
          evolution: (prevState.evolution + 1)
        };
      }
    });
  };
  gameReset = () => {
    this.setState({
        score: 0, 
        evolution: 1,
        endGame: false 
      }
    )
  };
  render() {
    let { score, evolution } = this.state;
    return (
      <>
        <div id="gameView">
          <h2>Your Current Score: {score}</h2>
          <button onClick={this.handleMove}>Evolve {evolution}</button>
          <button onClick={this.handleEvolution}> Upgrade to {evolution + 1} with 5 points </button>
        </div>
        {this.state.endGame ? <GameReset onButtonClick={this.gameReset}/> : null } 
      </>
    );
  }
}

export default ClickerGame;