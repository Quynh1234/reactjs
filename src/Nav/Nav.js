import React from "react";
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Link className="active" to="/Home">Home</Link>
        <Link to="/MyComponent">MyComponent</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/About">About</Link>
        <Link to="/user">Users</Link>

      </div>
    );
  }
}

export default Nav;
