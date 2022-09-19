import React from 'react'
import Titulo from '../Titulo';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Tienda = () => {
    return (
        <div className='container'>
            <Titulo valor='Celulares:' />
            <ItemDetailContainer />
            <hr />
        </div>
    )
}

export default Tienda