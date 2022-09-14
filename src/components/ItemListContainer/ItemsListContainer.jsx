import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import ImgIphone from '../assets/iphone.png'
import ImgSamsung from '../assets/samsung.png'
import ImgXiaomi from '../assets/xiaomi.png'



const productos =[
    {'id': 1, 'nombre': "iphone", 'img': {ImgIphone}, 'precio': 900, 'stock': 5,},
    {'id': 2, 'nombre': "samsung", 'img': {ImgSamsung}, 'precio': 800,'stock': 5,},
    {'id': 3, 'nombre': "xiaomi", 'img': {ImgXiaomi}, 'precio': 600, stock: 5, },
];



const ItemsListContainer = () => {

const [items, setItems] = useState([]);
useEffect(() => {
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
        <div>
            <ItemCount  />
            <ItemList items ={items} />
        </div>
    )
}

export default ItemsListContainer;