import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";

export const AcuityScreenOne=(props)=>{
    const location = useLocation()
    //location.state.age
    useEffect(() => {
        console.log(location)
    })
    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Your Patient's Acuity is 
                1
                {props.location}
            </TextBox>
                
            
      </div>
    );



}
