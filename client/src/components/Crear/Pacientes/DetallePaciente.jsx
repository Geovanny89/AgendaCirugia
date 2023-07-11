import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../../redux/action";
import './detail.css'

const DetallePaciente = ({ pacienteId }) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
console.log(detail)
  useEffect(() => {
    dispatch(getDetail(pacienteId));
  }, [dispatch, pacienteId]);

  if (!detail) {
    return <div>Cargando detalle del paciente...</div>;
  }

  return (
    <div className="card-detalle-paciente">
      <div className="detail-paciente">
      <h2>Detalle del paciente</h2>
      <a href=""> x </a>
      </div>
      {detail ? (
      <>
      <div className="detalle-nombre">
        <span>Nombre: {detail.name} </span>
        
        <span>Apellido: {detail.lastName} </span>
        <span>Identificación: {detail.id}</span>
         
      </div>
      <div className="detalle-paciente-id">
        <p>Cirujano: {detail.cirujano}</p>
        <p>Procedimiento: {detail.procedimiento}</p>
        <p>Habitación: {detail.habitacion?.name}</p>

      </div>
      <div className="detalle-paciente-proce">
        <p>Sala: {detail.sala?.name}</p>
        <p>Día: {detail.day}</p>
        <p>Mes: {detail.month}</p>
        <p>Año: {detail.year}</p>

      </div>
      

      
      </>
    ) : (
      <div>Cargando detalle del paciente...</div>
    )}
    
    </div>
  );
};

export default DetallePaciente;
