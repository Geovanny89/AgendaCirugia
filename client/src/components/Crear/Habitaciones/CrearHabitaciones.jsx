// import React, { useState, useEffect } from 'react'
// import { useDispatch } from "react-redux";
// import { postHabitaciones } from "../../../redux/action/index";
// import './crearHabitacion.css'

// export default function CrearHabitaciones() {
//   const [name, setName] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       dispatch(postHabitaciones({ name }));
//       setName("");
//     }
//   };

//   return (
//     <div className='habitacion-crear'>
      
//       <form className='habitacion-form' onSubmit={handleSubmit}>
//         <label htmlFor='name'>
//           Nombre: 
//           <input
//             type="text"
//             placeholder='Nombre Habitacion'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <div className='boton-habi'>
//         <button type="submit">Crear</button>
//         <a className='button-form' href="/">Cerrar</a>

//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { postHabitaciones } from "../../../redux/action/index";
import './crearHabitacion.css';

export default function CrearHabitaciones() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "El nombre de la habitación es requerido";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
            placeholder='Nombre Habitación'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>
        <div className='boton-habi'>
          <button type="submit">Crear</button>
          <a className='button-form' href="/">Cerrar</a>
        </div>
      </form>
    </div>
  );
}
