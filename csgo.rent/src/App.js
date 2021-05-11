import React from 'react';
import './App.css';
import Footer from './components/Header-Footer/footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Settings from './pages/Settings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Market} />
          <Route path="/settings" component={Settings} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
