import React from 'react'

const Celulares = ( props ) => {
    const {Items} = props

    return ( 
        <div>

        {
        Items.map((producto) =>{
            return <li>{producto}</li>
        })
        }

        </div>
    )
}

export default Celulares