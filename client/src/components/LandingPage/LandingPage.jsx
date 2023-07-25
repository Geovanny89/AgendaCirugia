import React, { useState } from 'react';
import image from '../../assets/logo1.png';
import Cookies from 'js-cookie'
import { setSession } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './landing.css'; // Importa el archivo CSS para estilos adicionales
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function LandingPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


  const [datos, setDatos] = useState({
    nombreUsuario: "",
    contraseña: ""
  })

  const handleinputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value }
    setDatos(newDatos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log('No enviar');
    } else {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:3001/login", datos, {
          withCredentials: true,
        });
       
        if (response.status === 200) {
          const expiresIn = 2 / 24;
          Cookies.set('session', response.data.token, { expires: expiresIn });
          dispatch(setSession(response.data.user));
          setLoading(false)
          navigate('/home')
          
        }else {
          console.log("Invalid server response:", response);
          setLoading(false);
          
        }
      } catch (error) {
        setLoading(false);

        // console.log(error);
        // Aquí se puede manejar algún error específico si es necesario
        if (error.response && error.response.status === 401) {
          window.alert("Contraseña incorrecta.");
        } else if (error.response && error.response.status === 404) {
          window.alert("Usuario no existe, por favor regístrese.");
        } else {
          window.alert("Error de servidor, por favor inténtelo nuevamente.");
        }
      }
    }
  };

  return (
    <div>

      <form className="form" onSubmit={handleSubmit}>

        <img src={image} alt="Img Not Found" width="150px" height="150px" />
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          onChange={handleinputChange}
          type="text"
          id="username"
          value={datos.nombreUsuario}
          name='nombreUsuario'
          placeholder='Usuario'
          required
        />

        <label htmlFor="password">Contraseña: </label>
        <input
          type="password"
          id="contraseña"
          value={datos.contraseña}
          name='contraseña'
          placeholder='contraseña'
          onChange={handleinputChange}
          required
        />
        <button type="submit" title="Ingresar" name="Ingresar" disabled={loading}>Login</button>
        <div className="pie-form">
          <div className="pie-form">
            <Link to='/registro'>¿No tienes Cuenta? Registrate</Link>
          </div>
        </div>
      </form>

    </div>
  );
}











// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

// const handleUsernameChange = (e) => {
//   setUsername(e.target.value);
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos al servidor

//   // Limpia los campos después de enviar el formulario
//   setUsername('');
//   setPassword('');
// };