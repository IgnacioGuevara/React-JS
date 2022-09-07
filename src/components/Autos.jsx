import React from 'react'

const Autos = ( props ) => {
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

export default Autos