import React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import "./header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <img src="./CW_logo.png" alt="logo"></img>

        <div>
        <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/">Home</NavLink>

        <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/play">Play</NavLink>
        </div>
      </header>

    </div>
  );
}

export default Header;