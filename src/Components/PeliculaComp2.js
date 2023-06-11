import React, {useState, useEffect} from "react";
import "../Constants/Styles.css";
import ModalQuess from "../Components/ModalQuess";
import { Link, NavLink } from "react-router-dom";
import { getDocument, getUser, PeliculasVistasUpdate, SeriesVistasUpdate} from "../Services/FirebaseGettters";


const PeliculaComp2 = ({ Pelicula = [], inclu, Tipo, }) => {
  const [include, setinclude] = useState(inclu)
  const clicHeard = (id) => {
    Tipo==1 ? PeliculasVistasUpdate(id): SeriesVistasUpdate(id)
    setinclude(!include)
  };
  

  return (
    <div className={!include ? "card Padin opacity": "card Padin"}>
      <NavLink className=" Poster " to={ Tipo == 1 ?`/Pelicula/${Pelicula.id}`:`/Serie/${Pelicula.id}`}>
        <img
          src={"http://image.tmdb.org/t/p/w500" + Pelicula.poster_path}
          className=" Poster "
          alt="..."
        />
      </NavLink>
      <div className="TituloCard">
        <h5 className="cardTitle card-title ">{Tipo==1 ?Pelicula.original_title : Pelicula.original_name} </h5>
        <h6 className="card-subtitle mb-2">{Pelicula.vote_average}</h6>
      </div>
      <div className="d-flex justify-content-center Quess">
        <i className={include ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={() => clicHeard(Pelicula.id)}></i>
      </div>
    </div>
  );
};

export default PeliculaComp2;
