// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetail } from "../../../redux/action";
// import './detail.css'

// const DetallePaciente = ({ pacienteId }) => {
//   const dispatch = useDispatch();
//   const detail = useSelector((state) => state.detail);
 

// console.log(detail)
//   useEffect(() => {
//     dispatch(getDetail(pacienteId));
//   }, [dispatch, pacienteId]);

//   if (!detail) {
//     return <div>Cargando detalle del paciente...</div>;
//   }
 
  
  
//   return (
//     <div className="card-detalle-paciente">
//       <div className="detail-paciente">
//       <h2>Detalle del paciente</h2>
//       <a href=""> x </a>
//       </div>
//       {detail ? (
//       <>
//       <div className="detalle-nombre">
//         <span>Nombre: {detail.name} </span>
        
//         <span>Apellido: {detail.lastName} </span>
//         <span>Identificación: {detail.id}</span>
         
//       </div>
//       <div className="detalle-paciente-id">
//       <p>Cirujano: {detail.cirujano ? detail.cirujano.name + " " + detail.cirujano.lastName : "Cirujano no disponible"}</p>

//         <p>Procedimiento: {detail.procedimiento}</p>
//         <p>Habitación: {detail.habitacion?.name}</p>

//       </div>
//       <div className="detalle-paciente-proce">
//         <p>Sala: {detail.sala?.name}</p>
//         <p>Día: {detail.day}</p>
//         <p>Mes: {detail.month}</p>
//         <p>Año: {detail.year}</p>
//         <p>Estado: {detail.estado}</p>

//       </div>
     


      
//       </>
//     ) : (
//       <div>Cargando detalle del paciente...</div>
//     )}
    
//     </div>
//   );
// };

// export default DetallePaciente;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../../redux/action";
import './detail.css'

const DetallePaciente = ({ pacienteId }) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  console.log(detail);

  useEffect(() => {
    dispatch(getDetail(pacienteId));
  }, [dispatch, pacienteId]);

  if (!detail) {
    return <div>Cargando detalle del paciente...</div>;
  }
  
  const { name, lastName, id, cirujano, procedimiento, sala, habitacion, day, month, year, estado } = detail;
  
  return (
    <div className="card-detalle-paciente">
      <div className="detail-paciente">
        <h2>Detalle del paciente</h2>
        <a className='button-cerrar-x' href="/home"> x </a>
      </div>
      <div className="detalle-nombre">
        <span>Nombre: {name}</span>
        <span>Apellido: {lastName}</span>
        <span>Identificación: {id}</span>
      </div>
      <div className="detalle-paciente-id">
        <p>Cirujano: {cirujano?.name && cirujano?.lastName ? cirujano.name + " " + cirujano.lastName : "Cirujano no disponible"}</p>
        <p>Procedimiento: {procedimiento?.name}</p>
        <p>{habitacion?.name}</p>
      </div>
      <div className="detalle-paciente-proce">
        <p>{sala?.name}</p>
        <p>Día: {day}</p>
        <p>Mes: {month}</p>
        <p>Año: {year}</p>
        <p>Estado: {estado}</p>
      </div>
    </div>
  );
};

export default DetallePaciente;


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getDetail, putPacientes } from "../../../redux/action";
// import './detail.css'

// const DetallePaciente = ({ pacienteId }) => {
//   const dispatch = useDispatch();
//   const detail = useSelector((state) => state.detail);
//   const [nuevoEstado, setNuevoEstado] = useState("");

//   console.log(detail);

//   useEffect(() => {
//     dispatch(getDetail(pacienteId));
//   }, [dispatch, pacienteId]);

//   if (!detail) {
//     return <div>Cargando detalle del paciente...</div>;
//   }

//   const handleEstadoChange = (event) => {
//     setNuevoEstado(event.target.value);
//   };

//   const handleUpdateEstado = () => {
//     dispatch(putPacientes(pacienteId, { estado: nuevoEstado }));
//     console.log(putPacientes(pacienteId))
//   };
//   return (
//     <div className="card-detalle-paciente">
//       <div className="detail-paciente">
//         <h2>Detalle del paciente</h2>
//         <a href="/"> x </a>
//       </div>
//       {detail ? (
//         <>
//           <div className="detalle-nombre">
//             <span>Nombre: {detail.name} </span>
//             <span>Apellido: {detail.lastName} </span>
//             <span>Identificación: {detail.id}</span>
//           </div>
//           <div className="detalle-paciente-id">
//             {/* <p>Cirujano: {detail.cirujano.name} {detail.cirujano.lastName}</p> */}
//             <p>Cirujano: {detail.cirujano ? detail.cirujano.name + " " + detail.cirujano.lastName : "Cirujano no disponible"}</p>

//             <p>Procedimiento: {detail.procedimiento}</p>
//             <p>Habitación: {detail.habitacion?.name}</p>
//           </div>
//           <div className="detalle-paciente-proce">
//             <p>Sala: {detail.sala?.name}</p>
//             <p>Día: {detail.day}</p>
//             <p>Mes: {detail.month}</p>
//             <p>Año: {detail.year}</p>
//           </div>
//           <div className="detalle-paciente-estado">
//             <label htmlFor="estado">Estado:</label>
//             <select id="estado" value={nuevoEstado} onChange={handleEstadoChange}>
//               <option value="preparación">Preparación</option>
//               <option value="recuperación">Recuperación</option>
//               <option value="procedimiento">Procedimiento</option>
//             </select>
//             <button onClick={handleUpdateEstado}>Actualizar Estado</button>
//           </div>
//         </>
//       ) : (
//         <div>Cargando detalle del paciente...</div>
//       )}
//     </div>
//   );
// };

// export default DetallePaciente;
