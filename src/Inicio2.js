import React from 'react'
import './Inicio2.css';

function Inicio2() {
  return (
    <div>
    <form class="navbar">
    <div className="nav-left">
    <h2> Agregar Apellido</h2>
    </div>
     <div className="mb-1">
     <label for="exampleInputlast name" className="form-label">last name</label>
     <input type="last name" className="form-control" aria_describebdby="last nameHelp"></input>
    </div>
    <div className="mb-3">
     <label for="last name" className="form-label">address</label>
     <input type="address" className="form-control" ></input>
     </div>

     <button type="button" class="btn btn-success">Guardar Datos</button>

    </form>
 </div>
  )
}

export default Inicio2;