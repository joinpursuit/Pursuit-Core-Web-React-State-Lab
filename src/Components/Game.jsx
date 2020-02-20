import React from 'react';
import './Game.css'
export default class Game extends React.Component {
    state = {
        score: 0,
        points: 1
    }
    handleStart = () => {
        this.setState({
            score: 0,
            points: 1
        })
    }

    handlePoints = () => {
        this.setState({score: this.state.score + this.state.points})
    }

    handleBonus = () => {
        if (this.state.score > 10) {
            this.setState({
                points: this.state.points + 1,
                score: this.state.score - 10
            })
        } else {
            window.alert("You don't have enough points")
        }
    }

    render() {
        if (this.state.score > 2) {
            return (
                <>
                    <h1>Your Score: {this.state.score} points</h1>
                    <h2>You Win!! </h2>
                    <button onClick={this.handleStart}>Restart</button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Your Score: {this.state.score} points</h1>
                    <button onClick={this.handlePoints}>Add {this.state.points} point</button>

                    <hr></hr>
                </>
            );
        }
    }
}



