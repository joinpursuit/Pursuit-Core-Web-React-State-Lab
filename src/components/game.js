import React from "react"
// import Button from "./button"

class Game extends React.Component{
    state={
        currentScore:0,
        currentStep:1
    }
    handleStep=()=>{
        this.setState({
            currentScore:this.state.currentScore+this.state.currentStep
        })
    }

    render(){return(
        <div>
            <h3>current Score {this.state.currentScore}</h3>

            <input type="button" value={this.state.currentStep} onClick={this.handleStep}/>
        </div>
    )}

}

export default Game;