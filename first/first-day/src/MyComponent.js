import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        const { name,job} = this.props;
        return (
            <div>
                hello My name is {name}
                Job is {job}
            </div>
        );
    }
}

export default MyComponent;