import React from 'react'
import ItemCount from './ItemCount/ItemCount'


const ItemsListContainer = () => {

    const onAdd = (valor) => {
        console.log (`compraste ${valor} unidades`)
    }

    return (
        <div>
            <ItemCount initial={1} stock={5} onAdd ={onAdd} />
        </div>
    )
}

export default ItemsListContainer;