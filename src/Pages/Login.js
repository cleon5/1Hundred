import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Constants/Login.css";
import Navbar from "../Components/Navbar";
import { LoginGoogle, Registro, LoginEmail } from "../Services/FirebaseAuth";
import { ContexAuth, context } from "../Services/ContexAuth";

export class Login extends Component {
  static contextType = context;

  constructor(props) {
    super(props);
    this.cambioText = this.cambioText.bind(this);
    this.state = {
      login: true,
      error: false,
      datos: {
        correo: "",
        password: "",
        confirm: "",
      },
    };
  }
  componentDidMount() {}
  changeStateLogin() {
    this.setState({ login: !this.state.login });
  }
  cambioText(event) {
    const { name, value } = event.target;
    const newValues = {
      ...this.state.datos,
      [name]: value,
    };
    this.setState({ datos: newValues });
  }
  async GoogleLogin() {
    await LoginGoogle();
  }
  async LoginCorreo() {
    await LoginEmail(this.state.datos.correo, this.state.datos.password);
  }
  async Registrarse() {
    if (this.state.datos.confirm === this.state.datos.password) {
      await Registro(this.state.datos.correo, this.state.datos.password);
    } else {
      this.setState({ datos: { password: "", confirm: "" } });
      console.log("error");
    }
  }
  render() {
    return (
      <div>
        <Navbar brand="1-Hundred" className="nab" />

        <div className="bodyLogin">
          <div className="loginCard ">
            <div className="rightCard">
              <h1>Hola cinefilo</h1>
              <h3>Lo que tienes que ver antes de morir</h3>
            </div>
            <div className="line"></div>
            <div className="leftCard">
              {this.context.login ? (
                <div>Usuario logeado</div>
              ) : this.state.login ? (
                <div>
                  <h1>Login</h1>
                  <div className="Datos">
                    <label>
                      Correo
                      <input
                        name="correo"
                        type="text"
                        value={this.state.datos.correo}
                        onChange={this.cambioText}
                        placeholder=""
                      ></input>
                    </label>
                    <label>
                      Password
                      <input
                        name="password"
                        type="text"
                        value={this.state.datos.password}
                        onChange={this.cambioText}
                        placeholder=""
                      ></input>
                    </label>
                  </div>
                  <div className="btns">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.LoginCorreos()}
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
                      <input
                        name="correo"
                        type="text"
                        value={this.state.datos.correo}
                        onChange={this.cambioText}
                        placeholder=""
                      ></input>
                    </label>
                    <label>
                      Password
                      <input
                        name="password"
                        type="text"
                        value={this.state.datos.password}
                        onChange={this.cambioText}
                        placeholder=""
                      ></input>
                    </label>
                    <label>
                      Confirm Password
                      <input
                        name="confirm"
                        type="text"
                        value={this.state.datos.confirm}
                        onChange={this.cambioText}
                        placeholder=""
                      ></input>
                    </label>
                  </div>
                  <div className="btns">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.Registrarse()}
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
