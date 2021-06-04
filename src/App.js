import React, { Component } from 'react';
import './App.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import Avtal from './pages/avtal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            market_name: '',
            icon_url: '',
            data: [],
        }
    }
    componentDidMount() {
        fetch('http://161.35.208.132/bot/inventory')
            .then(res => res.json())
            .then(json => {
                const { id, market_name, icon_url, data} = json;
                this.setState({ id, market_name, icon_url, data});
            }).catch((err) => {
                console.log(err);
            });
    } 

    render() {
        const { id, market_name, icon_url, data } = this.state;
        return (
        <Router>
            <div className="App">
                
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.market_name}
                            <img src="https://community.cloudflare.steamstatic.com/economy/image/+{item.icon_url}" />
                        </li>
                    ))}
                </ul>

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