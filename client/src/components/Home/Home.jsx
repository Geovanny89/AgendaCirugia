
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nabvar from "../Nabvar/Nabvar";


import { getProfesionales, deleteCirujano, getHabitaciones, deleteHabitacion, getProcedimientos, deleteProcedimiento, getPacientes,deletePaciente } from "../../redux/action";


import "./home.css";
import CrearMedico from "../Crear/Medicos/CrearMedico";
import ActualizarCirujano from "../Crear/Medicos/ActualizarMedico";
import CrearHabitaciones from "../Crear/Habitaciones/CrearHabitaciones";
import CrearProce from "../Crear/Procedimiento/CrearProce";
import ActualizarProcedimiento from "../Crear/Procedimiento/ActualizarProcedimiento";
import CrearPacientes from "../Crear/Pacientes/CrearPacientes";
import ActualizarPaciente from "../Crear/Pacientes/ActualizarPaciente";

export default function Home() {
  const [cirujanosMenuOpen, setCirujanosMenuOpen] = useState(false);
  const [pacientesMenuOpen, setPacientesMenuOpen] = useState(false);
  const [habitacionesMenuOpen, setHabitacionesMenuOpen] = useState(false);
  const [procedimientosMenuOpen, setProcedimientosMenuOpen] = useState(false);
  const [crearCirujanoVisible, setCrearCirujanoVisible] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [verCirujanos, setVerCirujanos] = useState(false);
  const [actualizarMedicoVisible, setActualizarMedicoVisible] = useState(false);
  const [cirujanoId, setCirujanoId] = useState(null); // Estado para almacenar el id del cirujano a actualizar
  const [verHabitaciones, setVerHabitaciones] = useState(false)
  const [crearHabitacionVisible, setCrearHabitacionVisible] = useState(false);
  const [verProcedimientos, setVerProcedimientos] = useState(false);
  const [crearProcedimientoVisible, setCrearProcedimientoVisible] = useState(false);
  const [actualizarProcedimiento, setActualizarProcedimiento] = useState("");
  const [procedimientoId, setProcedimientoId] = useState(null);
  const [verPacientes, setVerPacientes] = useState(false)
  const [crearPacienteVisible, setCrearPacienteVisible] = useState(false);
  const [actualizarPacienteVisible, setActualizarPacienteVisible] = useState(false);
  const [pacienteId, setPacienteId] = useState(null);


  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.profesionales);
  const allHabitaciones = useSelector((state) => state.allHabitaciones);
  const procedimientos = useSelector((state) => state.procedimientos)
  const pacientes = useSelector((state) => state.pacientes)
  console.log(pacientes)
  useEffect(() => {
    dispatch(getProfesionales());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getHabitaciones());
  }, [dispatch]);
  useEffect(() => {

    dispatch(getProcedimientos()); // Dispatch the getProcedimientos action when needed
  }, [dispatch, verProcedimientos]);
  useEffect(() => {
    dispatch(getPacientes())
  }, [dispatch])
  const toggleCrearCirujano = () => {
    setCrearCirujanoVisible(!crearCirujanoVisible);
    setMostrarFormulario(true);
  };
  
 
  const toggleVerCirujanos = () => {
    setVerCirujanos(!verCirujanos);
  };
  const handleEliminarCirujano = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este cirujano?");
    if (confirmDelete) {
      dispatch(deleteCirujano(id));
    }
  };

  const handleActualizarCirujano = (id) => {
    setCirujanoId(id);
    setActualizarMedicoVisible(true);
  };
  const toggleCirujanosMenu = () => {
    setCirujanosMenuOpen(!cirujanosMenuOpen);
  };

  const togglePacientesMenu = () => {
    setPacientesMenuOpen(!pacientesMenuOpen);
  };

  const handleMostrarHabitaciones = () => {
    setVerHabitaciones(!verHabitaciones);
  };
  const handleEliminarHabitacion = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta habitación?");
    if (confirmDelete) {
      dispatch(deleteHabitacion(id));
    }
  };

  const toggleCrearHabitacion = () => {
    setCrearHabitacionVisible(!crearHabitacionVisible);
  };
  const toggleHabitacionesMenu = () => {
    setHabitacionesMenuOpen(!habitacionesMenuOpen);
  };
  const toggleProcedimientosMenu = () => {
    setProcedimientosMenuOpen(!procedimientosMenuOpen);
    // setVerProcedimientos(true); // Set verProcedimientos to true when the menu is opened
  };
  const toggleVerProcedimiento = () => {
    setVerProcedimientos(!verProcedimientos)
  }
  const toggleCrearProcedimiento = () => {
    setCrearProcedimientoVisible(!crearProcedimientoVisible);
  };
  const handleActualizarProcedimiento = (id) => {
    setProcedimientoId(id);
    setActualizarProcedimiento(true)
  }
  const handleEliminarProcedimiento = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este procedimiento?");
    if (confirmDelete) {
      dispatch(deleteProcedimiento(id));
    }
  };
  const toggleCrearPaciente = () => {
    setCrearPacienteVisible(!crearPacienteVisible);
  };
  const toggleVerPacientes = () => {
    setVerPacientes(!verPacientes);
  };

  const handleActualizarPaciente = (id) => {
    setPacienteId(id);
    setActualizarPacienteVisible(true);
  };
  const handleEliminarPaciente = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta paciente?");
    if (confirmDelete) {
      dispatch(deletePaciente(id));
    }
  };

  return (
    <div className="navegacion">
      <Nabvar />
      <hr />
      <div className="vista-section">
        <section className="opciones">
          <section className="menu">
            <div onClick={toggleCirujanosMenu}>
              <p>Cirujanos</p>
              {cirujanosMenuOpen ? (
                <ul>
                  <li>
                    <a href="#profesionales" onClick={toggleVerCirujanos}>
                      Cirujanos
                    </a>
                  </li>
                  <li>
                    <a href="#cirujano" onClick={toggleCrearCirujano}>
                      Crear cirujano
                    </a>
                  </li>

                </ul>
              ) : null}
            </div>
          </section>
          <hr />
          <section className="menu">
            <div onClick={togglePacientesMenu}>
              <p>Pacientes</p>
              {pacientesMenuOpen ? (
                <ul>
                  <li>
                    <a href="#pacientes" onClick={toggleVerPacientes}>Pacientes</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleCrearPaciente}>Crear Paciente</a>
                  </li>

                </ul>
              ) : null}
            </div>
          </section>
          <hr />
          <section className="menu">
            <div onClick={toggleHabitacionesMenu}>
              <p>Habitaciones</p>
              {habitacionesMenuOpen ? (
                <ul>
                  <li>
                    <a href="#" onClick={handleMostrarHabitaciones}>
                      Habitaciones
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleCrearHabitacion}>Crear Habitación</a>
                  </li>
                </ul>
              ) : null}
            </div>
          </section>
          <hr />
          <section className="menu">
            <div onClick={toggleProcedimientosMenu}>
              <p>Procedimiento</p>
              {procedimientosMenuOpen ? (
                <ul>
                  <li>
                    <a href="#" onClick={toggleVerProcedimiento}>Procedimientos</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleCrearProcedimiento}>Crear Procedimiento</a>

                  </li>

                </ul>
              ) : null}
            </div>
          </section>

        </section>

        <section className="espacio">
          {verCirujanos && (
            <div className="card-container">
              {profesionales.map((profesional) => (
                <div className="card" key={profesional._id}>

                  <span className="nombre">{profesional.name} {profesional.lastName}</span>

                  <div className="card-delete">

                    <a className="actualizar-btn" onClick={() => handleActualizarCirujano(profesional._id)}>Actualizar</a>
                    <a className="eliminar-btn" onClick={() => handleEliminarCirujano(profesional._id)}>Eliminar</a>
                  </div>



                </div>
              ))}
            </div>
          )}

          {crearCirujanoVisible && (
            <CrearMedico />
          )}

          {actualizarMedicoVisible ? (
            <ActualizarCirujano id={cirujanoId} />
          ) : (
            <p>Formulario not found</p>
          )}
          {verHabitaciones && (
            <div>
              {allHabitaciones.sort((a, b) => a.name.localeCompare(b.name)).map((habitacion) => (
                <div key={habitacion._id} className="habitacion-card">
                  <p>{habitacion.name}</p>
                  <div className="habitacion-actions">
                    <button>Actualizar</button>
                    <button onClick={() => handleEliminarHabitacion(habitacion._id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {crearHabitacionVisible && <CrearHabitaciones />}
          {verProcedimientos && (
            <div className="procedimientos">
              {procedimientos
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((procedimiento) => (
                  <div className="procemiento-card" key={procedimiento._id}>
                    <span className="procedimiento-nombre">{procedimiento.name}</span>
                    <div className="procedimineto-card-delete">
                      <a className="procedimineto-actualizar-btn" onClick={() => handleActualizarProcedimiento(procedimiento._id)}>Actualizar</a>
                      <a className="procedimiento-delete-btn" onClick={() => handleEliminarProcedimiento(procedimiento._id)}>Eliminar</a>
                    </div>
                  </div>
                ))}
            </div>
          )}
          {crearProcedimientoVisible && <CrearProce />}
          {actualizarProcedimiento && <ActualizarProcedimiento id={procedimientoId} />}

          
          {verPacientes && (
            <div className="paciente">
              {pacientes.map((paciente) => (
                <div className="paciente-card" key={paciente._id}>
                  <div className="paciente-nombre">{paciente.name} {paciente.lastName}</div>
                  <div className="card-actions">
                    <a className="paciente-actualizar-btn" onClick={() => handleActualizarPaciente(paciente._id)}>Actualizar</a>
                   <a className="paciente-eliminar-btn" onClick={()=> handleEliminarPaciente(paciente._id)}>Eliminar</a>
                  </div>
                </div>
              ))}
              {actualizarPacienteVisible && (
                <ActualizarPaciente pacienteId={pacienteId} />
              )}
            </div>
          )}

          {crearPacienteVisible && <CrearPacientes />}


        
        </section>
      </div>
    </div>
  );
}
