import React, {useState} from "react";
import '../ItemCount/ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) =>{

    const [Contador, setContador] =  useState (1) /* Initial */

    const suma = () =>{
        setContador(Contador + 1);
    }
    const resta = () =>{
        setContador(Contador - 1);
    }


    return(
        <div className=" contador">
            <h3>Contador</h3>
            <button disabled =  {Contador <= 1 }onClick={resta} className='btnSuma'>-</button>
            <span className="btnContador">{Contador}</span>
            <button disabled ={Contador >= 5} onClick={suma}className='btnResta'>+</button>{/* --> Stock */}
            <div>
                <button className="btnAddCarrito" /* disabled={stock <= 0 } onClick={() => onAdd(Contador)} */> Agregar al carrito</button>{/* --> onAdd & stock*/}
            </div>
        </div>
    )
}

export default ItemCount;