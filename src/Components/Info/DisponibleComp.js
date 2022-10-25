import React from 'react'
import "../../Constants/InfoPeliculas.css";


const DisponibleComp = ({Disponible=[]}) => {

  return (
    <div className="Disponible ">
    {Disponible.Netflix != null ? (
      <a href={Disponible.Netflix}>
        <div className="DisponibleElement" >
          <img src="https://brandemia.org/sites/default/files/sites/default/files/icono_netflix_nuevo.jpg" className="imgElement" alt=""></img>
          <p>Ver en Netflix</p>
        </div>
      </a>
    ) : null}
    {Disponible.Amazon != null ? (
      <a href={Disponible.Amazon}>
        <div className="DisponibleElement">
          <img src="https://i.pinimg.com/736x/87/70/5a/87705a2ddfc57918abcc7bdb574aec94.jpg" className="imgElement" alt=""></img>
          <p>Ver en Amazon</p>
        </div>
      </a>
    ) : null}
    {Disponible.Trailer != null ? (
      <a href={Disponible.Trailer}>
        <div className="DisponibleElement">
          <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" className="imgElement" alt=""></img>
          <p>Ver Trailer</p>
        </div>
      </a>
    ) : null}
  </div>
  )
}

export default DisponibleComp