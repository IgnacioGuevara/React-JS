import React from "react";
import { Component } from "react";

class Titulo extends Component{
    render(){
        return(
            <h2>{this.props.valor}</h2>

        )
    }
}
export default Titulo;