import React from 'react'

const Modal = ([modal =[]]) => {
  return (
    <div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Pregunta{modal.id}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {modal.Pregunta}
            </div>
            <div className="modal-footer">
                {modal.Respuestas.map(Res => (
                    <button type="button"  className="btn btn-primary">{Res}</button>
                ))}
        
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal