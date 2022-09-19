import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'



const ItemsListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos =[
                {'id': 1, 'nombre': "iphone", 'img': '../../assets/iphone.png', 'precio': 900, 'stock': 6,},
                {'id': 2, 'nombre': "samsung", 'img': '../../assets/iphone.png', 'precio': 800,'stock': 3,},
                {'id': 3, 'nombre': "xiaomi", 'img': '../../assets/iphone.png', 'precio': 600, 'stock': 2, },
            ];

        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(productos);
            },3000);
        });
        promesa.then((res) => {
            setItems(res)
        })
    }, [])


        return (
            <div className='container'>
                <ItemList items ={items} />
            </div>
        )
    }

export default ItemsListContainer;