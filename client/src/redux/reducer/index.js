const initialState = {
    profesionales: [],
    pacientes: []
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
        default:
            return state;
    }
}
export default rootreducer;