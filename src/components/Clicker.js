import React from 'react';

class Clicker extends React.Component {
        state = {count: 0, multiplier:1, winner:false}
        
        // this.handleClick = this.handleClick.bind(this);
    handleWin = (e) => {
        this.setState((prevState,props) => {
            if(prevState.winner){
                let clickers = document.querySelector("#clickers")
                clickers.innerHTML="You win";
                let playBtn = document.querySelector("#playAgin")
                playBtn.hidden=false
                return {winner:false}
             }
            })
        }
        
    handleClick = (e) => {
            this.setState((prevState, props) => {
                this.handleWin()
                if(prevState.count+prevState.multiplier>=100){
                    return {count: prevState.count + prevState.multiplier, winner:true}
                }else{
                    return {count: prevState.count + 50}
                    // return {count: prevState.count + prevState.multiplier}
                }
            })
    }

    updateClick = (e) => {
        this.setState((prevState, props) => {
            if(this.state.count<10){
                alert("you can't afford upgrade")
            }else{
                return {count: prevState.count - 10, multiplier: prevState.multiplier+1}
            }
        })
    }

    render() {
        return(
            <h2>
                {/* {this.handleWin} */}
              Current Score {this.state.count} point!
              <br></br>
              <div id="clickers">
                <button onClick={this.handleClick}>+{this.state.multiplier} point</button>
                <button onClick={this.updateClick}>Pay 10 Point to upgrade</button>
                <button id="playAgin" onClick={this.playAgin} hidden="true">Play Agin</button>
              </div>
            </h2>
        )
    }
}

export default Clicker;