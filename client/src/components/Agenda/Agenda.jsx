
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getPacientes } from "../../redux/action";
import "react-calendar/dist/Calendar.css";
import logo from "../../assets/logoperfect.png";
import Card from "../Card/Card";
import ReactCalendar from "react-calendar";
import "./agenda.css";

export default function Agenda() {
  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();
  const allPacientes = useSelector((state) => state.pacientes);

  useEffect(() => {
    dispatch(getPacientes());
  }, [dispatch]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showHeader, setShowHeader] = useState(true);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
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
        <h1>Agenda del día</h1>

        <a href="/">Volver</a>
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
                cirujanoId={el.cirujano.name + " " + el.cirujano.lastName}
                procedimientId={el.procedimiento.name}
                salaId={el.sala.name}
                habitacionId={el.habitacion.name}
                day={el.day}
                month={el.month}
                year={el.year}
                hour={el.hour}
                minute={el.minute}
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
