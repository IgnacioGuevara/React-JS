import React, {useState} from "react";
import '../ItemCount/ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) =>{

    const [Contador, setContador] =  useState (initial)
    const [btnDetalle, setBtnDetalle] =  useState (onAdd) 

    const suma = () =>{
        setContador(Contador + 1);
    }
    const resta = () =>{ 
        setContador(Contador - 1);
    }
    const addDetalle = () => {
        setBtnDetalle(console.log(`se ha agregado ${ Contador } producto/s al carrito`));
        alert(`se ha agregado ${ Contador } producto/s al carrito`)
    }


    return(
        <div className=" contador">
            <button disabled =  {Contador <= 1 }onClick={resta} className='btnSuma'>-</button>
            <span className="btnContador">{Contador}</span>
            <button disabled ={Contador >= stock} onClick={suma}className='btnResta'>+</button>
            <div>
                <button className="btnAddCarrito" disabled={btnDetalle} onClick={addDetalle}> Detalles del producto </button>
            </div>
        </div>
    )
}

export default ItemCount;