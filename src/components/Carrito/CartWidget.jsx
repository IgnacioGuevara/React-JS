import { Component } from "react";
import CarritoIMG from "../../assets/Carrito.png"
import '../Carrito/Carrito.css'

class Carrito  extends Component {
    render(){
        return(
            <div>
                <li className="nav-item">
                    <a className="nav-link seccionHeader"  href="/Carrito">
                        <img className="CarritoImg" src={CarritoIMG} alt="" />
                    </a>
                </li>
            </div>
        )
    }
}


export default Carrito;