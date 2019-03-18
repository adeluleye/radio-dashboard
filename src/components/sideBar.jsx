import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return ( 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fa fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">RadioPack <sup>2</sup></div>
          </Link>
    
          <hr className="sidebar-divider my-0"/>
    
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fa fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
    
          <hr className="sidebar-divider"/>
    
          <div className="sidebar-heading">
            Interface
          </div>
    
          <li className="nav-item">
            <Link className="nav-link" to="/cities">
              <i className="fa fa-fw fa-list"></i>
              <span>City</span>
            </Link>
          </li>
    
          <li className="nav-item">
            <Link className="nav-link" to="/radios">
              <i className="fas fa-fw fa-music"></i>
              <span>Radio</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              <i className="fa fa-fw fa-list"></i>
              <span>Category</span>
            </Link>
          </li>

          <hr className="sidebar-divider"/>
          
          <div className="sidebar-heading">
            Addons
          </div>
          
          <li className="nav-item">
            <Link className="nav-link" to="/themes">
              <i className="fa fa-fw fa-table"></i>
              <span>Theme</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              <i className="fa fa-fw fa-cog"></i>
              <span>Settings</span>
            </Link>
          </li>
    
          <hr className="sidebar-divider d-none d-md-block"/>
    
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
    
        </ul>
     );
}
 
export default SideBar;