import React, { Component } from 'react';
import './Heading.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { title, text } = this.props;
        return (
            <div className="heading">
                <div className="container">
                    <div className="heading-container">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;