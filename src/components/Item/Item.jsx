import React from 'react'
import './Item.css'
import ImgIphone from '../../assets/iphone.png'

const Item = () => {
    return (
        <div>
            <a className='celular' href='/'>
                <img src={ImgIphone} alt='celular iphone' className='imgCelular'/>
                <p>Iphone</p>
            </a>
        </div>
    )
}

export default Item;