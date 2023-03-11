import React from "react";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import Input from "../../components/Input";

export const AcuityScreenThree=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Your Patient's Acuity is 
                3
            </TextBox>
            <br></br>
            <br></br>
            <Input decision="/">
                Start Over
            </Input>
                
            
      </div>
    );



}
