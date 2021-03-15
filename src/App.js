import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import components
import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyWork from './components/MyWork';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/mywork'>
                            <MyWork />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
