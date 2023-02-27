import React from "react";
import TextBox from "../../components/TextBox";
import DecoratorDiv  from "../../components/DecoratorDiv";
import { TextField } from "@mui/material";
export const VitalScreen=()=>{

    return(

        <div>
            <DecoratorDiv />
            <TextBox>
                Enter the Vital Signs for your patient
            </TextBox >
    
            HR: <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-400]*' }} />
            <br/>
            RR:  <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-100]*' }} />
            <br/>
            SaO2%:<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-100]*' }} />

            
            
      </div>
    );



}