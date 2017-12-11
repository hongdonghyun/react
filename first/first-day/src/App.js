import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() { // 없으면 에러남
    const name = 'hong3'
    return (
      
      <div>
        <h1>hello wold</h1>
        <h2>enjoy react</h2>
        <p>{name}</p>
        </div>
    );
  }
}
export default App;
