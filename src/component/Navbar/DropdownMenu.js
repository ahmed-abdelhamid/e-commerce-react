import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../action/auth/auth';

export const DropdownMenu = (props) => (
  <div className="navbar-nav nav-item dropdown">
    <span className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {props.fullname}
    </span>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <Link to="/edit" className="dropdown-item">Edit Profile</Link>
      <Link to="/setting" className="dropdown-item">Setting</Link>
      <button
        className="dropdown-item"
        onClick={() => props.logout()}
      >
        Logout
      </button>
    </div>
  </div>
)

const mapStateToProps = ({ auth }) => ({
  fullname: `${auth.firstName} ${auth.lastName}`
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);