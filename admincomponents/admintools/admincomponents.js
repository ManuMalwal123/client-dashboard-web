import React from 'react'
import { MainContainer , InnerContainer , SideImage,InputFieldsContainer,SpanError,InputEmail,ImageContainer,InputPassword,CheckBox ,DivCheckbox,H6,
   SubmitButton ,InputsContainer,H5,H3,Form,FromDiv} from './Styled/admin.styled'
import { useState } from "react";
import validator from 'validator'
import Link from 'next/link';

function Admincomponents() {
  const [emailError, setEmailError] = useState('')
  const [passwordError , setPasswordError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email....')
    } else if(email.length == 0) {
      setEmailError('')  
    }
    else{
      setEmailError('Enter valid Email!')
    }
  }

  const validatePassword = (e) => {
    var password = e.target.value

     if(password.length <6) {
      setPasswordError('Password not less than 6 characters')
    }else if(password.length==0) {
      setPasswordError('')
    }else{
      setPasswordError('Valid Password!')
    }
  }
  
  return (
    <>
    <MainContainer>
        <InnerContainer>
          <ImageContainer>
          <SideImage src = "/webhoperslogo.png"/>
          </ImageContainer>
          <InputFieldsContainer>
          <InputsContainer>
          <H3>Sign In</H3>
          <H5>Enter Your Details to Sign in</H5><br/>
          <FromDiv>
            <Form>
          <InputEmail onChange={(e) => validateEmail(e)}/><br/>
          <SpanError>{emailError}</SpanError>
          <InputPassword onChange={(e) => validatePassword(e)}/><br/>
          <SpanError>{passwordError}</SpanError>
          <DivCheckbox>
          <CheckBox/><H6> Remember me</H6>
          </DivCheckbox>
          <Link href={"/admin/dasboard"}><SubmitButton/></Link>
          </Form>
          </FromDiv>
          </InputsContainer>
          </InputFieldsContainer>
        </InnerContainer>
    </MainContainer>
    </>
  )
}

export default Admincomponents