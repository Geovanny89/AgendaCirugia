import React, { useState } from 'react';
import Nabvar from '../Nabvar/Nabvar'

// import Calendar from 'react-calendar';

import './home.css'
import CrearMedico from '../Crear/Medicos/CrearMedico';


export default function Home() {
  const [cirujanosMenuOpen, setCirujanosMenuOpen] = useState(false);
  const [pacientesMenuOpen, setPacientesMenuOpen] = useState(false);
  const [habitacionesMenuOpen, setHabitacionesMenuOpen] = useState(false);
  const [procedimientosMenuOpen, setProcedimientosMenuOpen] = useState(false);
  const [crearCirujanoVisible, setCrearCirujanoVisible] = useState(false);

  const toggleCrearCirujano = () => {
    setCrearCirujanoVisible(!crearCirujanoVisible);
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
    <div className='navegacion' >
      <Nabvar />
      <hr />
      <div className='vista-section'>
        <section className='opciones'>
          {/* <hr /> */}
          {/* <section className='calendario-container'>
            <div>
     
              <Calendar />
            </div>
          </section> */}
          <section className='menu'>
          
            <div onClick={toggleCirujanosMenu}>
              
              <p>Cirujanos</p>
              {cirujanosMenuOpen ? (
                <ul>
                  <li><a href="" >Cirujanos</a></li>
                  <li><a href="#cirujano" onClick={toggleCrearCirujano}>Crear cirujano</a></li>
                  <li> <a href="" >Actualizar cirujano</a></li>
                  <li> <a href="" >Eliminar cirujano</a></li>
                </ul>
              ) : null}
            </div>
          </section>
          <hr />
          <section className='menu'>
            <div onClick={togglePacientesMenu}>
              <p>Pacientes</p>
              {pacientesMenuOpen ? (
                <ul>
                  <li><a href="" >Pacientes</a></li>
                  <li><a href="" >Crear Paciente</a></li>
                  <li><a href="" >Actualizar Paciente</a></li>
                  <li><a href="" >Eliminar Paciente</a></li>
                </ul>
              ) : null}
            </div>
          </section>
          <hr />
          <section className='menu'>
            <div onClick={toggleHabitacionesMenu}>
              <p>Habitaciones</p>
              {habitacionesMenuOpen ? (
                <ul>
                  <li><a href="" >Habitaciones</a></li>
                  <li><a href="" >Crear Habitación</a></li>
                  <li><a href="" >Actualizar Habitación</a></li>
                  <li><a href="" >Eliminar Habitación</a></li>
                </ul>
              ) : null}
            </div>
          </section>
          <hr />

          <section className='menu'>
            <div onClick={toggleProcedimientosMenu}>
              <p>Procedimiento</p>
              {procedimientosMenuOpen ? (
                <ul>
                  <li><a href="" >Procedimientos</a></li>
                  <li><a href="" >Crear Procedimiento</a></li>
                  <li><a href="" >Actualizar Procedimiento</a></li>
                  <li><a href="" >Eliminar Procedimiento</a></li>
                </ul>
              ) : null}
            </div>
          </section>

          {/* <hr /> */}
        </section>
        {/* <hr /> */}

        <section className='espacio'>
        {crearCirujanoVisible ? (
            <CrearMedico />
          ) : (
            <p>
              Formulario not fount
              {/* ... */}
            </p>
          )}
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </section>
      </div>

    </div>
  )
}


