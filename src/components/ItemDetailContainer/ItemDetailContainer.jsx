import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemListContainer from '../ItemListContainer/ItemsListContainer'





const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const productos ={id: 1, nombre: "iphone", img: '../../assets/iphone.png', precio: 900, stock: 6,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta asperiores sunt rerum exercitationem numquam explicabo odit omnis laboriosam ut accusamus. At quibusdam veniam nulla officiis magni amet. Iste, ducimus perspiciatis.", modelo: 'iphone'}

            

        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(productos);
            },2000);
        });
        promesa.then((res) => {
            setData(res)
        })
    }, [])
    
    return (
        <div>
            <ItemListContainer />
            <br />
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;