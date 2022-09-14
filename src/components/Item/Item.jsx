import React from 'react'
import './Item.css'
import ImgIphone from '../../assets/iphone.png'
import ImgSamsung from '../../assets/samsung.png'
import ImgXiaomi from '../../assets/xiaomi.png'

const Item = () => {
    return (
        <div className='container'>
            <a className='celular' href='/'>
                <img src={ImgIphone} alt='celular iphone' className='imgCelular'/>
                <p>Iphone</p>
            </a>
            <a className='celular' href='/'>
                <img src={ImgSamsung} alt='celular iphone' className='imgCelular'/>
                <p>samsung</p>
            </a>
            <a className='celular' href='/'>
                <img src={ImgXiaomi} alt='celular iphone' className='imgCelular'/>
                <p>xiaomi</p>
            </a>
        </div>
    )
}

export default Item;