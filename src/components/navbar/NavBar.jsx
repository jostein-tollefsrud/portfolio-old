import React, { Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// Import css
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="navbar-bg">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar-logo">
                            <Link to="/">Jostein Tollefsrud</Link>
                        </div>
                        <nav>
                            <ul>
                                {/* <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/mywork">My work</Link></li> */}
                                <li><MenuLink activeOnlyWhenExact={true} to="/" label="Home"></MenuLink></li>
                                <li><MenuLink to="/about" label="About" /></li>
                                <li><MenuLink to="/mywork" label="My work" /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </div>
    );
}

export default NavBar;