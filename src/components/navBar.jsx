import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <button 
            id="sidebarToggleTop" 
            className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt=''/>
              </Link>
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <Link className="dropdown-item" to="/admin/profile">
                  <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Link>
                <Link className="dropdown-item" to="/settings">
                  <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/logout" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Link>
              </div>
            </li>

          </ul>

        </nav>
        
 
    );
};
 
export default NavBar;