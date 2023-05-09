import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LogOut, getUsetAct } from "../Services/FirebaseAuth";
import { context, useAuth } from "../Services/ContexAuth";
import { useNavigate } from "react-router-dom";

const navbar = ({ brand }) => {
  const [loged, setloged] = useState();

  const cont = useContext(context);
  const atu = useAuth();
  const navigate = useNavigate();
  console.log(atu);

  //console.log(cont)
  const singOut = async () => {
    console.log("logout");
    LogOut();
    //setloged(false);
  };
  function init() {
    console.log(atu.login);
    setloged(atu.login);
  }
  useEffect(() => {
    init();
  }, []);

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

            {atu.login ? (
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>{atu.User && atu.User.displayName}</li>
                <li>
                <NavLink
              to="/login"
              onClick={() => singOut()}
              className="nav-link active"
            >
              SingOut
            </NavLink>
                </li>
              </ul>
           </li>
            ) : (
              <NavLink to="/login" className="nav-link active">
                login
              </NavLink>
            )}
             
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
