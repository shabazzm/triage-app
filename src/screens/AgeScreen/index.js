import React from "react";
import TextBox from "../../components/TextBox";
import Input from "../../components/Input";
import DecoratorDiv  from "../../components/DecoratorDiv";
import BackBtn from "../../components/BackBtn";

export const AgeScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                What age is your patient?
                (Estimate age if unsure)
            </TextBox >
    
           
            <Input decision="/VitalScreen1" age="1">
                Less than 3 Months
            </Input>
            <br></br>
            <br></br>

            <Input decision="/VitalScreen2" age="2">
                3 Months - 3 Years
            </Input>
            <br></br>
            <br></br>

            <Input decision="/VitalScreen3" age="3">
                3 - 8 Years
            </Input>
            <br></br>
            <br></br>
 
            <Input decision="/VitalScreen4" age="4">
                More than 8 Years
            </Input>
            <br></br>
            <br></br>
            <BackBtn decision='/ResourceScreen'>Back</BackBtn>
            
            
      </div>
    );



}