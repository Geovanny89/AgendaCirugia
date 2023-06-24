const initialState = {
    profesionales: [],
    pacientes:[]
}
function rootreducer(state = initialState, action) {
    switch (action.type) {
        
        case 'GET_PROFESIONALES':
            return {
                ...state,
                profesionales: action.payload
            }
            case 'POST_CIRUJANO':
                return{
                    ...state,
                }
        case 'GET_PACIENTES':
            return{
                ...state,
               pacientes:action.payload
            }
        default:
            return state;
    }
}
export default rootreducer;