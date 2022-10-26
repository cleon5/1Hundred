import React, { useEffect, useState } from "react";
import Peliculas from "../Constants/Peliculas.json";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/InfoPeliculas.css";
import DisponibleComp from "../Components/Info/DisponibleComp";

const InfoPelicula = () => {
  let { id } = useParams();
  const [Peli, setPeli] = useState(Peliculas.Peliculas[id-1]);
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

          
            <div>
              <p>Calificacion {Peli.Calificacion}</p>
              <p>Genero {Peli.Genero.map(item => <p>{item}</p>
                )}</p>
              <p>Fecha de estreno {Peli.Estreno}</p>
              <p>Director {Peli.Director}</p>
              <p>Secuelas {Peli.Secuelas}</p>

            </div>
            <hr></hr>
            <DisponibleComp Disponible={Peli.Disponible}/>
        </div>
      </div>
    </div>
  );
};

export default InfoPelicula;
