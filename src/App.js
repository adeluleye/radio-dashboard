import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import NotFound from './components/notFound';
import Radios from './components/radios';
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
              <div className="container-fluid">
                <Switch>
                  <Route 
                    path='/radios' 
                    render={props => <Radios {...props} />} />
                  <Route path='/not-found' component={NotFound} />
                  <Redirect exact from="/" to="/radios" />
                  <Redirect exact to="/not-found" />
                </Switch>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </div>
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
