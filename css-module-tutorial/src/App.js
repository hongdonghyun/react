import React, { Component } from 'react';
import style from './App.css';
console.log(style)
console.log(style.blueBox)
class App extends Component {
  render() {
    return (
      <div>
        <div className={style.blueBox}></div>
        <div className="redBox"></div>
      </div>
    );
  }
}

export default App;