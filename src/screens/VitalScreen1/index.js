import React from "react";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import Input from "../../components/Input";
export const VitalScreen1=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Enter the Vital Signs for your patient
            </TextBox >
    
             Is the Heart rate for your patient  more than 180 beats per minute
             <br></br>
             <Input decision="AcuityScreenOne" test="test">
                Yes
            </Input>
            <Input decision="/AcuityScreenThree" test="test">
                No
            </Input>
            <br></br>
            Is the Respiratory rate for your patient more than 50 breaths per minute
            <br></br>
            <Input decision="AcuityScreenOne" test="test">
                Yes
            </Input>
            
            <Input decision="/AcuityScreenThree" test="test">
                No
            </Input>
            <br></br>
            Is the SAO2% less than 92%
            <br></br>
            <Input decision="AcuityScreenOne" test="test">
                Yes
            </Input>
            <Input decision="/AcuityScreenThree" test="test">
                No
            </Input>
            
            
      </div>
    );



}