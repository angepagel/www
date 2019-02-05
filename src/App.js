import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/projects" component={ Projects } />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
