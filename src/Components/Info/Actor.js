import React from "react";

export default function Actor({Cast=[]}) {
  return (
    <div key={Cast.id} className="card Padin">
      <a className=" Poster " href={`https://www.themoviedb.org/person/${Cast.id}`}>
        <img src={"http://image.tmdb.org/t/p/w500" +Cast.profile_path} className=" Poster " alt="..." />
      </a>
      <div className="TituloCard">
        <h5 className="card-title">{Cast.name}</h5>
      </div>
      <div className="d-flex justify-content-center Quess"></div>
    </div>
  );
}
