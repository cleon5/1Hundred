import React, { Component } from "react";
import "../Constants/Styles.css";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Peli from "../Constants/Peliculas.json";
import { getDocument, getUser } from "../Services/FirebaseGettters";
import PeliculaComp2 from "../Components/PeliculaComp2";
import Footer from "../Components/Footer";
import { ContexAuth, context } from "../Services/ContexAuth";

import { auth } from "../Services/Firebase";
import {onAuthStateChanged} from "firebase/auth";


export default class Home extends Component {
  static contextType = context;

  constructor(props) {
    super(props);
    this.state = {
      Pelicula: Peli.Peliculas,
      FirePelis: [],
      loading: true,
      Movies: [],
    };
  }

  componentDidMount() {
    this.listar();
    //this.listarVistas() 
    console.log(auth.currentUser)
   
  }
  componentDidUpdate(prevProps, prevState) {
    const contex = this.context;
    if (contex.Movies !== this.state.Movies) {
      console.log('pokemons state has changed.')
      this.setState({ Movies: this.context.Movies });
    }
  }
  async listar() {
    this.setState({ loading: true });
    const pelis = await getDocument("Listas", "listaPeli");

    this.setState({ loading: false });
    console.log(this.state.loading);

    let Arrpelis = [];
    for (var i in pelis) {
      Arrpelis.push(pelis[i]);
    }
    this.setState({ FirePelis: Arrpelis });
  }


  listarVistas = () =>{
    
    let tempPeliculas = [];
    const contex = this.context;
   console.log("xsad  ")
    contex.Movies && this.setState({ Movies: this.context.Movies });
    contex.Movies && console.log(this.state.Movies)
  }
 /* renderList() {
    return this.state.Pelicula.map((item2) => (
      <PeliculaComp key={item2.id} Pelicula={item2} />
    ));
  }
  renderList2() {
    return Object.keys(this.state.FirePelis).forEach((item2) => (
      <PeliculaComp2 key={item2.id} Pelicula={item2} />
    ));
  }*/

  render() {
    return (
      <div>
        <Navbar brand="1-Hundred Peliculas" />
        <Titulo />

        <div className="d-flex flex-wrap justify-content-center">
          {this.state.FirePelis.length > 0
            && this.state.FirePelis.map((pel) => (
                <PeliculaComp2
                  key={pel.id}
                  Pelicula={pel}
                  inclu={
                    this.context.Movies &&  this.context.Movies.includes(pel.id)
                  }
                />
              ))
           }
        </div>

        <Footer />
      </div>
    );
  }
}
