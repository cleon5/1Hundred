import React ,{useEffect, useState}from "react";
import {GetComentariosPeliculas, AgregarComentario} from  "../../Services/FirebaseGettters"
import { useAuth } from "../../Services/ContexAuth";

function Comentarios({id, tipo, login}) {
  const [Comentarios, setComentarios] = useState([])
  const [Comentario, setComentario] = useState("")
  const [Login, setLogin] = useState()
  const atu = useAuth();

  const getComentarios = async() =>{
    let tmp;
    if(tipo == 1){
      tmp = await GetComentariosPeliculas(id, "Peliculas")
    }else{
      tmp = await GetComentariosPeliculas(id, "Series")
    }
    
    setComentarios(tmp);
    console.log(tmp)
  }

  
  const enviarComentario = async() => {
    let comentarioLocal = {
      Comentario: Comentario,
      Fecha:"Ahora",
      Img: "",
      Nombre : "Yo mero"
    }
    let TmpComen = Comentarios
    console.log(TmpComen)
    TmpComen.push(comentarioLocal)
    setComentarios(TmpComen)
    tipo ==1 ? await AgregarComentario(Comentario, id, "Peliculas")
    : await AgregarComentario(Comentario, id, "Series")
    location.reload();
  }
  const cambioText = (comn)=>{
    setComentario(comn.target.value)
  }
  useEffect(() => {
    getComentarios()
    setLogin(atu.login)
    console.log(Login)

  }, [])
  
  return (
    <div className="Media">
      <div className="Cast">
        <h3>Comentarios</h3>
        <hr />
        <div className="d-flex flex-column">
          {Comentarios.length != 0 ? (
            Comentarios.map((coment, key) => (
              <div key={key} className="Comentario">
                <div className="HeadComentario d-flex">
                  <div className="imgComentario">
                    <img className="incoComentario" src={coment.Img}></img>
                  </div>
                  <div className="HeadComentarioText">
                    <p className="nombreComentario">{coment.Nombre}</p>
                    <p className="fechaComentatio">{coment.Fecha}</p>
                  </div>
                </div>
                <div className="cuerpoComentatio">
                  <p className="">{coment.Comentario}</p>
                </div>
                <hr></hr>
              </div>
            ))
          ) : (
            <div className="Comentario">
              <div className="cuerpoComentatio">
                <p className="">Sin comentarios de la pelicula</p>
              </div>
              <hr></hr>
            </div>
          )}
        </div>
      </div>
      {Login && (
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

            <button
              className="btn btn-primary p-2"
              onClick={() => enviarComentario()}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comentarios;
