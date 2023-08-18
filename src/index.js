import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import About from './views/about';
import Work from './views/work';
import Contacts from './views/contacts';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />  {/* Directly integrated Navbar here */}
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Work} exact path="/work" />
        <Route component={Contacts} exact path="/contacts" />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

