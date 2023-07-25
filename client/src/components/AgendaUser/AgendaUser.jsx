import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getPacientes, logout } from "../../redux/action";
import "react-calendar/dist/Calendar.css";
import logo from "../../assets/logo1.png";
import Card from "../Card/Card";
import ReactCalendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "./agendaUser.css";

export default function AgendaUser() {
  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();
  const allPacientes = useSelector((state) => state.pacientes);
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(getPacientes());
  }, [dispatch]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showHeader, setShowHeader] = useState(true);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };
  const handleLogout = () => {
    // Llamar a la acción logout para cerrar sesión
    dispatch(logout());
    // Redireccionar al inicio de sesión o a la página de landing después de cerrar sesión
    // (ajusta el "to" en navigate según sea necesario)
    navigate("/"); // Utiliza la función navigate para redireccionar
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setShowHeader((prevShowHeader) => !prevShowHeader);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Filtrar las cirugías por la fecha seleccionada
  const filteredPacientes = allPacientes.filter((el) => {
    const elDate = new Date(el.year, el.month - 1, el.day);
    return elDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div>
      <div className="vist-img">
        <img src={logo} alt="Img Not Found" />
      </div>
      <div className="containe-padre">
        <div className="calen">
          <div className="calendar-container">
            <ReactCalendar
              onChange={handleDateChange}
              value={selectedDate}
              className="calendar"
              calendarType="US"
            />

          </div>
        </div>
        <h1>Agenda</h1>
        <div className="logout">
        <button onClick={handleLogout}>Cerrar Sesion</button>

        </div>

      </div>
      <hr />
      <div className="vista-card">

        {filteredPacientes.length > 0 ? (
          // Mostrar las tarjetas filtradas ordenadas por hora
          filteredPacientes
            .sort((a, b) => {
              // Ordenar por hora y minuto
              const timeA = parseInt(a.hour) * 60 + parseInt(a.minute);
              const timeB = parseInt(b.hour) * 60 + parseInt(b.minute);
              return timeA - timeB;
            })
            .map((el) => (
              <Card
                key={el.id}
                name={el.name}
                lastName={el.lastName}
                cirujanoId={el.cirujano ? el.cirujano.name + " " + el.cirujano.lastName : "Cirujano no disponible"}
                procedimientId={el.procedimiento ? el.procedimiento.name : "Procedimiento no disponible"}
                salaId={el.sala ? el.sala.name : "Sala no disponible"}
                habitacionId={el.habitacion ? el.habitacion.name : "Habitación no disponible"}

                day={el.day}
                month={el.month}
                year={el.year}
                hour={el.hour}
                minute={el.minute}
                estado={el.estado}
              />
            ))
        ) : (
          // Mostrar mensaje si no hay cirugías para el día seleccionado
          <p>No hay cirugías programadas para este día.</p>
        )}

        <hr />
      </div>
    </div>
  );
}
