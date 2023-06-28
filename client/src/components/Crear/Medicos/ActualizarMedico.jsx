
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { putProfesionales } from '../../../redux/action';
import './crearMedico.css'

export default function ActualizarCirujano({id}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putProfesionales(id,input));
    setInput({ name: '', lastName: '', email: '' });
 
  };

  return (
    <div className='formulario' >
      

      <form className='crear-cirujano-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            value={input.lastName}
            name="lastName"
            placeholder="Apellido"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={input.email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Actualizar</button>
        <button >Cerrar</button>
      </form>
    </div>
  );
}
