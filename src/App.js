import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import './components/Header-Footer/css/popup.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import Avtal from './pages/avtal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Popup from './Popup';

class App extends Component {

    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render() {
        return (
        <Router>
            <div className="App">
          <button onClick={this.togglePopup.bind(this)}>show popup</button>
          {this.state.showPopup ? <Popup text='Close Me' closePopup = {this.togglePopup.bind(this)} /> : null}
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



