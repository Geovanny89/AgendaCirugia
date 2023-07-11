import axios from 'axios'


export function getProfesionales() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/profesionales")
    return dispatch({
      type: 'GET_PROFESIONALES',
      payload: json.data
    })
  }
}


export function postCirujanos(cirujanoData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/cirujanos", cirujanoData);
      return dispatch({
        type: 'POST_CIRUJANO',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}



export const deleteCirujano = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      dispatch({ type: 'DELETE_CIRUJANO', payload: id });

    } catch (error) {
      console.log(error);

    }
  };
};


export function putProfesionales(id, data) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/paciente/${id}`, data);
      dispatch({
        type: 'PUT_CIRUJANO',
        payload: response.data
      });
    } catch (error) {
      console.log(error);

    }
  };
}

export function getPacientes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pacien")
    return dispatch({
      type: 'GET_PACIENTES',
      payload: json.data
    })
  }
}
export function getPacientesName(name) {
  return async function (dispatch) {
    try {
      var paciente = await axios.get(`http://localhost:3001/pacien/name?name=${name}`)

      return dispatch({
        type: 'GET_PACIENTES_NAME',
        payload: paciente.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export function postPacientes(pacientesData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/pacientes", pacientesData);
      return dispatch({
        type: 'POST_PACIENTE',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function putPacientes(id, data) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/${id}`, data);
      dispatch({
        type: 'PUT_PACIENTE',
        payload: response.data
      });
    } catch (error) {
      console.log(error);

    }
  };
}
export const deletePaciente = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/paciente/${id}`);
      dispatch({ type: 'DELETE_PACIENTE', payload: id });

    } catch (error) {
      console.log(error);

    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/pacien/${id}`);
      const detalle = response.data; // Accede a la propiedad 'data' del resultado

      return dispatch({
        type: 'GET_DETAIL',
        payload: detalle
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHabitaciones() {
  return async function (dispatch) {
    var habita = await axios.get("http://localhost:3001/habita")
    return dispatch({
      type: 'GET_HABITACION',
      payload: habita.data
    })
  }
}
export function postHabitaciones(habitacionData) {
  return async function (dispatch) {
    try {
      var creaHabitacion = await axios.post("http://localhost:3001/habitaciones", habitacionData)
      return dispatch({
        type: 'POST_HABITACION',
        payload: creaHabitacion.data
      })

    } catch (error) {
      console.log(error)
    }

  }
}


export function putHabitaciones(id, data) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/habitaciones/${id}`, data);
      dispatch({
        type: 'PUT_HABITACION',
        payload: response.data
      });
    } catch (error) {
      console.log(error);

    }
  };
}


export const deleteHabitacion = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/habitacion/${id}`);
      dispatch({ type: 'DELETE_HABITACION', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProcedimientos = () => {
  return async (dispatch) => {
    try {
      const procedimiento = await axios.get("http://localhost:3001/proce");
      dispatch({
        type: 'GET_PROCEDIMIENTOS',
        payload: procedimiento.data
      });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
};
export function postProcedimientos(procedimientoData) {
  return async function (dispatch) {
    try {
      var creaProcedimiento = await axios.post("http://localhost:3001/procedimientos", procedimientoData)
      return dispatch({
        type: 'POST_PROCEDIMIENTO',
        payload: creaProcedimiento.data
      })

    } catch (error) {
      console.log(error)
    }

  }
}
export function putProcedimientos(id, data) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/procedimiento/${id}`, data);
      dispatch({
        type: 'PUT_PROCEDIMIENTO',
        payload: response.data
      });
    } catch (error) {
      console.log(error);

    }
  };
}
export const deleteProcedimiento = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/procedimiento/${id}`);
      dispatch({ type: 'DELETE_PROCEDIMIENTO', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getSalas = () => {
  return async (dispatch) => {
    try {
      const salas = await axios.get("http://localhost:3001/allSalas");
      dispatch({
        type: 'GET_SALAS',
        payload: salas.data
      });
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
};