// import React, { useState } from 'react'
// import './card.css'
// // import logo from '../../assets/logoperfect.png'
// export default function Card({ name, lastName, cirujanoId, procedimientId, salaId, day, month, year, hour }) {
//   const [status, setStatus] = useState('preparacion');
//   return (
//     <div className='vista'>

//       <h2>Nombre: <br />
//         {name} {lastName} </h2>
//       <h2>Cirujano: <br />
//         {cirujanoId}</h2>
//       <h2>Procedimiento:  <br />
//         {procedimientId}</h2>
//       <h2>Sala Cx: <br /> {salaId}</h2>
//       <h2>Fecha: <br /> {day + '/' + month + '/' + year} </h2>
//       <h2>Hora: <br /> {hour + ': 00'}</h2>
//       {/* <h2>{habitacionId}</h2> */}
//       <br />
//       {status === 'preparacion' && (
//         <a className="boton-preparacion" >Preparación</a>
//       )}
//       {status === 'procedimiento' && (
//         <a className="boton-procedimiento">Procedimiento</a>
//       )}
//       {status === 'recuperacion' && (
//         <a className="boton-recuperacion">Recuperación</a>
//       )}
//     </div>
//   )
// }

import React, { useState } from 'react';
import './card.css';
// import logo from '../../assets/logoperfect.png';

export default function Card({ name, lastName, cirujanoId, procedimientId, salaId, day, month, year, hour,minute }) {
  const [status, setStatus] = useState('preparacion');

  return (
    <div className='vista'>
      <div>
        <span className='retro-name'>Nombre Paciente : </span>
        <h3>
        {name} {lastName}

        </h3>
      </div>
     <div>
      <span className='retro-name'>Cirujano : </span>
      <h3>
        {cirujanoId}
      </h3>
     </div>
        
      <div>
        <span className='retro-name'>Procedimiento : </span>
        <h3>
        {procedimientId}
        </h3>
      </div>
      <div>
        <span className='retro-name'>Sala Cx :</span>
        <h3>
        {salaId}
        </h3>
      </div>
      <div>
        <span className='retro-name'>Fecha : </span>
        <h3>{day + '/' + month + '/' + year}</h3>
      </div>
      <div>
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
