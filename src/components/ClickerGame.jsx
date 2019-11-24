import React, { Component } from 'react'

export default class ClickerGame extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            increment: 1
        }
    }

    increment = () => {
        const score = this.state.score + this.state.increment;
        this.setState({ ...this.state, score });
        if (score >= 100) {
            return window.alert('You win');
        }
    }

    upgrade = () => {
        let score = this.state.score;
        if (score >= 10) {
            const increment = this.state.increment + 1;
            score = score - 10;
            this.setState({ ...this.state, score, increment });
        } else {
            return window.alert('You do not have enough points to upgrade!')
        }
    }

    reset = () => {
        this.setState({ score: 0, increment: 1 });
    }

    render() {
        const display = this.state.score >= 100 ? (
            <>
                <h1>You win!</h1>
                <button onClick={this.reset}>Play again</button>
            </>
        ) : (
                <>
                    <button className="btn" onClick={this.increment}>+ {this.state.increment}</button>
                    <br />
                    <button className="btn-upgrade" onClick={this.upgrade}>
                        Pay 10  points to change from {this.state.increment} to {this.state.increment + 1}
                    </button>
                </>
            )

        return (
            <div>
                <h1 className="score">Current Score: {this.state.score}</h1>
                {display}
            </div>
        )
    }
}
