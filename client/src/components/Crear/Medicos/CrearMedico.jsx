
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCirujanos } from '../../../redux/action';
import './crearMedico.css'

export default function CrearCirujano() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCirujanos(input));
    setInput({ name: '', lastName: '', email: '' });
    setSuccess(true);
  };
  
  return (
    <div className='formulario' >
       {success && (
        <div className='success-message'>
          ¡El médico se creó o actualizó exitosamente!
        </div>
      )}

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
        <div className='button-form-cx'>
        <button type="submit">Crear </button>
        <a className='link-button-cx' href="/">Cerrar</a>

        </div>
       
      </form>
    </div>
  );
}
