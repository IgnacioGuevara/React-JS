import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemsListContainer = () => {
    const [items, setItems] = useState([]);

    const {modeloId} = useParams();



    useEffect(() => {
        const productos =[
                {id: 1, nombre: "iphone", img: '../../assets/iphone.png', precio: 900, stock: 6, modelo: 'iphone'},
                {id: 2, nombre: "samsung", img: '../../assets/iphone.png', precio: 800,stock: 3, modelo: 'Xiaomi'},
                {id: 3, nombre: "xiaomi", img: '../../assets/iphone.png', 'precio': 600, 'stock': 2, modelo: 'samsung'},
            ];

        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });

        if (modeloId) {
            promesa.then(res => res.filter(productos.modelo === modeloId))
        }else {
            promesa.then(res => {setItems(res)})
        }
        promesa.then(res => res.filter(productos.modelo === modeloId))
    }, [modeloId])


        return (
            <div className='container'>
                <ItemList items ={items} />
            </div>
        )
    }

export default ItemsListContainer;