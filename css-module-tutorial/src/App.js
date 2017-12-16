import React, { Component } from 'react';
import style from './App.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

class App extends Component {
  render() {
    return (
      <div>
        <div className={cx('card','one')}></div>
        <div className={cx('card','two')}></div>
        <div className={cx('card','three')}></div>
        <div className={cx('card','four')}></div>
        
      </div>
    );
  }
}

export default App;