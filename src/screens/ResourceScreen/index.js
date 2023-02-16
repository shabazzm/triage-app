import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";

export const ResourceScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                How many different resources are needed?

            </TextBox >
    
           
            <Input decision="/AgeScreen">
                Many
            </Input>

            <Input decision="/AcuityScreenFour">
               One
            </Input>

            <Input decision="/AcuityScreenFive">
               None
            </Input>

            
            
      </div>
    );



}