import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { postHabitaciones } from "../../../redux/action/index";
import './crearHabitacion.css'

export default function CrearHabitaciones() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(postHabitaciones({ name }));
      setName("");
    }
  };

  return (
    <div className='habitacion-crear'>
      
      <form className='habitacion-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Nombre: 
          <input
            type="text"
            placeholder='Nombre Habitacion'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className='boton-habi'>
        <button type="submit">Crear</button>
        <a className='button-form' href="/">Cerrar</a>

        </div>
      </form>
    </div>
  );
}
