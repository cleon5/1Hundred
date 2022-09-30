import React, { Component } from 'react'
import Peliculas from "../Constants/Peliculas.json";
import {  useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const InfoPelicula = () => {
    let {id} = useParams()
    console.log(id)
    let pelicula = Peliculas.Peliculas[id-1]
  return (
    <div>
        <Navbar brand="1-Hundred Peliculas"/>
        <div>
            <img className="imagen" src={pelicula.Poster}></img>
        </div>
        InfoPelicula
    </div>
  )
}

export default InfoPelicula
