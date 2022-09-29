import React from "react";
import "../Constants/Styles.css";
import ModalQuess from "../Components/ModalQuess";

const PeliculaComp = ({ Pelicula = [] }) => {
  const rep = () => {
    //console.log(Pelicula.Preguntas)
    if(Pelicula.Partes > 1 ){
      return Pelicula.Preguntas.map((x, key) => (
        <ModalQuess Preguntas={x} key={key.id} />
      ))
    }  
    else if(Pelicula.Partes === 1 && Pelicula.Preguntas != undefined){
      console.log("Pelicula")
      console.log(Pelicula.Preguntas)
      return <ModalQuess Preguntas={Pelicula.Preguntas}   />
    }
  }

  return (
    <div key={Pelicula.id} className="card Padin">
      <h5 className="card-title">{Pelicula.Nombre}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{Pelicula.Director}</h6>
      <img src={Pelicula.Poster} className="card-img-top Poster" alt="..." />
      <div className="d-flex justify-content-center Quess">
          {rep()}
      </div>
    </div>
  );
};

export default PeliculaComp;
