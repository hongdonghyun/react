import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
    <TodoListTemplate form={<Form/>}>
        
      </TodoListTemplate>
    );
  }
}

export default App;