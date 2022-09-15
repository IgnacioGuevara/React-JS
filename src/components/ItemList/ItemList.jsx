import React from 'react'
import '../ItemList/ItemList.css'
import Item from '../Item/Item.jsx'

const ItemList = ({items}) => {
    return (
        <div className='row '>
            {items.map(item => <Item key={item.id} nombre={item.nombre} img={item.img} precio={item.precio} stock={item.stock}/> )}
        </div>


    )
}

export default ItemList;