import { Component } from "react";


class Footer extends Component{
    render(){
        return(
            <div >
                            
                <div className=" fondoFooter" >
                    <div className="container">
                        <nav className="row">

                            <a href="../public/index.html" className="col-4 text-reset text-uppercase-d-flex-aligitems-center ">
                                <img src="./img/dropGlassLogo.jpg" alt="" className="img-logo mr-2 logoFooter" />
                            </a>

                            <ul className="col-5 list-unstyled">
                                <li className="font-wight-bold text-uppercase redesSecciones " > Secciones
                                </li>
                                <li className="linkFooter"><a href="../public/index.html" className="text-reset HomeTiendaContacto "> Inicio </a></li>
                                <li className="linkFooter"><a href="../public/index.html" className="text-reset HomeTiendaContacto"> Tienda </a></li>
                                <li className="linkFooter"><a href="../public/index.html" className="text-reset HomeTiendaContacto"> Contactos </a></li>
                            </ul>

                            <ul className="col-3 list-unstyled">
                                <li className="font-wight-bold text-uppercase redesSecciones" > REDES
                                </li>
                                <li className="d-flex justify-content-between mt-3 linkFooter">
                                    <a href="https://www.instagram.com" className="text-reset">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://twitter.com/?lang=es" className="text-reset">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="https://web.whatsapp.com" className="text-reset">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                    <a href="https://www.facebook.com" className="text-reset">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>



            </div> 
            
            )
    }
}

export default Footer