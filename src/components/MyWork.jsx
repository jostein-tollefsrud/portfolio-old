import React, { Component } from 'react';
import Heading from './heading/Heading';

class MyWork extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Heading title="My work" text="I have collected some of my best work here 📁 Go check it out." />
        );
    }
}

export default MyWork;