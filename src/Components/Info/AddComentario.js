import React,{useEffect, useState} from "react";
import {AgregarComentarioPelicula} from "../../Services/FirebaseGettters"

function AddComentario({id}) {
  const [Comentario, setComentario] = useState("")
  
  const enviarComentario = () => {
    AgregarComentarioPelicula(Comentario, id)
  }
  const cambioText = (comn)=>{
    console.log(comn.target.value)
    setComentario(comn)
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

        <button className="btn btn-primary p-2" onClick={()=> enviarComentario}>Enviar</button>
      </div>
    </div>
  );
}

export default AddComentario;