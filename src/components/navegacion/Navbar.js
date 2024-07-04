import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          <img src='/titulo-pokemon' width='50' alt="Inicio"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/' isActive={(match, location) => location.pathname === '/'}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/pokemon' isActive={(match, location) => location.pathname.includes('/pokemon')}>
                Pokemon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/items' isActive={(match, location) => location.pathname.includes('/items')}>
                Items
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
