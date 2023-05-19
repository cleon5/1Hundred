import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/infoMovie.css";
import DisponibleComp from "../Components/Info/DisponibleComp";
import { getDocument, getMovie } from "../Services/FirebaseGettters";
import Actor from "../Components/Info/Actor";
import YoutubeEmbed from "../Components/Info/YoutubeEmbed";
import Footer from "../Components/Footer";
import Recomendaciones from "../Components/Info/Recomendaciones";

function InfoSerie() {
  let { id } = useParams();
  const [Serie, setSerie] = useState([]);
  const [Providers, setProviders] = useState([]);
  const [Videos, setVideos] = useState([]);
  const [Director, setDirector] = useState([]);
  const [Cast, setCast] = useState([]);

  const getSerie = async () => {
    console.log(id);
    let Serie = await getDocument("Series", id);
    console.log(Serie);
    setSerie(Serie);

    let creditos = await getDocument("CreditosSeries", id);

    for (let i in creditos.crew) {
      creditos.crew[i].job == "Director" && setDirector(creditos.crew[i]);
    }
    let arrCast = [];
    let lengthCast = creditos.cast.length > 10 ? 10 : creditos.cast.length;

    for (let i = 0; i < lengthCast; i++) {
      arrCast.push(creditos.cast[i]);
    }
    setCast(arrCast);

    let providers = await getDocument("ProvidersSeries", id);
    setProviders(providers);

    let videos = await getDocument("VideosSeries", id);
    setVideos(videos);
  };
  const ads = () => {
    const x = document.getElementById("ads2");
    x.innerHTML =
      "<script type='text/javascript'>" +
      "atOptions = {" +
      "'key' : '8f6286b85a45a7f0b714bbe826213e91'," +
      " 'format' : 'iframe'," +
      "'height' : 50," +
      " 'width' : 320," +
      "'params' : {}" +
      "};" +
      " document.write('<scr' + 'ipt type='text/javascript' src=" +
      "http" +
      "(location.protocol === 'https:' ? 's' : '') " +
      "://www.profitabledisplaynetwork.com/8f6286b85a45a7f0b714bbe826213e91/invoke.js" +
      "></scr' + 'ipt>');" +
      "</script>";

    console.log(x);
  };

  useEffect(() => {
    getSerie();
    ads();
  }, []);
  return (
    <div>
      <Navbar brand="1-Hundred Peliculas" />
      <div className="peliData">
        <div className="Portada">
          <img
            className="backgroundImg  "
            src={
              Serie.backdrop_path &&
              "http://image.tmdb.org/t/p/w1280" + Serie.backdrop_path
            }
          ></img>
          <div className="PortadaImg">
            <img
              className="imgPoster"
              src={
                Serie.poster_path &&
                "http://image.tmdb.org/t/p/w500" + Serie.poster_path
              }
            ></img>
          </div>
          <div className="PortadaInfo">
            <div className="PortadaTitle">
              <h1 className="titleMovie">{Serie.title}</h1>
            </div>
            <div className="PortadaDatos"></div>

            <div className="informacionPortada">
              <p className="txtPelicula">{Serie.tagline}</p>
              <p>
                Director: {Director.name} <br />
                Fecha de estreno: {Serie.release_date}
                <br />
                Generos:
                {Serie.genres &&
                  Serie.genres.map((item) => " - " + item.name)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="infoPelicula">
        <div className="informacion">
          <div className="Media">
            <div id="ads2"></div>

            <h3>Informacion</h3>
            <hr />
            <div className="VistaGenera">
              <h3 className=" mt-3 text-decoration-underline">
                {Serie.title}
              </h3>

              <p className="descripcion">{Serie.overview}</p>

              <h3 className="text-decoration-underline mt-4">Datos</h3>
              <p className="descripcion">
                <span className="titleGeneral">Director:</span> {Director.name}{" "}
                <br />
                <span className="titleGeneral">Fecha de estreno:</span>{" "}
                {Serie.release_date}
                <br />
                <span className="titleGeneral">Duracion:</span>
                {Serie.runtime}
                <br />
                <span className="titleGeneral">Calificacion :</span>
                {Serie.vote_average}
                <br />
                <span className="titleGeneral">Generos:</span>
                <br />
                <div className="text-center m-2">
                  {Serie.genres &&
                    Serie.genres.map((item) => (
                      <span key={item.id} class="badge m-1 text-bg-primary">
                        {item.name}
                      </span>
                    ))}
                </div>
              </p>
            </div>
          </div>

          <div className="Media">
            <h3>Media</h3>
            <hr />
            <div className="Slider d-flex flex-wrap justify-content-center">
              <div className="scrollmenu">
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

        <div className="sidebarCast">
          <div className="Cast">
            <h3>Cast</h3>
            <hr />
            <div className="CastSlider d-flex flex-wrap justify-content-center">
              {Cast && Cast.map((cast) => <Actor key={cast.id} Cast={cast} />)}
            </div>
          </div>

          <div id="ads">
            <div id="container-9e03161175592753552dc46a7c6a447a"></div>
          </div>
        </div>
      </div>
      <div className="PelisSimilares">
        <div className="Media">
          <h3>Recomendaciones</h3>
          <hr />
          <Recomendaciones />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InfoSerie;
