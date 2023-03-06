import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";


export const DecisionHigherAcuityScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Your patient has (a) vital sign(s) in the danger zone. 
                Do you want to increase your patient's acuity Score to 2?
            </TextBox >
    
           
            <Input decision="AcuityScreenTwo" test="test">
                Yes
            </Input>
                
            <Input decision="AcuityScreenThree">
                No
            </Input>
            
      </div>
    );



}