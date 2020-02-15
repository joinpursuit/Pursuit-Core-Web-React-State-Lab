import React from "react";

class Clicker extends React.Component {
  state = { count: 0 };

  handleClick = e => {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        Clicker. You clicked {this.state.count} times{" "}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Clicker;
