import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Page from './components/Page';
import {Home} from './Home';
import {About} from './About';
import {News} from './News';
import {Events} from './Events';
import {Contact} from './Contact';
import {Posts} from './Posts';
import {NavBarCustom} from './components/NavBar';
import './App.css';

import {Quadratic} from './posts/Quadratic';

function App() {

  const HeaderWithRouter = withRouter(NavBarCustom);
  
  return (
    <React.Fragment>
      <Router>
        <HeaderWithRouter/>
        <Route exact path="/" render = {props => (
          <Page {...props} component = {Home} title = "" />
        )}/>
        <Route exact path="/about" render = {props => (
          <Page {...props} component = {About} title = "About" />
        )}/>
        <Route exact path="/news" render = {props => (
          <Page {...props} component = {News} title = "News" />
        )}/>
        <Route exact path="/events" render = {props => (
          <Page {...props} component = {Events} title = "Events" />
        )}/>
        <Route exact path="/posts" render = {props => (
          <Page {...props} component = {Posts} title = "Posts" />
        )}/>
        <Route exact path="/contact" render = {props => (
          <Page {...props} component = {Contact} title = "Contact" />
        )}/>
        <Route exact path="/quadratic" render = {props => (
          <Page {...props} component = {Quadratic} title = "A Simple Proof of the Quadratic Formula" />
        )}/>
        {/* <Route component={NoMatch}/> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
