import React from "react"

class Button extends React.Component{

    state={
        step:"1",
        text:"1"
    }


    render({this.state.step,this.state.text}){return(
        <button value={this.state.step}>{this.state.text}</button>
    )}
}

export default Button;