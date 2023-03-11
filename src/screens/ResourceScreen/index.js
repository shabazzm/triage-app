import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";
import BackBtn from "../../components/BackBtn";

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
            <br></br>
            <br></br>

            <Input decision="/AcuityScreenFour">
               One
            </Input>
            <br></br>
            <br></br>

            <Input decision="/AcuityScreenFive">
               None
            </Input>

            <br></br>
            <br></br>
            <BackBtn decision='/HighRiskScreen'>Back</BackBtn>

            
            
      </div>
    );



}