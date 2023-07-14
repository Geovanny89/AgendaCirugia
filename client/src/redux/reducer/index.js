

const initialState = {
    profesionales: [],
    pacientes: [],
    detail:[],
    allHabitaciones: [],
    procedimientos: [],
    allSalas: [],


}
function rootreducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_PROFESIONALES':
            return {
                ...state,
                profesionales: action.payload
            }
        case 'POST_CIRUJANO':
            return {
                ...state,
            }
        case 'PUT_CIRUJANO':
            const updatedProfesionales = state.profesionales.map(profesional => {
                if (profesional._id === action.payload._id) {
                    return action.payload; // Reemplaza el cirujano actualizado
                }
                return profesional; // Mantén los demás cirujanos sin cambios
            });

            return {
                ...state,
                profesionales: updatedProfesionales
            };
        case 'DELETE_CIRUJANO':
            const filteredProfesionales = state.profesionales.filter(
                (profesional) => profesional._id !== action.payload
            );

            return {
                ...state,
                profesionales: filteredProfesionales
            };

        case 'GET_PACIENTES':
            return {
                ...state,
                pacientes: action.payload
            }
            // case 'GET_PACIENTES_NAME':
            //     let filterNombre = action.payload === "" ? state.pacientes :
            //       state.pacientes.filter((pacien) =>
            //         pacien.name.toLowerCase().includes(String(action.payload).toLowerCase())
            //       );
            //     return {
            //       ...state,
            //       pacientes: filterNombre
            //     };
            case 'GET_PACIENTES_NAME':
                return{
                    ...state,
                    pacientes:action.payload
                }
              
                case 'GET_DETAIL':
                    const { _id, createdAt, updatedAt, ...detailData } = action.payload;
                    return {
                      ...state,
                      detail: detailData
                    }
        case 'POST_PACIENTE':
            return {
                ...state,
            }
            case 'PUT_PACIENTE':
            const updatedPacientes = state.pacientes.map(paciente => {
                if (paciente._id === action.payload._id) {
                    return action.payload; // Reemplaza el cirujano actualizado
                }
                return paciente; // Mantén los demás cirujanos sin cambios
            });

            return {
                ...state,
                profesionales: updatedPacientes
            };
            case 'DELETE_PACIENTE':
                const filteredPacientes = state.pacientes.filter(
                    (paciente) => paciente._id !== action.payload
                );
    
                return {
                    ...state,
                    pacientes: filteredPacientes
                };
    
        case 'GET_HABITACION':
            return {
                ...state,
                allHabitaciones: action.payload
            }
        case 'POST_HABITACION':
            return {
                ...state
            }
        case 'PUT_HABITACIONES':
            const updatedHabitaciones = state.allHabitaciones.map(habitacion => {
                if (habitacion._id === action.payload._id) {
                    return action.payload; // Reemplaza la habitación actualizada
                }
                return habitacion; // Mantén las demás habitaciones sin cambios
            });

            return {
                ...state,
                allHabitaciones: updatedHabitaciones
            };


        case 'DELETE_HABITACION':
            const filteredHabitaciones = state.allHabitaciones.filter(
                habitacion => habitacion._id !== action.payload
            );
            return {
                ...state,
                allHabitaciones: filteredHabitaciones
            };
        case 'GET_PROCEDIMIENTOS':
            return {
                ...state,
                procedimientos: action.payload
            };
        case 'POST_PROCEDIMIENTO':
            return {
                ...state,
            }
        case 'PUT_PROCEDIMIENTO':
            const updatedProcedimiento = state.procedimientos.map(procedimiento => {
                if (procedimiento._id === action.payload._id) {
                    return action.payload; // Reemplaza la habitación actualizada
                }
                return procedimiento; // Mantén las demás habitaciones sin cambios
            });

            return {
                ...state,
                procedimientos: updatedProcedimiento
            };
        case 'DELETE_PROCEDIMIENTOS':
            const filteredProcedimientos = state.procedimientos.filter(
                procedimiento => procedimiento._id !== action.payload
            );
            return {
                ...state,
                procedimientos: filteredProcedimientos
            };
        case 'GET_SALAS':
            return {
                ...state,
                allSalas: action.payload
            };
         //Estado del Paciente   
         
         default:
             return state;
            }
}
export default rootreducer;

// case 'UPDATE_PACIENTE_ESTADO':
//     const updaPacientes = state.pacientes.map(paciente => {
//       if (paciente.id === action.payload.pacienteId) {
//         return {
//           ...paciente,
//           estado: action.payload.estado
//         };
//       }
//       return paciente;
//     });
  
//     return {
//       ...state,
//       pacientes: updaPacientes
//   };
   