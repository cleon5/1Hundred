import React, { Component } from "react";
import "../Constants/Styles.css";
import axios from "axios";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Modal from "../Components/Modal";
import Peli from "../Constants/Peliculas.json"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pelicula: Peli.Peliculas,
      //url: "http://localhost:4000",
    };
  }
/*
  async GetLista(){
    try {
      await axios.get(this.state.url)
      .then(data => {
        this.setState({Pelicula:data.data.Peliculas});
        console.log(this.state.Pelicula)
      })

    } catch (error) {
      console.log(error)
    }
  }*/
  componentDidMount() {
    //console.log(this.state.Pelicula)
    //this.renderList();
    //this.GetLista();
  }
  renderList() {
    return this.state.Pelicula.map((item2) =>
      this.state.Pelicula.map((item) => (
        <PeliculaComp key={item.id} Pelicula={item} />
      ))
    );
  };

  render() {
    return (
      <div>
        <Navbar brand="1-Hundred Peliculas" />
        <Titulo/>
        <div className="d-flex flex-wrap justify-content-center">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
