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
    const style = {
      color : 'aqua',
      backgroundColor : 'black'
    }
    const style_h1  = {
      color :'pink'
      
    }
    return (
      
      <div>
        { /* 주석은 이렇게 쓴다 */}
        <h1 style={style_h1}>hello wold</h1>
        <h2 style = {style}>enjoy react</h2>
        <p className='hello'>{name}</p>
        <p> { 1+1 ===2 ? 'true' : 'false'} </p>
        </div>
    );
  }
}
export default App;
