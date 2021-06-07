import React, { Component } from 'react';
import './App.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import Avtal from './pages/avtal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends Component {

    render() {
        return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/market" component={Market} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/avtal" component={Avtal} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </Router>
        );

    }

}

export default App;