import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPacientes } from '../../redux/action';
import 'react-calendar/dist/Calendar.css';
import logo from '../../assets/logoperfect.png'
import Card from '../Card/Card';

export default function Agenda() {
    useEffect(() => {
        AOS.init();
    }, [])
    const dispatch = useDispatch();
    const allPacientes = useSelector((state) => state.pacientes)


    useEffect(() => {
        dispatch(getPacientes());
    }, [dispatch])
    const [date, setDate] = useState(new Date());
    const [showHeader, setShowHeader] = useState(true);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setShowHeader((prevShowHeader) => !prevShowHeader);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div >
           
            <div className='vist-img'>
                <img src={logo} alt="Img Not Found" />
            </div>

            <div className='header-container'>
                {showHeader && <h1>Agenda Cx</h1>}
            </div>
            <hr />
            {
                allPacientes && allPacientes.map(el => (

                    <Card key={el.id} name={el.name} lastName={el.lastName} cirujanoId={el.cirujano.name + " " + el.cirujano.lastName} procedimientId={el.procedimiento.name} salaId={el.sala.name} habitacionId={el.habitacion.name} day={el.day} month={el.month} year={el.year} hour={el.hour} minute={el.minute} />

                ))

            }
            <hr />
        </div>
    )
}
