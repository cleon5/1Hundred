import React,{useState} from 'react'
import "../Constants/Styles.css";

const ModalQuess = ({Preguntas=[]}, {key}) => {
    const [Titulo, setTitulo] = useState("")
    const [Text, setText] = useState("")
    console.log(key)
    const Correcta = Preguntas.Correcta;
    let Modal = "modal"+Preguntas.id
    const Verificar = (Res) => {
        if(Res === Correcta){
            console.log("bien")
            setTitulo("Correcto")
            setText("Respuesta correcta")
        }else {
            console.log("mal")
            setTitulo("Incorrecto")
            setText("Si vistes la pelicula?")
        }
    }

  return (
    <div key={Preguntas.id}>
        <button type="button" className="btn btn-primary button" data-bs-toggle="modal" data-bs-target={"#"+Modal}>
            {Preguntas.id}
        </button>

        <div className="modal fade" id={Modal} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Pregunta{Preguntas.id}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {Preguntas.Pregunta}
            </div>
            <div className="modal-footer">
                {Preguntas.Respuestas.map(Res => (
                    <button type="button"  className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={()=>{Verificar(Res)}}>{Res}</button>
                ))}
        
            </div>
            </div>
        </div>
        </div>

        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalToggleLabel2">{Titulo}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {Text}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                </div>
                </div>
            </div>
            </div>
    </div> 
    
  )
}

export default ModalQuess
