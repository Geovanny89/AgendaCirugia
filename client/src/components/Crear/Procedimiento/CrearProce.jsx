import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProcedimientos } from "../../../redux/action/index";

export default function CrearProce() {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre del procedimiento
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const procedimientoData = { name: nombre }; // Datos del procedimiento a enviar
    dispatch(postProcedimientos(procedimientoData)); // Llama a la acción postProcedimientos con los datos del procedimiento
    setNombre(""); // Limpia el campo de nombre después de enviar el formulario
  };
  return (
    <div className="crear-procedimiento">
      <h3>Crear Procedimiento</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del procedimiento"
          value={nombre}
          onChange={handleInputChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
