import React, { Component } from 'react';
import Heading from './heading/Heading';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Heading title="About me" text="🎓 Graduating web development student from NTNU." />
        );
    }
}

export default About;