import React from 'react';

class Clicker extends React.Component {    
    state = { count: 0 }

    handleClick = (e) => {
        this.setState((prevState, props) => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return(
            <div>
            <h1>Welcome to the Clicker Game</h1>
            <h3>Current Score: {this.state.count}</h3>
            <button onClick={this.handleClick}>+1</button>
            <br/>
            <button >Pay 10 points to chance from +1 to +2</button>
            </div>
        )
    }
}

export default Clicker;