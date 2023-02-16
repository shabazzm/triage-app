import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";

export const StartScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Does your patient require life saving intervention?
            </TextBox >
    
           
            <Input decision="AcuityScreenOne" test="test">
                Yes
            </Input>
                
            <Input decision="HighRiskScreen">
                No
            </Input>
      </div>
    );



}