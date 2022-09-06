import React, {useState} from "react";




const ItemCount = () =>{

    const [count, setCount] =  useState (1)

    const suma = () =>{
        setCount(count + 1);
    }
    const resta = () =>{
        setCount(count - 1);
    }


    return(
        <div className=" contador">
            <h3>Contador</h3>
            <button disabled ={count >=5}  onClick={suma}>+</button>
            <span>{count}</span>
            <button disabled ={count <= 1 } onClick={resta}>-</button>
            <div>
                <button> Agregar al carrito</button>
            </div>



        </div>
    )
}




export default ItemCount;