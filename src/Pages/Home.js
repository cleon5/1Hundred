import React, { Component,  } from "react";
import "../Constants/Styles.css";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Peli from "../Constants/Peliculas.json";
import { getDocument } from "../Services/FirebaseGettters";
import PeliculaComp2 from "../Components/PeliculaComp2";
import Footer from "../Components/Footer";
import {ContexAuth, context} from "../Services/ContexAuth";



export default class Home extends Component {
  static contextType = context

  constructor(props) {
    super(props);
    this.state = {
      Pelicula: Peli.Peliculas,
      FirePelis: [],
      loading: true,
    };
  }

  
  componentDidMount() {
    this.listar();
    const x = this.context
    console.log(x)
    
  }
  async listar() {
    this.setState({ loading: true });
    const pelis = await getDocument("Listas", "listaPeli");

    this.setState({ loading: false });
    console.log(this.state.loading);
    
    let Arrpelis = []
    for (var i in pelis) {
      Arrpelis.push(pelis[i]);
    }
    this.setState({FirePelis:Arrpelis});
    console.log(this.state.FirePelis);
  }

  renderList() {
    return this.state.Pelicula.map((item2) => (
      <PeliculaComp key={item2.id} Pelicula={item2} />
    ));
  }
  renderList2() {
    return Object.keys(this.state.FirePelis).forEach((item2) => (
      <PeliculaComp2 key={item2.id} Pelicula={item2} />
    ));
  }

  render() {
    return (
      <div>

        <Navbar brand="1-Hundred Peliculas" />
        <Titulo />

        <div className="d-flex flex-wrap justify-content-center">
        {this.state.FirePelis.length > 0 ?
          this.state.FirePelis.map((pel) => <PeliculaComp2 key={pel.id} Pelicula={pel} />):console.log(this.state.FirePelis)}
      </div>

        
       <Footer/>

      </div>
    );
  }
}
