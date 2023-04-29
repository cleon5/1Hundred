import React, { Component, useState, useEffect } from "react";
import "../Constants/Styles.css";
import axios from "axios";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Modal from "../Components/Modal";
import Peli from "../Constants/Peliculas.json";
import { getDocument } from "../Services/FirebaseGettters";
import PeliculaComp2 from "../Components/PeliculaComp2";
import Footer from "../Components/Footer";

export default class Home extends Component {
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
  }
  async listar() {
    this.setState({ loading: true });
    const pelis = await getDocument("Listas", "listaPeli");

    this.setState({ loading: false });
    console.log(this.state.loading);
    
    let Arrpelis = []
    for (var i in pelis) {
      console.log(pelis[i]);
      Arrpelis.push(pelis[i]);
    }
    this.setState({FirePelis:Arrpelis});
    console.log(this.state.FirePelis);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.FirePelis !== this.state.FirePelis) {
      console.log("pokemons state has changed.");
      console.log(this.state.FirePelis[105]);
      Object.keys(this.state.FirePelis).forEach((e) => {
        console.log(this.state.FirePelis[e]);
      });
      for (let x in this.state.FirePelis) {
        console.log(x);
        console.log(this.state.FirePelis[x]);
      }
      //this.state.FirePelis.forEach(p => console.log(p))
    }
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

        <div className="d-flex flex-wrap justify-content-center">
          {Object.keys(this.state.FirePelis).forEach((e) => {
            <div>a</div>;
          })}
        </div>
        
       <Footer/>

      </div>
    );
  }
}
