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

    increasePoints = (e) => {
        if(this.state.count - 10 < 0){
            alert("Not enough points")
        } else {
            this.setState((prevState, props) => {
                return {count: this.state.count - 10}
            })
        }
    }
    render() {
        return(
            <div>
            <h1>Welcome to the Clicker Game</h1>
            <h3>Current Score: {this.state.count}</h3>
            <button onClick={this.handleClick}>+1</button>
            <br/>
            <button onClick={this.increasePoints}>Pay 10 points to chance from +1 to +2</button>
            </div>
        )
    }
}

export default Clicker;