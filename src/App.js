import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as API from './api/APIUtils';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';
import Blog from './pages/blog/blog';
import Login from './pages/login/login';
import NotFound from './pages/notFound/notFound';
import Post from './pages/post/post';
import Dashboard from './pages/dashboard/dashboard';
import Editor from './pages/editor/editor';
import Upload from './pages/upload/upload';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/projects" component={ Projects } />
              <Route exact path="/blog" component={ Blog } />
              <Route exact path="/blog/:id" component={ Post } />
              <Route exact path="/login" component={ Login } />

              <Route exact path="/dashboard" render={() => (
                API.isAuth() ? <Dashboard /> : <Redirect to="/login" />
              )} />

              <Route exact path="/dashboard/editor" render={() => (
                API.isAuth() ? <Editor /> : <Redirect to="/login" />
              )} />

              <Route exact path="/dashboard/editor/:id" render={(props) => (
                API.isAuth() ? <Editor {...props} /> : <Redirect to="/login" />
              )} />

              <Route exact path="/dashboard/upload" render={() => (
                API.isAuth() ? <Upload /> : <Redirect to="/login" />
              )} />

              <Route component={ NotFound } />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
