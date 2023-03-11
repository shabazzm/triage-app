import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";


export const DecisionHigherAcuityScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                A vital sign is in the danger zone.
                <br></br>
                Increase acuity Score to 2?
            </TextBox >
    
           
            <Input decision="/AcuityScreenTwo" test="test">
                Yes
            </Input>
            <br></br>
            <br></br>
            <Input decision="/AcuityScreenThree">
                No
            </Input>
            
      </div>
    );



}