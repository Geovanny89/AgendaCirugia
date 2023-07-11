import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putProcedimientos } from "../../../redux/action";
import './actualizarProcedimiento.css'

export default function ActualizarProcedimiento({ id }) {
    const dispatch = useDispatch();
    const [procedimientoData, setProcedimientoData] = useState({
        name: '',
        // Agrega aquí los demás campos de la habitación que deseas actualizar
    });
    const handleInputChange = (event) => {
        setProcedimientoData({
            ...procedimientoData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(putProcedimientos(id, procedimientoData)); // Utiliza putHabitacion en lugar de putHabitaciones


    };


    return (
        <div>
            <form className="form-procedi" onSubmit={handleSubmit}>
                <div className="proce-name"> 
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre Procedimiento"
                        value={procedimientoData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="proce-boton">
                    <button type="submit">Actualizar</button>
                    <a className="bt-actualizar" href="/">Volver</a>

                </div>
            </form>
        </div>
    )
}
