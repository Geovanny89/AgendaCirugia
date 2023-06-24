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
// export function postCirujanos(){
//     return async function(dispatch){
//         var json = await axios.post("http://localhost:3001/cirujanos")
//         console.log(json)
//         return dispatch({
//             type:'POST_CIRUJANO',
//             payload:json.data
//         })
//     }
// }
export function postCirujanos(cirujanoData) {
    return async function(dispatch) {
      try {
        const response = await axios.post("http://localhost:3001/cirujanos", cirujanoData);
        console.log(response.data); 
  
        
        return dispatch({
          type: 'POST_CIRUJANO',
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
        // Manejo del error
      }
    };
  }
  