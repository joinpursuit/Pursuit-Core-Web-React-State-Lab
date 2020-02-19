import React from 'react';
import './Game.css'
class Game extends React.Component{
state={
    score:0,
    points:1
}
handleStart = ()=>{

}
handlePoints =()=>{

}
handleBonus = ()=>{

}
render(){
    if(this.state.score >2){
        <>
        <h2>Score: {this.state.score} !</h2>
        <h1>You Win</h1>
        <button onClick={this.handleStart}>Start</button>

        </>
    }else{
        return(
            <>
    <h2>Score: {this.state.score} !</h2>
    <button onClick={this.handlePoints}>Add {this.state.points} </button>
    <button onClick={this.handleBonus}>You cant afford that!</button>
            </>
        )
    }

}


}


export default Game;