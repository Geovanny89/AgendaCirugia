import React from "react";
import './paginado.css'

export default function Paginado({pacientPorPage,pacientes,paginado}){
    const pageNumbers= []

    for(let i= 0; i<=Math.ceil(pacientes/pacientPorPage)-1;i++){
        pageNumbers.push(i+1)
    }
    return(
        <nav className="barra">
            <ul>
                {pageNumbers && 
                pageNumbers.map(number =>(
                    <li className="number" key={number}>
                        <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}