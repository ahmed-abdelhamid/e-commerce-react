import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
      <div className="navbar-nav nav-item dropdown">
        <span className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          $Username
        </span>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/edit" className="dropdown-item">Edit Profile</Link>
          <Link to="/setting" className="dropdown-item">Setting</Link>
          <Link to="/" className="dropdown-item">Logout</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;