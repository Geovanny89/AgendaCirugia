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



  export const deleteCirujano = (id) => {
    return async (dispatch) => {
      try {
        await axios.delete(`http://localhost:3001/delete/${id}`);
        dispatch({ type: 'DELETE_CIRUJANO', payload: id });
        // Additional actions after successful deletion, if needed
        // For example, you can show a success notification or update the list of cirujanos
      } catch (error) {
        console.log(error);
        // Handle errors, if necessary
        // For example, you can show an error notification or disable some functionality
      }
    };
  };
  
  // export function putProfesionales(id, data) { // Agrega el parámetro "id"
  //   return async function(dispatch) {
  //     try {
  //       const response = await axios.put(`http://localhost:3001/paciente/${id}`, data); // Utiliza el ID en la URL
  //       return dispatch({
  //         type: 'PUT_CIRUJANO',
  //         payload: response.data
  //       });
  //     } catch (error) {
  //       console.log(error);
        
  //     }
  //   };
  // }
  
  export function putProfesionales(id, data) {
    return async function(dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/paciente/${id}`, data);
        dispatch({
          type: 'PUT_CIRUJANO',
          payload: response.data
        });
        // Realiza alguna acción adicional después de una respuesta exitosa, si es necesario
        // Por ejemplo, puedes mostrar una notificación de éxito o redireccionar a otra página
      } catch (error) {
        console.log(error);
        // Realiza alguna acción en caso de error, si es necesario
        // Por ejemplo, puedes mostrar una notificación de error o deshabilitar alguna funcionalidad
      }
    };
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