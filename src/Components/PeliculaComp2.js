import React from "react";
import "../Constants/Styles.css";
import ModalQuess from "../Components/ModalQuess";
import { Link, NavLink } from "react-router-dom";


const PeliculaComp2 = ({ Pelicula = [] }) => {
  console.log(Pelicula)
  const rep = () => {
    if(Pelicula.Secuelas > 1 ){
      return Pelicula.Preguntas.map((x, key) => (
        <ModalQuess Preguntas={x} key={key.id} />
      ))
    }  
    else if(Pelicula.Secuelas === 1 && Pelicula.Preguntas != undefined){

      return <ModalQuess Preguntas={Pelicula.Preguntas}  key={Pelicula.Preguntas.id}  />
    }
  }

  return (
    <div className="card Padin">
      <Link className=" Poster "  to={`/Pelicula/${Pelicula.id}`} >
        <img src={"http://image.tmdb.org/t/p/w500"+Pelicula.poster_path} className=" Poster " alt="..." />
      </Link>
      <div className="TituloCard">
        <h5 className="card-title">{Pelicula.original_title}</h5>
        <h6 className="card-subtitle mb-2 ">{Pelicula.vote_average}</h6>
      </div>
      <div className="d-flex justify-content-center Quess">
          
      </div>
    </div>
  );
};

export default PeliculaComp2;
