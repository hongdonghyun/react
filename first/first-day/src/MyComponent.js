import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        number :0,
        lastname:'',
        firstname:'',
        names:[]
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    handleChange =  (e) => {
        const { name,value } = e.target;
        this.setState({
            [name]:value
        });
    }
    handleClickbtn2 = () => {
        const { lastname,firstname,names} = this.state;
        this.setState({
            lastname:'',
            firstname:'',
            names: [...names, `${lastname}${firstname}`]
        });
        this.lastnameInput.focus();
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClickbtn2();
        }
    }
    render() {
        const { handleClick,handleChange,handleClickbtn2,handleKeyPress} = this;
        const { number,lastname,firstname,names } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick= {handleClick}>Click me!
                </button>
                <br/>
                <input onChange={handleChange} ref={ref=>this.lastnameInput=ref} name='lastname' value={lastname} placeholder='성'/>
                <input onChange={handleChange} onKeyPress={handleKeyPress} name='firstname' value={firstname} placeholder='이름'/>
                <button onClick={handleClickbtn2}>등록</button>
                <h2>{names.join(', ')}</h2>
            </div>
            
        );
    }
}

export default MyComponent;