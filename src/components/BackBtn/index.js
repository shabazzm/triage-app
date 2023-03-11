import { Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";



const BackBtn=(props)=>
{
    

    return(
        
       
        <Button style={{backgroundColor:"#D9D9D9"}} variant="contained" component={Link} to ={props.decision} state={{age:props.age}}>Back</Button>
        
    );
}

export default BackBtn;