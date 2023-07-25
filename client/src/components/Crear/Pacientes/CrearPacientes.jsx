
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postPacientes, getProfesionales, getSalas, getHabitaciones } from '../../../redux/action/index';
// import './crearPaciente.css'

// export default function CrearPacientes() {
//   const dispatch = useDispatch();

//   const cirujanos = useSelector((state) => state.profesionales);
//   const salas = useSelector((state) => state.allSalas);
//   const habitaciones = useSelector((state) => state.allHabitaciones);
  

//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [id, setId] = useState('');
//   const [cirujanoId, setCirujanoId] = useState('');
//   const [prodecimientoId,setProcedimientoId]=useState('');
//   const [salaId, setSalaId] = useState('');
//   const [habitacionId, setHabitacionId] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [hour, setHour] = useState('');
//   const [minute, setMinute] = useState('');

//   useEffect(() => {
//     dispatch(getProfesionales());
//     dispatch(getSalas());
//     dispatch(getHabitaciones());
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const pacienteData = {
//       name,
//       lastName,
//       id,
//       cirujanoId,
//       prodecimientoId,
//       salaId,
//       habitacionId,
//       day,
//       month,
//       year,
//       hour,
//       minute,
//     };

//     dispatch(postPacientes(pacienteData));

//     // Reinicia los campos del formulario
//     setName('');
//     setLastName('');
//     setId('');
//     setCirujanoId('');
//     setProcedimientoId('');
//     setSalaId('');
//     setHabitacionId('');
//     setDay('');
//     setMonth('');
//     setYear('');
//     setHour('');
//     setMinute('');
//   };

//   return (
//     <div className='form-container'>
//       <form onSubmit={handleSubmit}>
//      <div className='form-name'>
//        <label>
//         Nombre:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Apellido:
//         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </label>
//       <label>
//         Identificación:
//         <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       </label>
//      </div>
//       <div className='form-vista'>
//       <label>
//         Cirujano:
//         <select value={cirujanoId} onChange={(e) => setCirujanoId(e.target.value)}>
//           <option value="">Seleccionar cirujano</option>
//           {cirujanos.map((cirujano) => (
//             <option key={cirujano._id} value={cirujano._id}>
//               {cirujano.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Procedimiento:
//         <input type="text" value={prodecimientoId} onChange={(e) => setProcedimientoId(e.target.value)} />
//       </label>
//       </div>
//       <div className='form-vista-sala'>

//       <label >
//         Sala:
//         <select value={salaId} onChange={(e) => setSalaId(e.target.value)}>
//           <option value="">Seleccionar sala</option>
//           {salas.map((sala) => (
//             <option key={sala._id} value={sala._id}>
//               {sala.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Habitación:
//         <select value={habitacionId} onChange={(e) => setHabitacionId(e.target.value)}>
//           <option value="">Seleccionar habitación</option>
//           {habitaciones.map((habitacion) => (
//             <option key={habitacion._id} value={habitacion._id}>
//               {habitacion.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       </div>
//       <div className='form-vista-fecha'>

//       <label>
//         Día:
//         <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
//       </label>
//       <label>
//         Mes:
//         <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
//       </label>
//       <label>
//         Año:
//         <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
//       </label>
//       <label>
//         Hora:
//         <input type="text" value={hour} onChange={(e) => setHour(e.target.value)} />
//       </label>
//       <label>
//         Minuto:
//         <input type="text" value={minute} onChange={(e) => setMinute(e.target.value)} />
//       </label>
//       </div>
          
//           <div className='botones'> 
//           <button type="submit">Guardar</button>
//       <a className="volver-button" href="/">Volver</a>
//           </div>
            
//     </form>
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postPacientes, getProfesionales, getProcedimientos, getSalas, getHabitaciones } from '../../../redux/action/index';
// import './crearPaciente.css';

// export default function CrearPacientes() {
//   const dispatch = useDispatch();

//   const cirujanos = useSelector((state) => state.profesionales);
//   const procedimientos = useSelector((state) => state.procedimientos);
//   const salas = useSelector((state) => state.allSalas);
//   const habitaciones = useSelector((state) => state.allHabitaciones);
//   const userRol = useSelector((state) => state.user.rol);
// console.log(userRol)
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [id, setId] = useState('');
//   const [cirujanoId, setCirujanoId] = useState('');
//   const [procedimientoId, setProcedimientoId] = useState('');
//   const [salaId, setSalaId] = useState('');
//   const [habitacionId, setHabitacionId] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [hour, setHour] = useState('');
//   const [minute, setMinute] = useState('');

//   useEffect(() => {
//     dispatch(getProfesionales());
//     dispatch(getProcedimientos());
//     dispatch(getSalas());
//     dispatch(getHabitaciones());
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userRol?.rol !== 'admin') {
//       alert('No tienes autorización para crear un paciente.');
//       return;
//     }
//     const pacienteData = {
//       name,
//       lastName,
//       id,
//       cirujanoId,
//       procedimientoId,
//       salaId,
//       habitacionId,
//       day,
//       month,
//       year,
//       hour,
//       minute,
//     };
//     if(!name || !lastName || !id || !day || !month || !year || !hour || !minute){
//       alert ("Por favor completa todos los campos "
//       )
//       return
//     }
    

//     dispatch(postPacientes(pacienteData));

//     // Reinicia los campos del formulario
//     setName('');
//     setLastName('');
//     setId('');
//     setCirujanoId('');
//     setProcedimientoId('');
//     setSalaId('');
//     setHabitacionId('');
//     setDay('');
//     setMonth('');
//     setYear('');
//     setHour('');
//     setMinute('');
//   };

//   return (
//     <div className='form-container'>
//       <form onSubmit={handleSubmit}>
//         <div className='form-name'>
//           <label>
//             Nombre:
//             <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <label>
//             Apellido:
//             <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//           </label>
//           <label>
//             Identificación:
//             <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
//           </label>
//         </div>
//         <div className='form-vista'>
//           <label>
//             Cirujano:
//             <select value={cirujanoId} onChange={(e) => setCirujanoId(e.target.value)}>
//               <option value=''>Seleccionar cirujano</option>
//               {cirujanos.map((cirujano) => (
//                 <option key={cirujano._id} value={cirujano._id}>
//                   {cirujano.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Procedimiento:
//             <select value={procedimientoId} onChange={(e) => setProcedimientoId(e.target.value)}>
//               <option value=''>Seleccionar procedimiento</option>
//               {procedimientos.map((procedimiento) => (
//                 <option key={procedimiento._id} value={procedimiento._id}>
//                   {procedimiento.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div className='form-vista-sala'>
//           <label>
//             Sala:
//             <select value={salaId} onChange={(e) => setSalaId(e.target.value)}>
//               <option value=''>Seleccionar sala</option>
//               {salas.map((sala) => (
//                 <option key={sala._id} value={sala._id}>
//                   {sala.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Habitación:
//             <select value={habitacionId} onChange={(e) => setHabitacionId(e.target.value)}>
//               <option value=''>Seleccionar habitación</option>
//               {habitaciones.map((habitacion) => (
//                 <option key={habitacion._id} value={habitacion._id}>
//                   {habitacion.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div className='form-vista-fecha'>
//           <label>
//             Día:
//             <input type='text' value={day} onChange={(e) => setDay(e.target.value)} />
//           </label>
//           <label>
//             Mes:
//             <input type='text' value={month} onChange={(e) => setMonth(e.target.value)} />
//           </label>
//           <label>
//             Año:
//             <input type='text' value={year} onChange={(e) => setYear(e.target.value)} />
//           </label>
//           <label>
//             Hora:
//             <input type='text' value={hour} onChange={(e) => setHour(e.target.value)} />
//           </label>
//           <label>
//             Minuto:
//             <input type='text' value={minute} onChange={(e) => setMinute(e.target.value)} />
//           </label>
//         </div>

//         <div className='botones'>
//           <button type='submit'>Guardar</button>
//           <a className='volver-button' href='/home'>
//             Volver
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPacientes, getProfesionales, getProcedimientos, getSalas, getHabitaciones } from '../../../redux/action/index';
import './crearPaciente.css';

export default function CrearPacientes() {
  const dispatch = useDispatch();

  const cirujanos = useSelector((state) => state.profesionales);
  const procedimientos = useSelector((state) => state.procedimientos);
  const salas = useSelector((state) => state.allSalas);
  const habitaciones = useSelector((state) => state.allHabitaciones);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [cirujanoId, setCirujanoId] = useState('');
  const [procedimientoId, setProcedimientoId] = useState('');
  const [salaId, setSalaId] = useState('');
  const [habitacionId, setHabitacionId] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  useEffect(() => {
    dispatch(getProfesionales());
    dispatch(getProcedimientos());
    dispatch(getSalas());
    dispatch(getHabitaciones());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pacienteData = {
      name,
      lastName,
      id,
      cirujanoId,
      procedimientoId,
      salaId,
      habitacionId,
      day,
      month,
      year,
      hour,
      minute,
    };
    if(!name || !lastName || !id || !day || !month || !year || !hour || !minute){
      alert ("Por favor completa todos los campos "
      )
      return
    }
    

    dispatch(postPacientes(pacienteData));

    // Reinicia los campos del formulario
    setName('');
    setLastName('');
    setId('');
    setCirujanoId('');
    setProcedimientoId('');
    setSalaId('');
    setHabitacionId('');
    setDay('');
    setMonth('');
    setYear('');
    setHour('');
    setMinute('');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-name'>
          <label>
            Nombre:
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Apellido:
            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label>
            Identificación:
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
          </label>
        </div>
        <div className='form-vista'>
          <label>
            Cirujano:
            <select value={cirujanoId} onChange={(e) => setCirujanoId(e.target.value)}>
              <option value=''>Seleccionar cirujano</option>
              {cirujanos.map((cirujano) => (
                <option key={cirujano._id} value={cirujano._id}>
                  {cirujano.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Procedimiento:
            <select value={procedimientoId} onChange={(e) => setProcedimientoId(e.target.value)}>
              <option value=''>Seleccionar procedimiento</option>
              {procedimientos.map((procedimiento) => (
                <option key={procedimiento._id} value={procedimiento._id}>
                  {procedimiento.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='form-vista-sala'>
          <label>
            Sala:
            <select value={salaId} onChange={(e) => setSalaId(e.target.value)}>
              <option value=''>Seleccionar sala</option>
              {salas.map((sala) => (
                <option key={sala._id} value={sala._id}>
                  {sala.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Habitación:
            <select value={habitacionId} onChange={(e) => setHabitacionId(e.target.value)}>
              <option value=''>Seleccionar habitación</option>
              {habitaciones.map((habitacion) => (
                <option key={habitacion._id} value={habitacion._id}>
                  {habitacion.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='form-vista-fecha'>
          <label>
            Día:
            <input type='text' value={day} onChange={(e) => setDay(e.target.value)} />
          </label>
          <label>
            Mes:
            <input type='text' value={month} onChange={(e) => setMonth(e.target.value)} />
          </label>
          <label>
            Año:
            <input type='text' value={year} onChange={(e) => setYear(e.target.value)} />
          </label>
          <label>
            Hora:
            <input type='text' value={hour} onChange={(e) => setHour(e.target.value)} />
          </label>
          <label>
            Minuto:
            <input type='text' value={minute} onChange={(e) => setMinute(e.target.value)} />
          </label>
        </div>

        <div className='botones'>
          <button type='submit'>Guardar</button>
          <a className='volver-button' href='/home'>
            Volver
          </a>
        </div>
      </form>
    </div>
  );
}
