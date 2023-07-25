
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nabvar from "../Nabvar/Nabvar";
import {
  getProfesionales,
  deleteCirujano,
  getProcedimientos,
  deleteProcedimiento,
  getPacientes,
  deletePaciente
} from "../../redux/action";

import "./home.css";
import CrearMedico from "../Crear/Medicos/CrearMedico";
import ActualizarCirujano from "../Crear/Medicos/ActualizarMedico";
import CrearProce from "../Crear/Procedimiento/CrearProce";
import ActualizarProcedimiento from "../Crear/Procedimiento/ActualizarProcedimiento";
import CrearPacientes from "../Crear/Pacientes/CrearPacientes";
import ActualizarPaciente from "../Crear/Pacientes/ActualizarPaciente";
import DetallePaciente from "../../components/Crear/Pacientes/DetallePaciente";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearBar/SearchBar";

export default function Home() {
  const [cirujanosMenuOpen, setCirujanosMenuOpen] = useState(false);
  const [pacientesMenuOpen, setPacientesMenuOpen] = useState(false);
  const [procedimientosMenuOpen, setProcedimientosMenuOpen] = useState(false);
  const [crearCirujanoVisible, setCrearCirujanoVisible] = useState(false);
  const [verCirujanos, setVerCirujanos] = useState(false);
  const [actualizarMedicoVisible, setActualizarMedicoVisible] = useState(false);
  const [cirujanoId, setCirujanoId] = useState(null);
  const [verProcedimientos, setVerProcedimientos] = useState(false);
  const [crearProcedimientoVisible, setCrearProcedimientoVisible] = useState(false);
  const [actualizarProcedimiento, setActualizarProcedimiento] = useState(false);
  const [procedimientoId, setProcedimientoId] = useState(null);
  const [verPacientes, setVerPacientes] = useState(false);
  const [crearPacienteVisible, setCrearPacienteVisible] = useState(false);
  const [pacienteId, setPacienteId] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [actualizarPacienteId, setActualizarPacienteId] = useState(null);
  const [verDetallePaciente, setVerDetallePaciente] = useState(false);
  const [pacienteIdSeleccionado, setPacienteIdSeleccionado] = useState(null);

  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.profesionales);
  const procedimientos = useSelector((state) => state.procedimientos);
  const pacientes = useSelector((state) => state.pacientes);

  // PAGINADO pacientes
  const [currentPage, setCurrentPage] = useState(1);
  const [pacientPorPage, setPacientPorPage] = useState(5);
  const indexOfLastPacien = currentPage * pacientPorPage;
  const indexOfFirstPacien = indexOfLastPacien - pacientPorPage;
  const currentPacientes = pacientes.slice(indexOfFirstPacien, indexOfLastPacien);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getProfesionales());
    dispatch(getProcedimientos());
    dispatch(getPacientes());
  }, [dispatch]);

  const toggleCirujanosMenu = () => {
    setActiveSection("cirujanos");
    setCirujanosMenuOpen(!cirujanosMenuOpen);
  };

  const togglePacientesMenu = () => {
    setActiveSection("pacientes");
    setPacientesMenuOpen(!pacientesMenuOpen);
  };

  const toggleProcedimientosMenu = () => {
    setActiveSection("procedimiento");
    setProcedimientosMenuOpen(!procedimientosMenuOpen);
  };

  const toggleCrearCirujano = () => {
    setCrearCirujanoVisible(!crearCirujanoVisible);
    setActiveSection(null);
  };

  const toggleVerCirujanos = () => {
    setVerCirujanos(!verCirujanos);
    setActiveSection(null);
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
    setActiveSection(null);
  };

  const toggleVerProcedimiento = () => {
    setVerProcedimientos(!verProcedimientos);
    setActiveSection(null);
  };

  const toggleCrearProcedimiento = () => {
    setCrearProcedimientoVisible(!crearProcedimientoVisible);
    setActiveSection(null);
  };

  const handleActualizarProcedimiento = (id) => {
    setProcedimientoId(id);
    setActualizarProcedimiento(true);
    setActiveSection(null);
  };

  const handleEliminarProcedimiento = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este procedimiento?");
    if (confirmDelete) {
      dispatch(deleteProcedimiento(id));
    }
  };

  const toggleCrearPaciente = () => {
    setCrearPacienteVisible(!crearPacienteVisible);
    setActiveSection(null);
  };

  const toggleVerPacientes = () => {
    setVerPacientes(!verPacientes);
    setActiveSection(null);
  };

  const toggleDetallePaciente = (pacienteId) => {
    setVerDetallePaciente(!verDetallePaciente);
    setPacienteIdSeleccionado(pacienteId);
  };

  const handleActualizarPaciente = (id) => {
    setActualizarPacienteId(id);
  };

  const handleEliminarPaciente = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este paciente?");
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
              {cirujanosMenuOpen && (
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
              )}
            </div>
          </section>
          <hr />
          <section className="menu">
            <div onClick={togglePacientesMenu}>
              <p>Pacientes</p>
              {pacientesMenuOpen && (
                <ul>
                  <li>
                    <a href="#pacientes" onClick={toggleVerPacientes}>
                      Pacientes
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleCrearPaciente}>
                      Crear Paciente
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </section>
          <hr />
          <section className="menu">
            <div onClick={toggleProcedimientosMenu}>
              <p>Procedimiento</p>
              {procedimientosMenuOpen && (
                <ul>
                  <li>
                    <a href="#" onClick={toggleVerProcedimiento}>
                      Procedimientos
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleCrearProcedimiento}>
                      Crear Procedimiento
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </section>
        </section>

        <section className="espacio">
          {activeSection === "cirujanos" && verCirujanos && (
            <div className="card-container">
              {profesionales.map((profesional) => (
                <div className="card" key={profesional._id}>
                  <span className="nombre">
                    {profesional.name} {profesional.lastName}
                  </span>
                  <div className="card-delete">
                    <a
                      className="actualizar-btn"
                      onClick={() => handleActualizarCirujano(profesional._id)}
                    >
                      Actualizar
                    </a>
                    <a
                      className="eliminar-btn"
                      onClick={() => handleEliminarCirujano(profesional._id)}
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'cirujanos' && crearCirujanoVisible && <CrearMedico />}
          {actualizarMedicoVisible && <ActualizarCirujano id={cirujanoId} />}
 
          {activeSection === "procedimiento" && verProcedimientos && (
            <div className="procedimientos">
              {procedimientos.map((procedimiento) => (
                <div className="procemiento-card" key={procedimiento._id}>
                  <span className="procedimiento-nombre">{procedimiento.name}</span>
                  <div className="procedimineto-card-delete">
                    <a
                      className="procedimineto-actualizar-btn"
                      onClick={() => handleActualizarProcedimiento(procedimiento._id)}
                    >
                      Actualizar
                    </a>
                    <a
                      className="procedimiento-delete-btn"
                      onClick={() => handleEliminarProcedimiento(procedimiento._id)}
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'procedimiento' && crearProcedimientoVisible && <CrearProce />}
          {actualizarProcedimiento && <ActualizarProcedimiento id={procedimientoId} />}

          {activeSection === 'pacientes' && !actualizarPacienteId && !crearPacienteVisible && !verDetallePaciente && verPacientes && (
            <div className="paciente">
              <SearchBar currentPage={setCurrentPage}/>
              {currentPacientes
                .sort((a, b) => a.name.localeCompare(b.name)) // Ordenar pacientes por nombre
                .map((paciente) => (
                  <div className="paciente-card" key={paciente._id}>
                    <div className="paciente-nombre">
                      {paciente.name} {paciente.lastName}
                    </div>
                    <div className="card-actions">
                      <a
                        className="paciente-detalle-btn"
                        onClick={() => toggleDetallePaciente(paciente._id)}
                      >
                       Detalle
                      </a>
                      <a
                        className="paciente-actualizar-btn"
                        onClick={() => handleActualizarPaciente(paciente._id)}
                      >
                        Actualizar
                      </a>
                      <a
                        className="paciente-eliminar-btn"
                        onClick={() => handleEliminarPaciente(paciente._id)}
                      >
                        Eliminar
                      </a>
                    </div>
                  </div>
                ))}
              <Paginado
                pacientPorPage={pacientPorPage}
                pacientes={pacientes.length}
                paginado={paginado}
              />
            </div>
          )}

          {activeSection === 'pacientes' && crearPacienteVisible && <CrearPacientes />}
          {actualizarPacienteId && <ActualizarPaciente pacienteId={actualizarPacienteId} />}
          {verDetallePaciente && <DetallePaciente pacienteId={pacienteIdSeleccionado} />}
        </section>
      </div>
    </div>
  );
}
