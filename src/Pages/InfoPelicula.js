import React, { useEffect, useState } from "react";
import Peliculas from "../Constants/Peliculas.json";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/InfoPeliculas.css";

const InfoPelicula = () => {
  let { id } = useParams();
  //console.log(Pelicula.Peliculas[id]);
  const [Peli, setPeli] = useState(Peliculas.Peliculas[id]);
  /*
  const GetLista = async () => {
    try {
      await axios.get("http://localhost:4000/Movie/" + id).then((data) => {
        setPelicula(data.data);
        setDisponible(data.data.Disponible)
      });
    } catch (error) {
      console.log(error);
    }
  };

 <a href={Element}>
                <div className="DisponibleElement">
                  <img src={Pelicula.Imagen} className="imgElement"></img>
                  <p>{Object.keys(Element)}</p>
                </div>
              </a> */
  useEffect(() => {
    //GetLista();
  }, []);

  return (
    <div>
      <Navbar brand="1-Hundred Peliculas" />
      <div className="peliculaData">
        <img className="imagen" src={Peli.Imagen} alt=""></img>
        <div className="informacion">
          <h1 className="titulo">{Peli.Nombre}</h1>
          <hr></hr>
          <p className="textoPelicula">
            {Peli.Descipcion}
            {Peli.Descipcion}
            {Peli.Descipcion}
          </p>

          
          <div className="Disponible">
            {Peli.Disponible.Netflix != null ? (
              <a href={Peli.Disponible.Netflix}>
                <div className="DisponibleElement" >
                  <img src={Peli.Imagen} className="imgElement" alt=""></img>
                  <p>Ver en Netflix</p>
                </div>
              </a>
            ) : null}
            {Peli.Disponible.Amazon != null ? (
              <a href={Peli.Disponible.Amazon}>
                <div className="DisponibleElement">
                  <img src={Peli.Imagen} className="imgElement" alt=""></img>
                  <p>Ver en Amazon</p>
                </div>
              </a>
            ) : null}
            {Peli.Disponible.Trailer != null ? (
              <a href={Peli.Disponible.Trailer}>
                <div className="DisponibleElement">
                  <img src={Peli.Imagen} className="imgElement" alt=""></img>
                  <p>Ver Trailer</p>
                </div>
              </a>
            ) : null}
          </div>


        </div>
      </div>
    </div>
  );
};

export default InfoPelicula;
