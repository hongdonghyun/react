import React, { Component } from 'react';
import PropTypes from 'prop-types'
class MyComponent extends Component {
    static defaultProps = {
        job: 'developer',
        name: 'defaultname'
    }
    static propTypes = {
        name : PropTypes.string,
        job : PropTypes.string,
        favoriateNumber : PropTypes.number.isRequied
    }
    render() {
        const { name,job,favoriteNumber} = this.props;
        return (
            <div>
                <p>hello My name is {name}</p>
                <p>Job is {job}</p>
                <p>like number {favoriteNumber}</p>
            </div>
        );
    }
}

export default MyComponent;