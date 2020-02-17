import React from 'react';

class Clicker extends React.Component {    
    state = { count: 0, increase: 1 }

    handleClick = (e) => {
        if(this.state.count < 100) {
            this.setState((prevState, props) => {
                return {count: this.state.count + this.state.increase}
            })
        } else {
            alert("You won!")
        }
    }

    handleIncreasePoints = (e) => {
        if(this.state.count - 10 < 0){
            alert("Not enough points")
        } else {
            this.setState((prevState, props) => {
                return {
                    count: this.state.count - 10, 
                    increase: this.state.increase + 1
                }
            })
        }
    }
    render() {
        let {count, increase} = this.state
        return(
            <div>
            <h1>Welcome to the Clicker Game</h1>
            <h3>Current Score: {count}</h3>
            <button onClick={this.handleClick}> Plus {increase}</button>
            <br/>
            <button onClick={this.handleIncreasePoints}>Pay 10 points to chance from Plus {increase} to Plus {increase + 1}</button>
            </div>
        )
    }
}

export default Clicker;