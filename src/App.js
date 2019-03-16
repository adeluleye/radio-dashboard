import React, { Component } from 'react';
import NavBar from '../src/components/navBar';
import SideBar from '../src/components/sideBar';
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
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright &copy; RadioPack 2019. </span>
                  All Rights Reserved.
                </div>
              </div>
            </footer>
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
