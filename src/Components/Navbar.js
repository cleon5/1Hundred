import React from "react";
import { NavLink } from "react-router-dom";

const navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand " href="/">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link active" >
              Home
            </NavLink>
            <NavLink to="/Location" className="nav-link active">
              location
            </NavLink>
            <NavLink to="/login" className="nav-link active">
              login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;