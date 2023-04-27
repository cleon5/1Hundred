import React, { useEffect, useState } from "react";
import Peliculas from "../Constants/Peliculas.json";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/InfoPeliculas.css";
import DisponibleComp from "../Components/Info/DisponibleComp";
import { getDocument, getMovie } from "../Services/FirebaseGettters";

const InfoPelicula = () => {
  let { id } = useParams();
  const [Pelicula, setPelicula] = useState([]);
  const [Creditos, setCreditos] = useState([]);
  const [Providers, setProviders] = useState([]);
  const [Videos, setVideos] = useState([]);
  const [Director, setDirector] = useState([]);
  const [Cast, setCast] = useState([]);

  const GetMovie = async () => {
    let pelicula = await getDocument("Peliculas", id);
    setPelicula(pelicula);
    console.log(Pelicula);

    let creditos = await getDocument("Creditos", id);

    console.log(Creditos);
    for (let i in creditos.crew) {
      creditos.crew[i].job == "Director" && setDirector(creditos.crew[i]);
    }
    let arrCast = [];
    for (let i = 0; i < 10; i++) {
      arrCast.push(creditos.cast[i]);
    }
    setCast(arrCast);
    console.log(Cast);

    let providers = await getDocument("Providers", id);
    setProviders(providers);
    console.log(Providers);

    let videos = await getDocument("Videos", id);
    setVideos(videos);
    console.log(Videos);
  };

  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <div>
      <Navbar brand="1-Hundred Peliculas" />
      <div className="peliculaData">
        <div className="DivImg">
          <img
            className="imagen"
            src={"http://image.tmdb.org/t/p/w500" + Pelicula.poster_path}
            alt=""
          ></img>
         
        </div>

        <div className="informacion">
          <h1 className="titulo">{Pelicula.title}</h1>
          <hr></hr>
          <p className="textoPelicula">{Pelicula.overview + " "}</p>

          <hr></hr>
          <div className="Info">
            <p>
              <p>Director : {Director.name}</p>
              Genero:
              <div className="Info">
                {Pelicula.genres &&
                  Pelicula.genres.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                <br></br>
              </div>
              Fecha de estreno: {Pelicula.release_date}
              <br></br>
              Calificacion: {Pelicula.vote_average} <br></br>
            </p>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default InfoPelicula;
