import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProcedimientos } from "../../../redux/action/index";
import './crearProcedimiento.css'

export default function CrearProce() {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre del procedimiento
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const procedimientoData = { name: nombre }; // Datos del procedimiento a enviar
    if (!procedimientoData.name) {
      alert('Por favor, ingresa un nombre de procedimiento');
      return;
    }
    dispatch(postProcedimientos(procedimientoData)); // Llama a la acción postProcedimientos con los datos del procedimiento
    setNombre(""); // Limpia el campo de nombre después de enviar el formulario
  };
  return (
    <div className="crear-procedimiento">
      <h3>Crear Procedimiento</h3>
      <div className="form-Procedimiento">
        <form className="form-proce" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre: 
          <input
            type="text"
            placeholder="Nombre del procedimiento"
            value={nombre}
            onChange={handleInputChange}
          />
          </label>
          <div>
          </div>
          <div className="boton-proce">
          <button type="submit">Crear</button>
          <a className="button-cerrar" href="/">Cerrar</a>
          </div>
          

        </form>

      </div>
    </div>
  )
}
