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
      <div className="click">
       <h1 className="clickerItems">Current Score: {this.state.count} </h1> 
       <br/>
        {!isWinner && 
        <>
        <button className="clickerItems" onClick={this.handleClick}>+{this.state.multiplier}</button>
        <br/>
        <button className="clickerItems" onClick={this.handlePayPoint}>Pay 10 points to change from +{this.state.multiplier} to +{this.state.count}</button>
        </>
        }
        {isWinner && 
          <>
          <p className="clickerItems">
          You win!
          </p>
          <button className="clickerItems" onClick= {this.handleClickReset} >Play again</button>
          </> 
        }
       </div> 
    )
  }
}


export default Clicker;