import React from "react";
import { InputBtn } from "./styles"


const Input=(props)=>
{
    

    return(
        <InputBtn to={props.decision} state={{age:props.age}}>
            {props.children}  
        </InputBtn>
        
        
    );
}

export default Input;