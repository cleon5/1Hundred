import React from "react";
import "../Constants/Styles.css";

const PeliculaComp = ({ Pelicula = [] }) => {
  return (
    <div key={Pelicula.id} className="card Padin">
      <h5 className="card-title">{Pelicula.Nombre}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{Pelicula.Director}</h6>
      <img src={Pelicula.Poster} className="card-img-top Poster" alt="..." />
    </div>
  );
};

export default PeliculaComp;
