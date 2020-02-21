import React from 'react';
 class Clicker extends React.Component {
  state = {
    count: 0, 
    multiplier: 1
  }
   handleClick = () => {
    this.setState({
      count: this.state.count + 1 * this.state.multiplier
   })
 }
  handlePayPoint = () => {
    if(this.state.count <= 10) {
      window.alert("You can't afford that!")
    }else {
      this.setState({
        count: this.state.count - 10,
        multiplier: this.state.multiplier + 1
      })
    }
  }

  handleClickReset = () => {
    this.setState({
      count: 0,
      multiplier: 1
    })
  }


  render() {
    const isWinner = this.state.count >= 100
    return (
      <div>
       <h2>Current Score: {this.state.count} </h2> 
        {!isWinner && 
        <>
        <button onClick={this.handleClick}>+{this.state.multiplier}</button>
        <br/>
        <button onClick={this.handlePayPoint}>Pay 10 points to change from +{this.state.multiplier} to +{this.state.count}</button>
        </>
        }
        {isWinner && 
          <>
          <p>
          You win!
          </p>
          <button onClick= {this.handleClickReset} >Play again</button>
          </> 
        }
       </div> 
    )
  }
}


export default Clicker;