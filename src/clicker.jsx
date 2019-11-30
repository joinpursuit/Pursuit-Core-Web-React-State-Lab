import React from 'react';
import './clicker.css';

class Clicker extends React.Component {

	constructor(){
		super();
		this.state = {
			currentIncrement: 1,
			score: 0, 
			costToUpgrade: 10
		};
	}

	handleClick = () => {
		this.setState({score: this.state.score + this.state.currentIncrement});
	};

	upgrade = () => {
		if(this.state.costToUpgrade > this.state.score){
			window.alert('You dont have enough points!!');
		}
		else{
			this.setState({score: this.state.score - this.state.costToUpgrade,
				costToUpgrade: this.state.costToUpgrade + 10,
				currentIncrement: this.state.currentIncrement + 1});
		}
	}

	reset = () => {
		this.setState({score: 0, 
			costToUpgrade: 10,
			currentIncrement: 1})
	};







	
	render() {
		if(this.state.score >= 100){
			return (
				<div className = 'clicker'>
					<h1>Congratulations!! You Won!!!!</h1>
					<button onClick={this.reset}>Reset Game</button>
				</div>
			)
		}
		return (
			<div className = 'clicker'>
			<h1>Clicks for Dayz</h1>
			<b className='currentScore'>Current Score: {this.state.score}</b>
			<button onClick={this.handleClick}>{this.state.currentIncrement}+</button>
			<button onClick={this.upgrade}>Pay {this.state.costToUpgrade} points to upgrade increment from {this.state.currentIncrement}+ to {this.state.currentIncrement + 1}+ </button>
			</div>
			)
	}

}

export default Clicker;