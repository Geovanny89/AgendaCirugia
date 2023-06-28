

import React, { useState } from 'react';
import './card.css';
// import logo from '../../assets/logoperfect.png';

export default function Card({ name, lastName, cirujanoId, procedimientId, salaId, day, month, year, hour,minute }) {
  const [status, setStatus] = useState('recuperacion');

  return (
    <div className='vista'>
      <div className='vista-nombre'>
        <span className='retro-name'>Nombre Paciente : </span>
        <h3>
        {name} {lastName}

        </h3>
      </div>
     <div className='vista-cirujano'>
      <span className='retro-name'>Cirujano : </span>
      <h3>
        {cirujanoId}
      </h3>
     </div>
        
      <div className='vista-procedimiento'>
        <span className='retro-name'>Procedimiento : </span>
        <h3>
        {procedimientId}
        </h3>
      </div>
      <div className='vista-cx'>
        <span className='retro-name'>Sala Cx :</span>
        <h3>
        {salaId}
        </h3>
      </div>
      {/* <div>
        <span className='retro-name'>Fecha : </span>
        <h3>{day + '/' + month + '/' + year}</h3>
      </div> */}
      <div className='vista-hora'>
        <span className='retro-name'>Hora : </span>
        <h3>{hour +':'+ minute}</h3>
      </div>
      
      {/* <h2>{habitacionId}</h2> */}
      <br />
      <div>
        <span className='retro-name' >Estado :</span>
        <h3>
        {status === 'preparacion' && (
        <a className="boton-preparacion" >Preparación</a>
      )}
      {status === 'procedimiento' && (
        <a className="boton-procedimiento">Procedimiento</a>
      )}
      {status === 'recuperacion' && (
        <a className="boton-recuperacion">Recuperación</a>
      )}
        </h3>
      </div>
      
    </div>
  );
}
