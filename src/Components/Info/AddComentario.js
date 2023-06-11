import React,{useEffect, useState} from "react";
import {AgregarComentario} from "../../Services/FirebaseGettters"

function AddComentario({id, tipo}) {
  const [Comentario, setComentario] = useState("")
  
  const enviarComentario = async() => {
    tipo ==1 ? await AgregarComentario(Comentario, id, "Peliculas")
    : await AgregarComentario(Comentario, id, "Series")
    location.reload();
  }
  const cambioText = (comn)=>{
    setComentario(comn.target.value)
  }
  
  return (
    <div className="addComentario Comentario card">
      <div className="card-body d-flex">
        <div className="input-group ">
          <span className="input-group-text">Comentario</span>
          <textarea
            className="form-control"
            rows="4"
            aria-label="With textarea"
            onChange={cambioText}
          ></textarea>
        </div>

        <button className="btn btn-primary p-2" onClick={()=> enviarComentario()}>Enviar</button>
      </div>
    </div>
  );
}

export default AddComentario;