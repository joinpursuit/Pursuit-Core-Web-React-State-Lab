import React from "react"
// import Button from "./button"

class Game extends React.Component{
    state={
        currentScore:0,
        currentStep:1,
        gameWon: "",
        showWin:"none"
    }
    handleStep=()=>{
        this.setState({
            currentScore:this.state.currentScore+this.state.currentStep
        })
        if((this.state.currentScore+this.state.currentStep) >= 100){
             this.handleWin()
        }
    }
    handleStepUpgrade=()=>{
        if((this.state.currentScore)>=10){

            this.setState({
                currentScore:this.state.currentScore-10,
                currentStep:this.state.currentStep+1
            })
        } else{
            alert(`user can't afford this change`)
        }
    }

    handleWin=()=>{
        this.setState({
                gameWon:'none',
                showWin:''
            })
    }
    handleRestart=()=>{
        this.setState({
                currentScore:0,
                currentStep:1,
                gameWon: "",
                showWin:"none"
            })
    }

    render(){return(
        <div>
            <h3>CURRENT SCORE: {this.state.currentScore}</h3>

            <div style={{display:`${this.state.gameWon}`}} >

                <input type="button" value={`+${this.state.currentStep}`} onClick={this.handleStep} display=""/>
                <input type="button" value={`pay 10 pts to change +${this.state.currentStep} to +${this.state.currentStep+1}`} onClick={this.handleStepUpgrade}/>
            </div>
            <div style={{display:`${this.state.showWin}`}} >
                <h3> YOU WIN! </h3>
                <input type="button" value="play agin" onClick={this.handleRestart}/>

            </div>

        </div>
    )}

}

export default Game;