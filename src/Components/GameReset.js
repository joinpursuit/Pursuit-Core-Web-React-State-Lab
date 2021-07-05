import React from "react";
import "../CSS/GameReset.css";

const gameReset = ({onButtonClick}) => {
    const gameResetFunc = () => {
        onButtonClick()
    }
    return (
        <div name="gameReset">
            <h1>VICTORY!!</h1>
            <button name="gameResetButton" onClick={gameResetFunc}>Would You Like to Duel One More Time?</button>
        </div>
    )
}


export default gameReset



//Don't Need Class to Re-Render
// class GameReset extends Component {
//     gameResetFunc = () => {
//         this.props.onButtonClick()
//     }
//     render () {
//         return (
//             <div name="gameReset">
//                 <h1>VICTORY!!</h1>
//                 <button name="gameResetButton" onClick={this.gameResetFunc}>Would You Like to Duel One More Time?</button>
//             </div>
//         )
//     }
// }