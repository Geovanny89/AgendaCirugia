import React from 'react'
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { getPacientesName } from '../../redux/action';
import './searchBar.css'

export default function SearchBar() {
    const dispatch= useDispatch();
    const [name,setName]= useState("")


    function handleInputChange(e) {
        e.preventDefault()
            setName(e.target.value);
            dispatch(getPacientesName(name));
    }
        
  return (
    <div className='buscar'>
        <div className='buscar'>
       <input type='text' placeholder="Buscar" aria-label="Search" onChange={(e)=>handleInputChange(e)} />
    </div>
    </div>
  )
}
