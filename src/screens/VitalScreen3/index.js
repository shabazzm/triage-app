import React from "react";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import Input from "../../components/Input";
import BackBtn from "../../components/BackBtn";
import NextBtn from "../../components/NextBtn";
export const VitalScreen3=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Enter the Vital Signs for your patient
            </TextBox >
    
             Is the Heart rate for your patient  more than 140 beats per minute
             <br></br>
             <br></br>
             <Input decision="/DecisionHigherAcuityScreen" test="test">
                Yes
            </Input>
            
            <br></br>
            <br></br>

            Is the Respiratory rate for your patient more than 30 breaths per minute
            <br></br>
            <br></br>
            <Input decision="/DecisionHigherAcuityScreen" test="test">
                Yes
            </Input>
           
            <br></br>
            <br></br>

            Is the SAO2% less than 92%
            <br></br>
            <br></br>
            <Input decision="/DecisionHigherAcuityScreen" test="test">
                Yes
            </Input>
            <br></br>
            <br></br>
            <BackBtn decision='/AgeScreen'>Back</BackBtn>
            <br></br>
            <br></br>
           <NextBtn decision='/AcuityScreenThree'>Next</NextBtn>
            
            
            
      </div>
    );



}