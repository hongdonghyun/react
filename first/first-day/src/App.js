import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponent from './MyComponent';
import './App.css';


class App extends Component {
  render() { // 없으면 에러남
    // 조건문 if
    //[조건] : [비교값] ? [true]:[false]
    const name = 'hong3'; //변수 선언 불변값, var 전역변수, let 로컬변수 es6 var는 안쓰임
    const style = {
      color : 'aqua',
      backgroundColor : 'black' // 카멜케이스
    }
    return (
      <div>
      <h1 className="hello">hello world</h1> {/*카멜케이스*/}
      <h2 style={style}>sdfsdfsd</h2> {/*카멜케이스*/}
      <p>{name}</p>
      <p>{ 1+ 1 === 2 ? '정답':'바보'}</p>
      <MyComponent/>

      </div>

    );
  }
}
export default App;
