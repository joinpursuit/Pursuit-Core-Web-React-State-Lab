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
    handleStepUpgrade=()=>{
        if(this.state.currentScore>=10){

            this.setState({
                currentScore:this.state.currentScore-10,
                currentStep:this.state.currentStep+1
            })
        }
    }

    render(){return(
        <div>
            <h3>current Score {this.state.currentScore}</h3>

            <input type="button" value={`+${this.state.currentStep}`} onClick={this.handleStep}/>
            <input type="button" value={`pay 10 pts to change +${this.state.currentStep} to +${this.state.currentStep+1}`} onClick={this.handleStepUpgrade}/>
        </div>
    )}

}

export default Game;