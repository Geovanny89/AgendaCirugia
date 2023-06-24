import axios from 'axios'


export function getProfesionales(){
    return async function(dispatch){
        var json= await axios.get("http://localhost:3001/profesionales")
        return dispatch({
            type:'GET_PROFESIONALES',
            payload:json.data
        })
    }
}
export function getPacientes(){
    return async function(dispatch){
        var json= await axios.get("http://localhost:3001/pacien")
        return dispatch({
            type:'GET_PACIENTES',
            payload:json.data
        })
    }
}

// export function getPacientes() {
//   return async function(dispatch) {
//     try {
//       const response = await axios.get('http://localhost:3001/pacien');
//       const pacientes = response.data;
      
//       // Obtener los datos adicionales para cada paciente
//       const pacientesActualizados = await Promise.all(
//         pacientes.map(async (el) => {
//           // Obtener los datos del cirujano
//           const cirujanoResponse = await axios.get(`http://localhost:3001/profesionales/${el.cirujanoId}`);
//           console.log(el.cirujanoId)
//           const cirujano = cirujanoResponse.data;

//           // Obtener los datos del procedimiento
//           const procedimientoResponse = await axios.get(`http://localhost:3001/proce/${el.procedimientoId}`);
//           const procedimiento = procedimientoResponse.data;

//           // Obtener los datos de la sala
//           const salaResponse = await axios.get(`http://localhost:3001/allSalas/${el.salaId}`);
//           const sala = salaResponse.data;

//           // Obtener los datos de la habitación
//           const habitacionResponse = await axios.get(`http://localhost:3001/habita/${el.habitacionId}`);
//           const habitacion = habitacionResponse.data;

//           // Combinar los datos en el paciente actualizado
//           return {
//             ...el,
//             cirujano,
//             procedimiento,
//             sala,
//             habitacion,
//           };
//         })
        
//       );

//       // Despachar la acción con los pacientes actualizados
//       dispatch({
//         type: 'GET_PACIENTES',
//         payload: pacientesActualizados,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
