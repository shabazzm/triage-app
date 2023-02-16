import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";

export const HighRiskScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Is your patient experiencing a high risk situation?<br></br>
                                    OR
                Confused/Lethargic/Disoriented<br></br>
                                    OR 
                Severe pain/distress

            </TextBox >
    
           
            <Input decision="/AcuityScreenTwo">
                Yes
            </Input>

            <Input decision="/ResourceScreen">
               No
            </Input>

            
            
      </div>
    );



}