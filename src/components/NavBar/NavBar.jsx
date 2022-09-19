//Crear una barra de menu simple, debe tener: Brand(titulo y nombre de la tienda), listado de categorias clicleables, boostrap.
import React from "react";
import "../NavBar/NavBar.css"
import CardWidget from "../Carrito/CartWidget";
import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white mt-2 ">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/Inicio">DROP <span className="colorGlass"> GLASS </span> </a>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" ria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav mx-auto seccioness">
                            <li className="nav-item">
                                <NavLink className="nav-link  seccionHeader"  to="/Inicio">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link seccionHeader"  to="/Tienda">Tienda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link seccionHeader"  to="/Contacto">Contactos</NavLink>
                            </li>
                            <CardWidget />
                        </ul>
                        
                    </div>
                    
                    <a className="navbar-brand iniciarSesion " href="/Inicio">Iniciar <span className="Sesion"> Sesión </span> </a>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;