import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { postHabitaciones } from "../../../redux/action/index";

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
    <div>
      <h2>Crear Habitación</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Crear</button>
        <a href="/">Cerrar</a>
      </form>
    </div>
  );
}
