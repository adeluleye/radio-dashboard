import React from 'react';

const SideBar = () => {
    return ( 
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fa fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">RadioPack <sup>2</sup></div>
          </a>
    
          <hr class="sidebar-divider my-0"/>
    
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              <i class="fa fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></a>
          </li>
    
          <hr class="sidebar-divider"/>
    
          <div class="sidebar-heading">
            Interface
          </div>
    
          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fa fa-fw fa-list"></i>
              <span>City</span></a>
          </li>
    
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-music"></i>
              <span>Radio</span></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fa fa-fw fa-list"></i>
              <span>Category</span></a>
          </li>

          <hr class="sidebar-divider"/>
          
          <div class="sidebar-heading">
            Addons
          </div>
          
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fa fa-fw fa-table"></i>
              <span>Theme</span></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fa fa-fw fa-cog"></i>
              <span>Settings</span></a>
          </li>
    
          <hr class="sidebar-divider d-none d-md-block"/>
    
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
    
        </ul>
     );
}
 
export default SideBar;