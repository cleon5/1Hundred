import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/infoMovie.css";
import DisponibleComp from "../Components/Info/DisponibleComp";
import { getDocument, getMovie } from "../Services/FirebaseGettters";
import Actor from "../Components/Info/Actor";
import YoutubeEmbed from "../Components/Info/YoutubeEmbed";
import Footer from "../Components/Footer";
import Recomendaciones from "../Components/Info/Recomendaciones"

export default function InfoMovie() {
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
      <div className="peliData">
        <div className="Portada">
          <img
            className="backgroundImg  "
            src={
              Pelicula.backdrop_path &&
              "http://image.tmdb.org/t/p/w1280" + Pelicula.backdrop_path
            }
          ></img>
          <div className="PortadaImg">
            <img
              className="imgPoster"
              src={
                Pelicula.poster_path &&
                "http://image.tmdb.org/t/p/w500" + Pelicula.poster_path
              }
            ></img>
          </div>
          <div className="PortadaInfo">
            <div className="PortadaTitle">
              <h1 className="titleMovie">{Pelicula.title}</h1>
            </div>
            <div className="PortadaDatos"></div>

            <div className="informacionPortada">
              <p className="txtPelicula">{Pelicula.overview}</p>
              <p>Director: {Director.name} <br/>
              Fecha de estreno: {Pelicula.release_date}<br/>
              Generos:
                {Pelicula.genres &&
                  Pelicula.genres.map((item) => ( 
                    " - "+item.name
                  ))}

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="infoPelicula">
        <div className="informacion">
          <div className="Cast">
            <h3>Cast</h3>            
            <hr/>
            <div className="CastSlider d-flex flex-wrap justify-content-center">
              {Cast && Cast.map((cast) => <Actor key={cast.id} Cast={cast} />)}
            </div>
          </div>
          <div className="Media">
            <h3>Media</h3> 
             <hr/>
            <div class="Slider d-flex flex-wrap justify-content-center">
              <div class="scrollmenu">
                <div>
                  {Videos.results &&
                    Videos.results.map((video) => (
                      <YoutubeEmbed key={video.id} embedId={video.key} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Media">
            <h3>Recomendaciones</h3>
            <hr/>
           <Recomendaciones />
          </div>
        <div className="PelisSimilares"></div>
        <Footer/>
      </div>
    </div>
  );
}
