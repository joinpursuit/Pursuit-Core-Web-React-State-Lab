import React, {Component} from "react";
import "../CSS/GameReset.css";

class GameReset extends Component {
    gameResetFunc = () => {
        this.props.onButtonClick()
    }
    render () {
        return (
            <div name="gameReset">
                <h1>VICTORY!!</h1>
                <button name="gameResetButton" onClick={this.gameResetFunc}>Would You Like to Duel One More Time?</button>
            </div>
        )
    }
}

export default GameReset