import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import Radios from './components/radios';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar/>
            </div>
            <div className="container-fluid">
              <Switch>
                <Route path='/radios' component={Radios} />
                <Route path='/not-found' component={NotFound} />
                <Redirect exact from="/" to="/radios" />
                <Redirect exact to="/not-found" />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
        <ScrollToTop />
      </React.Fragment>
    );
  }
}

export default App;
