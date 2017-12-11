import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() { // 없으면 에러남
    // var const let es6는 var안쓰임
    // let 지역변수 const 전역변수
    // if문대신 조건부 연산자
    // [condition] ? [true] : [false]
    const name = 'hong3'
    return (
      
      <div>
        <h1>hello wold</h1>
        <h2>enjoy react</h2>
        <p>{name}</p>
        <p> { 1+1 ===2 ? 'true' : 'false'} </p>
        </div>
    );
  }
}
export default App;
