import React,{useEffect, useState} from "react";
import {AgregarComentario} from "../../Services/FirebaseGettters"

function AddComentario({id, tipo}) {
  const [Comentario, setComentario] = useState("")
  
  const enviarComentario = () => {
    tipo ==1? AgregarComentario(Comentario, id, "Peliculas"): AgregarComentario(Comentario, id, "Series")
    
  }
  const cambioText = (comn)=>{
    console.log(comn.target.value)
    setComentario(comn.target.value)
  }
  
  return (
    <div className="addComentario Comentario card">
      <div className="card-body d-flex">
        <div className="input-group ">
          <span class="input-group-text">Comentario</span>
          <textarea
            class="form-control"
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