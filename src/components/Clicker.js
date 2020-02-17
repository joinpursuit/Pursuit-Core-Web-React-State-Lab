import React from "react";

class Clicker extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <h3>Current Score: {this.state.count}</h3>
        <button></button>
        <button></button>
      </div>
    );
  }
}

export default Clicker;
