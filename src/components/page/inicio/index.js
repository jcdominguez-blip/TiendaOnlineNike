import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
