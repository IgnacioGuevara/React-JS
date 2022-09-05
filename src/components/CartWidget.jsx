import { Component } from "react";
import CarritoIMG from "../../src/assets/Carrito.png"

class Carrito  extends Component {
    render(){
        return(
            <div>
                <li className="nav-item">
                    <a className="nav-link seccionHeader"  href="../public/index.html">
                        <img className="CarritoImg" src={CarritoIMG} alt="" />
                    </a>
                </li>
            </div>
        )
    }
}


export default Carrito;