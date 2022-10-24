import React, { Component } from "react";
import "../Constants/Login.css";
import axios from "axios";
import Navbar from "../Components/Navbar";

export class Login extends Component {
  render() {
    return (
      <div className="bodyLogin">
        <Navbar brand="Login" className="nab" />

        <div className="loginCard ">
          <div className="rightCard">
            <h1>Hola cinefilo</h1>
            <h3>Crea tu cuenta para tener tu lista actualizada</h3>
            <button className="btn btn-primary">Singup</button>
          </div>
          <div className="line"></div>
          <div className="leftCard">
          <h1>Login</h1>
            <input type="text" placeholder="Usuario"></input>
            <input type="text" placeholder="Password"></input>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
