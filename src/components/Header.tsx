import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const isActive = ({ isActive, isPending }: { isActive: boolean, isPending: boolean }) => {
    return isPending ? "pending" : isActive ? "active" : ""
  }
  return (
    <header className="header">
    <nav className="nav">
      <NavLink
        to="/"
        // className={isActive}
      end>
        Main
      </NavLink>
      <NavLink
        to="/about"
        // className={isActive}
              >
        About Us
      </NavLink>
      <NavLink
        to="form"
        // className={isActive}
      >
        Create card
      </NavLink>
    </nav>
  </header>
  )
}

export default Header;
