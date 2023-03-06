import React from "react";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import Input from "../../components/Input";

export const AcuityScreenTwo=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Your Patient's Acuity is 
                2
            </TextBox>
            <br></br>
            <br></br>
            <Input decision="StartScreen">
                Start Over
            </Input>
                
            
      </div>
    );



}
