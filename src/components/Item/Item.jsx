import React from 'react'
import './Item.css'
import samsungImg from '../../assets/samsung.png'
import ItemCount from '../ItemCount/ItemCount'



const Item = (item) => {
    return (
        <div className='container col-md-12 col-sm-12 col-lg-4'>
            <div className="card">
                <img src={samsungImg} className="card-img-top cardImg" alt={item.img}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.nombre}</h5>
                        <p className="card-text text-center">precio: ${item.precio} USD</p>
                        <p className="card-text text-center">stock: {item.stock}</p>
                        <ItemCount initial={1} stock={item.stock} onAdd={0}/>
                    </div>
            </div>
        </div>
    )
}

export default Item;