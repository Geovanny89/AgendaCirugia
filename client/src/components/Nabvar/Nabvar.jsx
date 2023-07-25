import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import logo from "../../assets/logo1.png";

import "./navbar.css";
import { logout } from "../../redux/action";

export default function Nabvar() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Obtén la función navigate

  const handleLogout = () => {
    // Llamar a la acción logout para cerrar sesión
    dispatch(logout());
    // Redireccionar al inicio de sesión o a la página de landing después de cerrar sesión
    // (ajusta el "to" en navigate según sea necesario)
    navigate("/"); // Utiliza la función navigate para redireccionar
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={logo} alt="Img Not found" width="150px" />

        <div className="btn-agenda">
         
          <Link to="/agenda" className="agenda-cx">Agenda CX
            
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

//  <ul className="navbar-list">
//  <li >
//       <img  src={logo} alt="Img Not Found" width="200px" height="100px" />
//  </li>
// <li className='navbar-button'><a href="">Incio</a></li>
//  <li className='navbar-button'><a href="">Cirujanos</a></li>
//  <li className='navbar-button'><a href="">Salas Cirugia</a></li>
//  <li className='navbar-button'><a href="">Procedimientos</a></li>
// </ul>
