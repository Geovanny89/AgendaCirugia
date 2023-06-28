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
          {/* <select>
            <option value="allSala">Salas de Cirugia</option>
            <option value="sala1">Sala 1</option>
            <option value="sala2">Sala 2</option>
            <option value="sala3">Sala 3</option>
            <option value="sala4">Sala 4</option>
          </select>
          <select>
            <option value="allProcedimiento">Procedimientos</option>
            <option value="lipe">Lipectomia</option>
            <option value="lipo">Lipotransferencia</option>
            <option value="rino">Rinoplastia</option>
          </select>
          <select>
            <option value="allHab">Habitaciones</option>
            <option value="hab1">Habitacion 201</option>
            <option value="hab2">Habitacion 202</option>
            <option value="hab3">Habitacion 203</option>
            <option value="hab4">Habitacion 204</option>
            <option value="hab5">Habitacion 205</option>
            <option value="hab6">Habitacion 206</option>
            <option value="hab7">Habitacion 207</option>
            <option value="hab8">Habitacion 208</option>
            <option value="hab9">Habitacion 209</option>
            <option value="hab10">Habitacion 210</option>
            <option value="hab11">Habitacion 211</option>
          </select> */}
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
