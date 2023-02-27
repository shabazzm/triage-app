import { Button } from "@mui/material";
import React from "react";
import { Back} from "./styles"
import { Link } from "react-router-dom";


const propBackBtn=(props)=> <BackBtn to={props.decision} />
const BackBtn=(props)=>
{
    

    return(
        
       
        <Button variant="contained" component={Link} to ={props.decision} state={{age:props.age}}>Back</Button>
        
    );
}

export default BackBtn;