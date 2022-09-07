//Crear una barra de menu simple, debe tener: Brand(titulo y nombre de la tienda), listado de categorias clicleables, boostrap.
import React from "react";
import "../NavBar/NavBar.css"
import CardWidget from "../Carrito/CartWidget";

const NavBar = () =>{
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white mt-2 ">
                <div className="container-fluid">
                    <a className="navbar-brand " href="../public/index.html">DROP <span className="colorGlass"> GLASS </span> </a>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" ria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <ul className="navbar-nav mx-auto seccioness">
                            <li className="nav-item">
                                <a className="nav-link  seccionHeader"  href="../public/index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link seccionHeader"  href="../public/index.html">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link seccionHeader"  href="../public/index.html">Contactos</a>
                            </li>
                            <CardWidget />
                        </ul>
                        
                    </div>
                    
                    <a className="navbar-brand iniciarSesion " href="../public/index.html">Iniciar <span className="Sesion"> Sesión </span> </a>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;