import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        number :0
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    render() {
        const { handleClick} = this;
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick= {handleClick}>Click me!
                </button>
            </div>
        );
    }
}

export default MyComponent;