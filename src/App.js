import React, { Component } from 'react';
import './App.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import Test from './pages/test';
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

        fetch('http://csgo.rent/csgorentApi/API/User/readUser.php')
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
                    <Route path="/test" exact component={Test} />
                    <Route path="/market" component={Market} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </Router>
        );

    }

}

export default App;