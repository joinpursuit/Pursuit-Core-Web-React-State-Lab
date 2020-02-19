import React from "react";

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, currentCount: 1, enoughPoints: " " };
  }
  handleAddClick = () => {
    const { count, currentCount } = this.state;
    this.setState({
      count: count + currentCount,
      enoughPoints: " "
    });
  };

  handleSubClick = () => {
    const { count, currentCount } = this.state;
    this.setState({
      count: count - 10,
      currentCount: currentCount + 1
    });
  };

  checkScore = () => {
    const { count } = this.state;
    if (count < 10) {
      this.setState({
        enoughPoints: false
      });
    } else {
      this.setState({
        enoughPoints: true
      });
      this.handleSubClick();
    }
  };

  reset = () => {
    this.setState({
      count: 0,
      currentCount: 1,
      enoughPoints: " "
    });
  };

  render() {
    const { count, enoughPoints } = this.state;
    if (count >= 100) {
      return (
        <div>
          <p> You reached {count}! You win!!! </p>
          <button onClick={this.reset}>Reset Game</button>
        </div>
      );
    }

    return (
      <div>
        Clicker. You clicked {count} times{" "}
        <button onClick={this.handleAddClick}>Click me</button>
        <button onClick={this.checkScore}>
          Pay 10 points to upgrade button!
        </button>
        {enoughPoints === false ? (
          <p>You don't have enough points, keep clicking!</p>
        ) : null}
      </div>
    );
  }
}

export default Clicker;
