import React from 'react';
import NavLink from 'react-bootstrap/NavLink';
import "./Header.css";

function Header() {
  return (
    <div className="Header">
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