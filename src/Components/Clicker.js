import React from "react";
import ReactDOM from "react-dom"

class Clicker extends React.Component{
        
    state = {
        counter: 0,
        increase: 1,
        cost: 10
    }
      
    playAgain = () => {
        window.location.reload(false)
    }
      
    handleClick = () => {
        let { counter, increase } = this.state
      
        if (counter >= 99) {
            const youWin = (
            <h1 id='won'>You Won!</h1>
          )
            const playAgain = (
            <button onClick={this.playAgain}>Play again</button>
          )
            ReactDOM.render(youWin, document.getElementById('won'))
            ReactDOM.render(playAgain, document.getElementById('again'))
        } else {
            this.setState({
            counter: counter + increase
          })
          }
    }
      
    increaseValue = () => {
        let { counter, increase, cost} = this.state
      
        if (counter >= cost) {
            this.setState({
              counter: counter - cost,
              increase: increase + 1,
              cost: cost + 10
            })
        } else {
            window.alert("you can't afford that!")
          }
    }
      
    render() {
        let { counter, cost, increase } = this.state
      
        return (
            <div className="App" id='main'>
            <h1> Current score: {counter}</h1>
            <div id='won'></div>
            <div id='again'></div>
            <br></br>
            <button onClick={this.handleClick}>+{increase}</button>
            <br></br>
            <br></br>
            <button onClick={this.increaseValue}>Pay {cost} points to change from +{increase} to +{increase + 1}</button>
            </div>
          )
    }
}
      
export default Clicker;