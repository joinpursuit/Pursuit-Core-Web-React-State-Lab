import React from 'react';

class Clicker extends React.Component {
    
        state = { count: 0 };
        increase = {increase : 1}

    handleClick = (e) => {
        if(this.state.count < 100) {
            this.setState((prevState, props) => {
                return {count: this.state.count + this.increase.increase}
            })
        } else {
            alert("You won!")
            this.setState((prevState, props) => {
                return(
                    this.state.count = 0,
                    this.increase.increase = 1
                    
                ) 
            })
        }
    }
    pointIncrease = (e) => {
        if(this.state.count - 10 < 0) {
            alert("You don't have enough points")
        } else {
            this.setState((prevState, props) => {
                return(
                    this.increase.increase += 1,
                    this.state.count -= 10
                ) 
            })
        }
    }

    render() {
        return(
            <div>
                <h1>Current Score: {this.state.count}</h1>
                <button onClick={this.handleClick}>+{this.increase.increase}</button>
                <button onClick={this.pointIncrease}>Pay 10 points to change from +{this.increase.increase} to +{this.increase.increase + 1}</button>
            </div>
        )
    }
}

export default Clicker;