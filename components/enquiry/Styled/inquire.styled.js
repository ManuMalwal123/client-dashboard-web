import styled from "styled-components";
import theme from "../../../themes/default";

export const EnquiryContainer = styled.div`
display: flex;
justify-content: center;
`

export const Box = styled.div`
  background-image: url(/bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 4% 0px 4% 0px;
  padding: 0 1em 6em 1em;
  background-color: #62626202;
`
export const Enquire = styled.div`
  margin-top: 35px;
  margin-left: 9%;
`
export const Row = styled.div.attrs(()=>({
    className : "row m-0 p-0"
}))``

export const Col = styled.div.attrs(()=>({
    className : "col-12 col-lg-7"
}))`

`

export const Heading = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;
  line-height: 35px;
  font-weight: 100;
  letter-spacing: 0px;
`
export const HeadingSpan = styled.span`
  color: #ca1c13;
  font-weight: bold;
`
export const Para = styled.p`
  text-align: justify;
  color: #000;
  margin: 0 0 15px;
  font-size: 14px;
  line-height: 22px;
`
export const Ul = styled.ul.attrs(()=>({
    className : "ul"
}))``

export const Enquireli = styled.li`
  color: #737e86;
  font-size: 14px;
  line-height: 35px;
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-12 col-lg-5 justify-content-center"
}))``

export const Sidebar = styled.div` 
  margin-top: 9%;
  width: 80%;
  height: 370px;
  background: #00000057;
  padding: 24px 0px 2px 15px;
`

export const Form = styled.form .attrs(()=>({
    className : "form"
}))``

export const H5 = styled.h5`
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.textcolor};
`
export const Name = styled.input.attrs({
  type : "text",
  name : "name",
  placeholder : "Your Name"
})`
  width: 90%;
  height: 36px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  color: #626262;
  background-color: rgba(255, 255, 255, 1);
  border-color: #ebebeb;
  margin: 4px;
  font-size: 12px;
  outline: none;
`
export const Email = styled.input.attrs({
    type : "text",
    name : "email",
    placeholder : "Email"
  })`
    width: 90%;
    height: 36px;
    padding-left: 10px;
    font-family:${theme.font.defaultfont};
    color: #626262;
    background-color: rgba(255, 255, 255, 1);
    border-color: #ebebeb;
    margin: 4px;
    font-size: 12px;
    outline: none;
  `
  export const Phone = styled.input.attrs({
    type : "text",
    name : "number",
    placeholder : "Number"
  })`
    width: 90%;
    height: 36px;
    padding-left: 10px;
    font-family:${theme.font.defaultfont};
    color: #626262;
    background-color: rgba(255, 255, 255, 1);
    border-color: #ebebeb;
    margin: 4px;
    font-size: 12px;
    outline: none;
  `
  export const City = styled.input.attrs({
    type : "text",
    name : "City",
    placeholder : "City"
  })`
    width: 90%;
    height: 36px;
    padding-left: 10px;
    font-family: ${theme.font.defaultfont};
    color: #626262;
    background-color: rgba(255, 255, 255, 1);
    border-color: #ebebeb;
    margin: 4px;
    font-size: 12px;
    outline: none;
  `
  export const TextArea = styled.input.attrs({
    type : "textarea",
    name : "message",
    placeholder : "Message"
  })`
    width: 90%;
    height: 80px;
    padding-left: 10px;
    font-family: ${theme.font.defaultfont};
    color: #626262;
    background-color: rgba(255, 255, 255, 1);
    border-color: #ebebeb;
    margin: 4px;
    font-size: 12px;
    outline: none;
    padding-bottom : 50px;
  `
  export const Submit = styled.input.attrs(()=>({
    className : "submit",
    type: "submit"
  }))`
  background-color: #0095eb;
  color: #ffffff;
  border: 0;
  font-size: 20px;
  width: 65px;
  height: 35px;
  margin-left: 5px;
  border-radius: 4px;
  font-size: 12px;
 `