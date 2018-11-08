import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav mr-auto">
          <NavLink to="/dashboard" className="nav-item nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/categories" className="nav-item nav-link" activeClassName="active">Categories</NavLink>
          <NavLink to="items" className="nav-item nav-link" activeClassName="active">Items</NavLink>
          <NavLink to="/members" className="nav-item nav-link" activeClassName="active">Members</NavLink>
          <NavLink to="/statistics" className="nav-item nav-link" activeClassName="active">Statistics</NavLink>
          <NavLink to="/logs" className="nav-item nav-link" activeClassName="active">Logs</NavLink>
        </div>
      </div>
      <DropdownMenu />
    </div>
  </nav>
);

export default Navbar;