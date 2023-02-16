import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";

export const AgeScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                What age is your patient?
                (Estimate age if unsure)
            </TextBox >
    
           
            <Input decision="/HighRiskScreen" age="1">
                Less than 3 Months
            </Input>

            <Input decision="/HighRiskScreen" age="2">
                3 Months - 3 Years
            </Input>

            <Input decision="/HighRiskScreen" age="3">
                3 - 8 Years
            </Input>
 
            <Input decision="/HighRiskScreen" age="4">
                More than 8 Years
            </Input>
            
            
      </div>
    );



}