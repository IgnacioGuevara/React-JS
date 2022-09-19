import React from 'react'
import '../ItemDetail/ItemDetail.css'
import samsungImg from '../../assets/samsung.png'



const ItemDetail = ({data}) => {
    return (
        <div className='container col-md-12'>
            <div className="card">
                <img src={samsungImg} className="card-img-top cardImg" alt={data.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title "><b>Modelo:</b> {data.nombre}</h5>
                        <p className="card-text "><b>Descripcion:</b> {data.description}</p>
                        <p className="card-text "> <b>Precio: </b> ${data.precio} USD</p>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail;