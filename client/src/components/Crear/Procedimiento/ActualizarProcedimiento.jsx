import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putProcedimientos } from "../../../redux/action";

export default function ActualizarProcedimiento({id}) {
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={procedimientoData.name}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Agrega aquí los demás campos de la habitación que deseas actualizar */}
                <button type="submit">Actualizar</button>
                <a href="/">Volver</a>
            </form>
        </div>
    )
}
