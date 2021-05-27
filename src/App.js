import React, { Component } from 'react';
import './App.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import Avtal from './pages/avtal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends Component {

    /* constructor(props) {

        super(props);

        this.state = {
            userID: 0,
            username: '',
            data: [],
        }

    }

    componentDidMount() {

        fetch('https://csgo-rent-api-lrib5.ondigitalocean.app/API/User/readUser.php')
            .then(res => res.json())
            .then(json => {
                const { userID, username, data} = json;
                this.setState({ userID, username, data});
            }).catch((err) => {
                console.log(err);
            });

    } */

    render() {

        // const { userID, username, data } = this.state;

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