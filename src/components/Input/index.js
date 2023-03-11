import { Button } from "@mui/material";
import React from "react";
import { InputBtn } from "./styles"
import { Link } from "react-router-dom";


//const propInputBtn=(props)=> <InputBtn to={props.decision} state={{age:props.age}}/>
const Input=(props)=>
{
    

    return(
        
       
        <Button style={{backgroundColor:"#4FC2A7"}}variant="contained" component={Link} to ={props.decision} state={{age:props.age}}>{props.children}</Button>
        
    );
}

export default Input;