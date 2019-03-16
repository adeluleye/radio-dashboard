import React, { Component } from 'react';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <NavBar/>
            </div>
            <div class="container-fluid">
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <Footer />
          </div>
        </div>
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fa fa-angle-up"></i>
        </a>
      </React.Fragment>
    );
  }
}

export default App;
