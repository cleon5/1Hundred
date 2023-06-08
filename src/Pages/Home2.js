import React, { Component, useState, useEffect } from "react";
import "../Constants/Styles.css";
import axios from "axios";
import Navbar from "../Components/Navbar";
import PeliculaComp from "../Components/PeliculaComp";
import Titulo from "../Components/Titulo";
import Modal from "../Components/Modal";
import Peli from "../Constants/Peliculas.json";
import { getDocument } from "../Services/FirebaseGettters";
import PeliculaComp2 from "../Components/PeliculaComp2";

export default function Home2() {
  const [Peliculas, setPeliculas] = useState(Peli.Peliculas);
  const [Pel, setPel] = useState([]);
  const [load, setload] = useState(true);
  const listar = async () => {
    const pelis = await getDocument("Listas", "listaPeli");
    let Arrpelis = [];
    setload(false);
    for (var i in pelis) {
      Arrpelis.push(pelis[i]);
    }
    setPel(Arrpelis);
  };

  const renderList = () => {
    return Peliculas.map((item2) => (
      <PeliculaComp key={item2.id} Pelicula={item2} />
    ));
  };
  const renderList2 = () => {
    console.log(Pel);
    return Pel
      ? Pel.map((pel, i) =>
          pel ? <PeliculaComp2 key={pel.id} Pelicula={pel} /> : null
        )
      : null;
  };
  useEffect(() => {
    listar();
  }, []);
  return (
    <div>
      <Navbar brand="1-Hundred Peliculas" />
      <Titulo />
      <div className="d-flex flex-wrap justify-content-center">
        {renderList()}
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {Pel.length > 0 &&
          Pel.map((pel) => <PeliculaComp2 key={pel.id} Pelicula={pel} />)}
      </div>

      {load ? (
        <p>loadinf</p>
      ) : Pel[185] ? (
        Object.keys(Pel).forEach((e) => {
          <li key={e.id}>{e.id}</li>;
        })
      ) : null}
      {load && <p>loading...</p>}
    </div>
  );
}
