/*
Joseph P. Pasaoa
Clicker App | React State Lab
*/


/* IMPORTS */
    // components
import React from 'react';
    // css
import './App.css';
    // helpers
let { log } = require('../utils/helpers.js');
    
    
/* BODY */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 1
    });
  }

  render() {
    return (
      <div id="base-grid">
        
      </div>
    );
  }
}


export default App;
