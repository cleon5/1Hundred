import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Peliculas from "../Constants/Peliculas.json";
import Titulo from "../Components/Titulo";
import "../Constants/Styles.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pelicula: Peliculas.Peliculas,
    };
  }
  componentDidMount() {
    this.renderList();
  }
  renderList = () => {
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
        <Titulo></Titulo>
        <div className="d-flex flex-wrap justify-content-center">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
