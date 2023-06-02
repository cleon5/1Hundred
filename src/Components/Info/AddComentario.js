import React from "react";

function AddComentario() {
    
  return (
    <div className="addComentario Comentario card">
      <div className="card-body d-flex">
        <div className="input-group ">
          <span class="input-group-text">Comentario</span>
          <textarea
            class="form-control"
            rows="4"
            aria-label="With textarea"
          ></textarea>
        </div>

        <button className="btn btn-primary p-2">Enviar</button>
      </div>
    </div>
  );
}

export default AddComentario;