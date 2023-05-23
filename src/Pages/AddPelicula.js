import React, { useState, useEffect }  from 'react'
import CheckboxGeneros from '../Components/AddMovie/CheckboxGeneros';
import ModalActores from '../Components/AddMovie/ModalActores';
import ModalDirector from '../Components/AddMovie/ModalDirector';
import SagaModal from '../Components/AddMovie/SagaModal';

export default function AddPelicula() {
  //Creacion del estado para agregar los valores
  const [Values, setValues] = useState({
    nombrePelicula:"",
    fecha_estreno:"",
    calificacion:"",
    poster: "",
    //fks
    fk_id_disponible: 1,
    fk_id_pregunta: 1,
    fk_id_saga: 1,
    fk_id_director: 1,
    //Disponible
    disponible: {
      trailer: "",
      netflix: "",
      hbomax: "",
      appletv: "",
      amazon: "",
      otro: ""
    },
      //Preguntas
    Preguntas: {
      pregunta: "",
      respuestaA: "",
      respuestaB: "",
      respuestaC: ""
      },
    //Director
    director:{
      
    },
    //Actores
    actores:[{
      id: "",
    }],
    //Genero
    generos:[]

  });
  const [genero, setgenero] = useState([])
  const cambioText= (event) =>{
      const { name, value } = event.target;
      const newValues = {
        ...Values,
        [name]: value,
      };
  
      setValues(newValues);
      console.log(Values)
  }
  const handleCallback = (id) =>{
    let sel = Values.generos
    let find = sel.findIndex(i => i.id == id)
    if (find > -1) {
      sel.splice(find ,1)
    } else {
      sel.push({"id":id})
    }
    const newValues = {
      ...Values,
      ["generos"]: sel,
    };
    setValues(newValues )

  } 
  const saveDirec = (event) =>{
    const { value } = event.target;
    let id = parseInt(value)
    let direc = {"id":id}
    const newValues = {
      ...Values,
      ["fk_id_director"]: id,
      ["director"]: direc,
    };

    setValues(newValues);
  }

  const saveActor = (event) =>{
    const { value } = event.target;
    let direc = {"id":value}
    const newValues = {
      ...Values,
      ["actores"]: direc,
    };

    setValues(newValues);
    console.log(Values)
  }
  const saveSaga = (event) =>{
    const { value } = event.target;
    console.log(value);
    const newValues = {
      ...Values,
      ["fk_id_saga"]: value,
    };

    setValues(newValues);
    console.log(Values)
  }



  return (
    <form>
      
      <label>Nombre de la pelicula
        <input name="nombrePelicula" type="text" value={Values.nombrePelicula} onChange={cambioText}/>
      </label><br/>

      <label>Fecha de estreno
        <input name="fecha_estreno" type="text" value={Values.fecha_estreno} onChange={cambioText}/>
      </label><br/>

      <label>Calificacion
        <input name="calificacion" type="text" value={Values.calificacion} onChange={cambioText}/>
      </label>

      <label>Poster
        <input name="poster" type="text" value={Values.poster} onChange={cambioText}/>
      </label>

      <h3>Saga</h3>
      
      <SagaModal save={saveSaga}/>

      <h3>Actor</h3>
      
      <ModalActores save={saveActor}/>

      <h3>Director</h3>
      
      <ModalDirector save={saveDirec}/>

      <h3>Genero</h3>
      <CheckboxGeneros gen={handleCallback}/>
      

    <h3>Disponible</h3>
      <label>Trailer
        <input name="trailer" type="text" value={Values.disponible.trailer} onChange={cambioText}/>
      </label>
      <label>Netflix
        <input name="netflix" type="text" value={Values.disponible.netflix} onChange={cambioText}/>
      </label>
      <label>HboMax
        <input name="hbomax" type="text" value={Values.disponible.hbomax} onChange={cambioText}/>
      </label>
      <label>Apple Tv
        <input name="appletv" type="text" value={Values.disponible.appletv} onChange={cambioText}/>
      </label>
      <label>Amazon Prime
        <input name="amazon" type="text" value={Values.disponible.amazon} onChange={cambioText}/>
      </label>
      <label>Otro
        <input name="otro" type="text" value={Values.disponible.otro} onChange={cambioText}/>
      </label>

      <h3>Preguntas</h3>
      <label>Pregunta
        <input name="pregunta" type="text" value={Values.Preguntas.pregunta} onChange={cambioText}/>
      </label>
      <label>Respuesta Correcta
        <input name="respuestaA" type="text" value={Values.Preguntas.respuestaA} onChange={cambioText}/>
      </label>
      <label>Respuesta Incorrecta
        <input name="respuestaB" type="text" value={Values.Preguntas.respuestaB} onChange={cambioText}/>
      </label>
      <label>Respuesta Incorrecta
        <input name="respuestaC" type="text" value={Values.Preguntas.respuestaC} onChange={cambioText}/>
      </label>




    </form>
  )
}

/*
[
{
"id": 1,
"name": "nombre",
"link": "link",
"trailer": "quitar",
"poster": "poster",
"fechsa_estreno": "12/22/31",
"calificacion": "10'2",
//
"fk_id_disponible": 1,
"fk_id_pregunta": 1,
"fk_id_saga": 1,
"fk_id_director": 1,
//
"disponible": {
"id": 1,
"trailer": "LinkTrailer",
"netflix": "etflix",
"hbomax": "Hboma"
},
"pregunta": {
"id": 1,
"pregunta": "Ejemplo1",
"respuestaA": "respuesta",
"respuestaB": "respuestab",
"respuestaV": "crespuesta"
},
"saga": {
"saga_name": "sagaprueva",
"id": 1
},
"director": {
"id": 1,
"director_name": "Guillermo del toro",
"date": "8/05/1966",
"country": "mexico",
"photo": "phothoGuille"
},
"actores": [
{
"id": 1,
"actor_name": "Rober",
"date": "2/08/1978",
"country": "Estados unidos",
"photo": "Photo1"
}
],
"generos": [
{
"id": 1,
"genero": "Accion"
}
]
}
]
*/