import React from "react";
import { TextBoxDiv } from "./styles";

const TextBox=(props)=>
{
    return(
        <TextBoxDiv>
           
            {props.children}
            
        </TextBoxDiv>

       );
}

export default TextBox;