

import React from 'react';

import './card.css';



export default function Card({ name, lastName,estado, cirujanoId, procedimientId, salaId, day, month, year, hour,minute }) {

  let estadoColorClass = '';

  switch (estado) {
    case 'preparación':
      estadoColorClass = 'estado-preparacion';
      break;
    case 'procedimiento':
      estadoColorClass = 'estado-procedimiento';
      break;
    case 'recuperación':
      estadoColorClass = 'estado-recuperacion';
      break;
    default:
      break;
  }
  const formattedMinute = String(minute).padStart(2, '0');
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
      <div className='vista-fecha'>
        <span className='retro-name'>Fecha : </span>
        <h3>{day + '/' + month + '/' + year}</h3>
      </div>
      <div className='vista-hora'>
        <span className='retro-name'>Hora : </span>
        <h3>{hour + ':' + formattedMinute}</h3>
      </div>
      <div >
        <span>Estado:</span>
        <h3 className={`estado-button ${estadoColorClass}`}>{estado}</h3>
      </div>
     
      <br />
      
      
    </div>
  );
}
