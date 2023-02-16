import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: white;
`
export const InnerContainer = styled.div`
width:50%;
height: fit-content;
display: flex;
margin-top: 9%;
margin-bottom: 9%;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

@media  (max-width: 1024px) {
    display : block;
}
    
`
export const ImageContainer = styled.div`
width: 40%;
height: 350px;
display: flex;
justify-content: center;
background-color: rgba(241,241,241,255);

@media  (max-width: 1024px) {
    width: 100%;
    height: 120px;
}
@media  (max-width: 767px) {
    width: 100%;
    height: 80px;
}

`
export const SideImage = styled.img.attrs((props)=>({
    src : props.src
}))`
width: 200px;
height: 150px;
margin-top: 83px;

@media  (max-width: 1024px){
    width: 100px;
    height: 70px;
    margin-top: 20px;
}
@media  (max-width: 767px){
    width: 80px;
    height: 50px;
    margin-top: 10px;
}
`
export const InputFieldsContainer = styled.div`
width: 60%;
background-color: rgba(255,255,255,255);
height: 350px;
display: flex;
justify-content: center;


@media (max-width: 1024px){
    width: 100%; 
}
@media  (max-width: 767px) {
    width: 100%;
    height: 280px;
}
`
export const InputEmail = styled.input.attrs({
    type : "email",
    placeholder : "Enter Email",
})`
margin-top : 0%;
width: 300px;
background-color: rgba(241,241,241,255);
border: none;
border-radius : 10px;
padding-left : 20px;
@media (max-width: 767px){
    width: 164px; 
    height : 30px;
    font-size : 14px}
`

export const InputPassword = styled.input.attrs({
    type : "password",
    placeholder : "Enter Password",
})`
margin-top : 4%;
width: 300px;
background-color: rgba(241,241,241,255);
border: none;
border-radius : 10px;
padding-left : 20px;
@media (max-width: 767px){
    width: 164px;
    height : 30px;
    font-size : 14px;
     }
`

export const CheckBox = styled.input.attrs({
    type : "checkbox",
})`
    background-color : lightgrey;
    margin-top : 6%;
    margin-left : 1%;
`

export const SubmitButton = styled.input.attrs({
    type : "submit",
    value : "Sign In"
})`
background-color : #1f62be;
margin-top : 2%;
border : none;
border-radius : 10px;
color : white;
width : 100px;
margin-left : 55%;
@media (max-width: 767px){
    margin-left : 0%;
    width: 60px;
    font-size : 12px;
    height : 32px;
    padding-top : 0px
     }
`

export const InputsContainer = styled.div`
width: fit-content;
height: fit-content;
line-height: 35px;
margin-top: 4%;
display: block;
text-align: center;
`
export const H3 = styled.h3`
text-align: center;
font-family: sans-serif;
color: #1f62be;
font-size: 16px;
margin-top: 10px;
@media (max-width: 767px){
    font-size: 12px;}
`
export const H5 = styled.h5`
text-align: center;
color: #f58634;
font-size: 12px;
@media (max-width: 767px){
    font-size: 8px;
    margin-bottom : 0px;}
`
export const DivCheckbox = styled.div`
display: flex;
margin-left: 6px;
`
export const H6 = styled.h6`
font-size: 12px;
    margin-top : 25px;
    margin-left: 5px;
@media (max-width: 767px){
    font-size: 10px;
    margin-top : 17px;
    margin-left: 5px;
}
`
export const SpanError = styled.span`
margin-top: 0px;
color: red;
font-size: 12px;
`
export const FromDiv = styled.div`
display: flex;
justify-content: center;
width: fit-content;
height: fit-content;
`
export const Form = styled.form`
`