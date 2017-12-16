import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from './components/palette'

const colors =['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3
  state = { /*해당 데이터가 Render에 영향을 미칠때 state에 넣는다. */
    input:'',
    todos: [
      { id:0, text: '테스트1',checked:false},
      { id:1, text: 'Test2', checked:true},
      { id:2, text: 'ㅇㅎ', checked:false}
    ],
    color:'#343a40'
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const { input,todos } = this.state
    this.setState({
      input:'',
      todos: todos.concat({
        id:this.id++,
        text:input,
        checked:false
      })
    });
  }
  handleKeyPress = (e) =>{
    if(e.key==='Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const {todos} =this.state;
    // 파라미터로 받은 ID를 가지고 몇번째에 위치했는지 리턴
    // 값을 리턴하고 싶은경우 find 
    const index = todos.findIndex(todo=>todo.id===id);
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked:!selected.checked
    };
    this.setState({
      todos:nextTodos
    });
  }
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState ({
      todos:todos.filter(todo=>todo.id !== id)
    })
  }
  render() {
    const {input,todos,color} =this.state;
    const {
      handleChange,handleCreate,handleKeyPress,handleToggle,handleRemove
    } = this;
    return (
    <TodoListTemplate form={(
    <Form
      value={input}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onCreate={handleCreate}
    />
    )}
    palette={(
      <Palette
      colors = {colors}
      />
    )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;