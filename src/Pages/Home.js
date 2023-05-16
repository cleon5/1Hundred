import React, { Component } from "react";
import "../Constants/Styles.css";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Peli from "../Constants/Peliculas.json";
import { getDocument, getUser, getPeliculasVistas } from "../Services/FirebaseGettters";
import PeliculaComp2 from "../Components/PeliculaComp2";
import Footer from "../Components/Footer";
import { ContexAuth, context } from "../Services/ContexAuth";

import { auth } from "../Services/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Lista from "../Components/Lista";

export default class Home extends Component {
  static contextType = context;

  constructor(props) {
    super(props);
    this.state = {
      lista:1,
    };
  }

  componentDidMount() {
    
  }
  componentDidUpdate(prevProps, prevState) {

  }
  tipo=(dato)=>{
    console.log(dato)
    this.setState({ lista:dato })
    console.log(this.state.lista)

  }


  render() {
    return (
      <div>
        <Navbar brand="1-Hundred Peliculas" tipo={this.tipo}/>
        <Titulo />

       
        <Lista tipo={this.state.lista}></Lista>

        <Footer />
      </div>
    );
  }
}
