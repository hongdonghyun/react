import React, { Component } from 'react';
class MyComponent extends Component {

  state = {
    lastname:'',
    firstname:'',
    names:[]

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value,
    })

  }


  handleClick = () => {
    const { lastname,firstname,names } = this.state;
    this.setState({
      firstname:'',
      lastname:'',
      names:[...names,`${lastname}${firstname}`]
    });
  }

  handleKeyPress = (e) => {
    if(e.key=='enter') {
      this.handleClick();
    }
  }
  render() {
    const {handleChange,handleClick,handleKeyPress} = this;
    const { lastname,firstname,names} = this.state;
    return (
      <div>
      <input name = "lastname" placeholder="성" onChange={handleChange}/>
      <input name = 'firstname' placeholder="이름" onChange={handleChange} onKeyPress={handleKeyPress}/>
      <button onClick={handleClick}>등록</button>
      <h2>{names.join(', ')}</h2>
      </div>
    )
  }
}
export default MyComponent;
