import React, { useEffect, useState } from "react";
import Peliculas from "../Constants/Peliculas.json";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Constants/InfoPeliculas.css";
import DisponibleComp from "../Components/Info/DisponibleComp";

const InfoPelicula = () => {
  let { id } = useParams();
  const [Peli, setPeli] = useState(Peliculas.Peliculas[id - 1]);
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
        <div className="DivImg">
          <img className="imagen" src={Peli.Imagen} alt=""></img>
          <DisponibleComp Disponible={Peli.Disponible} />
        </div>

        <div className="informacion">
          <h1 className="titulo">{Peli.Nombre}</h1>
          <hr></hr>
          <p className="textoPelicula">
            {Peli.Descipcion + " "}
            {Peli.Descipcion + " "}
            {Peli.Descipcion + " "}
          </p>

          <hr></hr>
          <div className="Info">
            <p>
              Secuelas: {Peli.Secuelas}
              <br></br>
              Director: {Peli.Director}
              <br></br>
              Genero:
              <div className="Info">
                {Peli.Genero.map((item) => (
                  <li>{item}</li>
                ))}
                <br></br>
              </div>
              Fecha de estreno: {Peli.Estreno}
              <br></br>
              Calificacion: {Peli.Calificacion} <br></br>
            </p>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default InfoPelicula;
