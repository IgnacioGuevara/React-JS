import React from "react";
import { Component } from "react";

    class Input extends Component{

    render(){
        return(
            <div>
                <input type='text' placeholder={this.props.valor} />
            </div>
        )
    }
}

export default Input;