import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putHabitaciones } from "../../../redux/action";

export default function ActualizarHabitacion({id}) {
    const dispatch = useDispatch();
    const [habitacionData, setHabitacionData] = useState({
      name: '',
      // Agrega aquí los demás campos de la habitación que deseas actualizar
    });
  
    const handleInputChange = (event) => {
      setHabitacionData({
        ...habitacionData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(putHabitaciones(id, habitacionData)); // Utiliza putHabitacion en lugar de putHabitaciones
       
       
      };
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={habitacionData.name}
            onChange={handleInputChange}
          />
        </div>
        {/* Agrega aquí los demás campos de la habitación que deseas actualizar */}
        <button type="submit">Actualizar</button>
      </form>
    </div>
  )
}
