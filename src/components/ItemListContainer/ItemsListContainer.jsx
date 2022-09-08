import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import ImgIphone from '../assets/iphone.png'
import ImgSamsung from '../assets/samsung.png'
import ImgXiaomi from '../assets/xiaomi.png'


const productos =[
    {id: 1, nombre: "iphone", img: {ImgIphone}, precio: 900},
    {id: 2, nombre: "samsung", img: {ImgSamsung}, precio: 800},
    {id: 3, nombre: "xiaomi", img: {ImgXiaomi}, precio: 600}
]




const ItemsListContainer = () => {

    const onAdd = (valor) => {
        console.log (`compraste ${valor} unidades`)
    }

    return (
        <div>
            <ItemCount initial={1} stock={5} onAdd ={onAdd} />
            <ItemList />
        </div>
    )
}

export default ItemsListContainer;