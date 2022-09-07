import React, {useState} from "react";
import '../ItemCount/ItemCount.css'





const ItemCount = () =>{

    const [Contador, setContador] =  useState (1)

    const suma = () =>{
        setContador(Contador + 1);
    }
    const resta = () =>{
        setContador(Contador - 1);
    }


    return(
        <div className=" contador">
            <h3>Contador</h3>
            <button disabled ={Contador >=5}  onClick={suma} className='btnSuma'>+</button>
            <span className="btnContador">{Contador}</span>
            <button disabled ={Contador <= 1 } onClick={resta}className='btnResta'>-</button>
            <div>
                <button className="btnAddCarrito"> Agregar al carrito</button>
            </div>



        </div>
    )
}




export default ItemCount;