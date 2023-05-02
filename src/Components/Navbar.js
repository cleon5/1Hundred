import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {LogOut} from "../Services/FirebaseAuth"

const navbar = ({ brand }) => {
  const [loged, setloged] = useState(true);
  const singOut = () =>{
    LogOut();
   // setloged(!loged)
  }
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
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>

            {loged ? (
              <NavLink to="/login" className="nav-link active">
                login
              </NavLink>
            ) : (
              <NavLink to="/login" onClick={()=>singOut()} className="nav-link active">
                SingOut
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
