import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoperfect.png";

import "./navbar.css";

export default function Nabvar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={logo} alt="Img Not found" width="250px" />

        <div className="btn-agenda">
         
          <Link to="/agenda" className="agenda-cx"><a href="">Agenda CX</a>
            
          </Link>
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
