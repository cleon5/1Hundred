import React ,{useEffect, useState}from "react";
import {GetComentariosPeliculas} from  "../../Services/FirebaseGettters"

function Comentarios({id, tipo}) {
  const [Comentarios, setComentarios] = useState([])

  const getComentarios = async() =>{
    let tmp;
    if(tipo == 1){
      tmp = await GetComentariosPeliculas(id, "Peliculas")
    }else{
      tmp = await GetComentariosPeliculas(id, "Series")
    }
    
    setComentarios(tmp);
  }

  useEffect(() => {
    getComentarios()
  }, [])
  
  return (
    <div className="Media">
      <div className="Cast">
        <h3>Comentarios</h3>
        <hr />
        <div className="d-flex flex-column">
          {Comentarios.length!=0 ? Comentarios.map((coment, key) =>
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
                <p className="">
                    {coment.Comentario}
                </p>
            </div><hr></hr>
          </div>
          
          ):(
            <div className="Comentario">
            <div className="cuerpoComentatio">
                <p className="">
                    Sin comentarios de la pelicula
                </p>
            </div><hr></hr>
          </div>
          )}

        </div>
      </div>

      <div id="ads">
        <div id="container-9e03161175592753552dc46a7c6a447a"></div>
      </div>
    </div>
  );
}

export default Comentarios;
