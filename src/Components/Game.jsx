import React from 'react';
import './Game.css'

export default class Game extends React.Component {
    state = {
        score: 0,
        increment: 1
    }


    handleRestart = () => {
        this.setState({
            score: 0,
            increment: 1
        })
    }

    handleIncrement = () => {
        this.setState({
            score: this.state.score + this.state.increment
        })
    }

    handleBonus = () => {
        if (this.state.score >= 10) {
            this.setState({
                increment: this.state.increment + 1,
                score: this.state.score - 10
            })
        } else {
            window.alert('You don\'t have enough points to do boost your increment')
        }
    }

    render() {
        if (this.state.score >= 2) {
            return (
                <>
                    <h1>Your Score: {this.state.score} points</h1>
                    <br></br>
                    <hr></hr>
                    <h2>You Win!! </h2>
                    <h2>Congratulation</h2>
                    <hr></hr>
                    <button onClick={this.handleRestart}>Restart</button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Your Score: {this.state.score} points</h1>
                    <button onClick={this.handleIncrement}>Add {this.state.increment} point</button>
                    <button onClick={this.handleBonus}>Pay <strong style={{color: 'red'}}>10 points</strong> to be able to increment by <strong style={{color: 'green'}}>{this.state.increment + 1} points</strong>
                    </button>
                    <hr></hr>
                </>
            );
        }
    }
}