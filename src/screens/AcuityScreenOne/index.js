import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import Input from "../../components/Input";

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
            <br></br>
            <br></br>
            <Input decision="StartScreen">
                Start Over
            </Input>
            
                
            
      </div>
    );



}
