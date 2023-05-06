import React, { Component } from "react";
import "../Constants/Login.css";
import Navbar from "../Components/Navbar";
import { LoginGoogle } from "../Services/FirebaseAuth";

export class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }
  
  changeStateLogin() {
    this.setState({ login: !this.state.login });
  }
 async GoogleLogin() {
    await LoginGoogle();
    
   
  }
  render() {
    return (
      <div>
        <Navbar brand="1-Hundred" className="nab" />
        <div className="bodyLogin">
          <div className="loginCard ">
            <div className="rightCard">
              <h1>Hola cinefilo</h1>
              <h3>100 peliculas que todos deberian ver antes de morir</h3>
            </div>
            <div className="line"></div>
            <div className="leftCard">
              {this.state.login ? (
                <div>
                  <h1>Login</h1>
                  <div className="Datos">
                    <label>
                      Correo
                      <input type="text" placeholder=""></input>
                    </label>
                    <label>
                      Password
                      <input type="text" placeholder=""></input>
                    </label>
                  </div>
                  <div className="btns">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.changeStateLogin()}
                    >
                      Inicia Sesion
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.GoogleLogin()}
                    >
                      Inicia con Google
                    </button>
                  </div>

                  <p className="ChangeStateLogin">
                    Si no tienes cuenta registrate{" "}
                    <a onClick={() => this.changeStateLogin()}>aqui</a>
                  </p>
                </div>
              ) : (
                <div>
                  <h1>Registro</h1>
                  <div className="Datos">
                    <label>
                      Correo
                      <input type="text" placeholder=""></input>
                    </label>
                    <label>
                      Password
                      <input type="text" placeholder=""></input>
                    </label>
                    <label>
                      Confirm Password
                      <input type="text" placeholder=""></input>
                    </label>
                  </div>
                  <div className="btns">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.changeStateLogin()}
                    >
                      Registrarse
                    </button>
                  </div>
                  <p className="ChangeStateLogin">
                    Si ya tienes cuenta inicia sesion 
                    <a onClick={() => this.changeStateLogin()}> aqui</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
