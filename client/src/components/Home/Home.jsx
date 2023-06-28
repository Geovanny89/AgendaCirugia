
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nabvar from "../Nabvar/Nabvar";
import { getProfesionales, deleteCirujano } from "../../redux/action";

import "./home.css";
import CrearMedico from "../Crear/Medicos/CrearMedico";
import ActualizarCirujano from "../Crear/Medicos/ActualizarMedico";

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
  const [actualizarCirujanoVisible, setActualizarCirujanoVisible] = useState(false); 

  useState(false);
  const dispatch = useDispatch();
  const profesionales = useSelector((state) => state.profesionales);

  useEffect(() => {
    dispatch(getProfesionales());
  }, [dispatch]);


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

  const toggleHabitacionesMenu = () => {
    setHabitacionesMenuOpen(!habitacionesMenuOpen);
  };

  const toggleProcedimientosMenu = () => {
    setProcedimientosMenuOpen(!procedimientosMenuOpen);
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
                    <a href="">Pacientes</a>
                  </li>
                  <li>
                    <a href="">Crear Paciente</a>
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
                    <a href="">Habitaciones</a>
                  </li>
                  <li>
                    <a href="">Crear Habitación</a>
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
                    <a href="">Procedimientos</a>
                  </li>
                  <li>
                    <a href="">Crear Procedimiento</a>
                  </li>
                
                </ul>
              ) : null}
            </div>
          </section>
        </section>

        <section className="espacio">
       
          

          {verCirujanos && (
            <ul>
              {profesionales.map((profesional) => (
                <li key={profesional._id}>
                  {profesional.name} {profesional.lastName}
                  <button onClick={() => handleEliminarCirujano(profesional._id)}>Eliminar</button>

                   
                  <button onClick={() => handleActualizarCirujano(profesional._id)}>Actualizar</button>
                </li>
              ))}
            </ul>
          )}
           {mostrarFormulario && (
          <>
          <h2>Crear Cirujano</h2>
          <CrearMedico />
          </>
          )
        }
          {actualizarMedicoVisible ? (
            <ActualizarCirujano id={cirujanoId} />
          ) : (
            <p>Formulario not found</p>
          )}


          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que también ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenían pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
        </section>
      </div>
    </div>
  );
}
