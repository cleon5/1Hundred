import React, { Component } from "react";
import "../Constants/Styles.css";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Peli from "../Constants/Peliculas.json";
import { getDocument, getUser, getPeliculasVistas } from "../Services/FirebaseGettters";
import PeliculaComp2 from "./PeliculaComp2";
import Footer from "../Components/Footer";
import { ContexAuth, context } from "../Services/ContexAuth";

import { auth } from "../Services/Firebase";
import { onAuthStateChanged } from "firebase/auth";


export class Lista extends Component {
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
    
  }
  componentDidUpdate(prevProps, prevState) {
    const contex = this.context;
    if (contex.Movies !== this.state.Movies) {
      this.setState({ Movies: this.context.Movies });
    }
    if(this.props.tipo !== prevProps.tipo){
      this.listar()
    }
  }

  async listar() {
    let listaTipo = this.props.tipo;
    console.log(listaTipo)
    this.setState({ loading: true });
    let listas = ["listaPeli", "listaSeries", "listaCaricaturas", "listaAnimes"]
    const pelis = await getDocument("Listas", listas[listaTipo-1]);

    this.setState({ loading: false });
    console.log(this.state.loading);

    let Arrpelis = [];
    for (var i in pelis) {
      Arrpelis.push(pelis[i]);
      console.log(pelis[i])
    }
    this.setState({ FirePelis: Arrpelis });
  }


 

  render() {
    return (
 
        <main className="d-flex flex-wrap justify-content-center">
          {this.state.FirePelis.length > 0 &&
            this.state.FirePelis.map((pel) => (
              <PeliculaComp2
                key={pel.id}
                Pelicula={pel}
                Tipo={this.props.tipo}
                inclu={
                  this.context.Movies && this.context.Movies.includes(pel.id)
                }
              />
            ))}
        </main>
    );
  }
}

export default Lista