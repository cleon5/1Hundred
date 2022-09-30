import React from "react";
import "../Constants/Styles.css";
import ModalQuess from "../Components/ModalQuess";
import { Link, NavLink } from "react-router-dom";

const PeliculaComp = ({ Pelicula = [] }) => {
  const rep = () => {
    if(Pelicula.Partes > 1 ){
      return Pelicula.Preguntas.map((x, key) => (
        <ModalQuess Preguntas={x} key={key.id} />
      ))
    }  
    else if(Pelicula.Partes === 1 && Pelicula.Preguntas != undefined){

      return <ModalQuess Preguntas={Pelicula.Preguntas}  key={Pelicula.Preguntas.id}  />
    }
  }

  return (
    <div key={Pelicula.id} className="card Padin">
     

      <Link className=" Poster "  to={`/Pelicula/${Pelicula.id}`} >
        <img src={Pelicula.Poster} className=" Poster " alt="..." />
      </Link>
      <div className="TituloCard">
        <h5 className="card-title">{Pelicula.Nombre}</h5>
        <h6 className="card-subtitle mb-2 ">{Pelicula.Director}</h6>
      </div>
      <div className="d-flex justify-content-center Quess">
          {rep()}
      </div>
    </div>
  );
};

export default PeliculaComp;
