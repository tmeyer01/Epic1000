import React from "react";
import {
  RegisterContainer,
  RegisterFormWrapper,
  RegisterFormH1,
  RegisterFormP,
  InputName,
  InputEmail,
  SentButton,
  RegisterSubmitWriteUp,
  RegisterSubP

} from "./RegisterElements";

function Register() {
  return (
    <>
      <RegisterContainer>
        <RegisterFormWrapper>
         
          <RegisterFormH1>Feeling like taking on the Epic in 2022!?</RegisterFormH1>
          <RegisterFormP>  Add you name to the starter
          list..</RegisterFormP>
          <InputName type="text" name="from_name" placeholder="Name" />
          <InputEmail type="text" name="reply_to" placeholder="Email" />
          <SentButton>Im in!</SentButton>
        </RegisterFormWrapper>

        <RegisterSubmitWriteUp>
          <RegisterSubP>

        Once submitted, you will get an email the same or within the next bussiness day to get some more info and confirm your intention to ride. 
          </RegisterSubP>
          <RegisterSubP>
          PLEASE CHECK YOUR SPAM FOLDER IF YOU DID NOT RECEIVE A CONFIRMATION EMAIL WITHIN 48 HOURS.  
          </RegisterSubP>
          <RegisterSubP>
          Once replied your name will be added to the challenger list below.
          </RegisterSubP>
        </RegisterSubmitWriteUp>


      </RegisterContainer>
    </>
  );
}

export default Register;
