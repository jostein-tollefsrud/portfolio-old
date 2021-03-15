import React, { Component } from 'react';
import Heading from './heading/Heading';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="heading">
                <Heading title="React web developer" text="Hey 👋 I'm Jostein. I'm a react web developer focusing on clean and reusable code that is easy to maintain." />
            </div>
        );
    }
}

export default Home;