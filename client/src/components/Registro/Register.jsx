
  import React, { useState } from 'react';
  import { postRegister } from '../../redux/action';
  import imagen from '../../assets/logo1.png'
  import './register.css';
  import { useDispatch } from 'react-redux';

  export default function Register() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
          nombre,
          apellido,
          nombreUsuario,
          email,
          contraseña
        };
      // Realiza la llamada a la acción postRegister
      console.log(formData)
      try {
        await dispatch(postRegister(formData));
        
        window.alert('Usuario creado con Exito')
        // Registro exitoso, realiza cualquier acción adicional o redirección necesaria
      } catch (error) {
        // Manejo de errores, por ejemplo, mostrar un mensaje de error al usuario
        window.alert('Error')
      }
    };

    return (
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <img src={imagen} alt="Img Not Found" width="150px" height="150px"/>
          <div className="form-group">
            <label htmlFor="name">Nombre :</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido :</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombreUsuario">Usuario:</label>
            <input
              type="text"
              id="nombreUsuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className='opciones-btn'>

            <button type="submit">Registrarse</button>
            <a className='volver-btn' href="/">Volver</a>
          </div>
        </form>
      </div>
    );
  }
