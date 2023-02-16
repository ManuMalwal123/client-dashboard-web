import styled , {keyframes} from "styled-components";

export const FormAnimation = keyframes`
from{
    transform : translateY(42ch)
}
to{
    transform : translateY(0)
}
`

export const MainContainer = styled.div`
width : 300px;
height : 400px;
display: none;
background-color: white;
position: fixed;
bottom: 0;
right: 0;
margin-right: 50px;
z-index: 9998;
animation: ${FormAnimation} 3s;
@media screen and (min-width: 767px){
    display : block;
}
`
export const HeadingContainer = styled.div`
width:  300px;
height: 30px;
background-color: black;
color: whitesmoke;
text-align: center;
font-size: 20px;
position: fixed;
bottom: 0;
right: 0;
margin-right: 50px;
z-index: 9998;
`
export const HeadingContainerInner = styled.div`
width:  100%;
height: 30px;
background-color: black;
color: whitesmoke;
text-align: center;
font-size: 20px;
`
export const FormContainer = styled.div`
width: 100%;
height : 260px;
display: flex;
justify-content: center;
`
export const Ul = styled.ul`
width: 80%;
height: 240px;
background-color: white;
padding-left:1%;
padding-right: 1%;
padding-top: 10%;
`
export const Li = styled.li`
list-style: none;
`
export const LiContainer = styled.div`
display: flex;
justify-content: center;
`
export const Name = styled.input.attrs({
    type : "name",
    placeholder : "Name"
})`
margin-top : 5px;
width : 50%;
height : 30px;
padding : 5px 5px 5px 5px;
`

export const Email = styled.input.attrs({
    type : "email",
    placeholder : "Email"
})`
width : 50%;
height : 30px;
padding : 5px 5px 5px 5px;
`

export const Message = styled.textarea.attrs({
    type : "message",
    placeholder : "Message",
    rows : "4"
})`
margin-top : 5px;
width: 100%;
padding : 5px 5px 5px 5px;
height: 180px;
`

export const Send = styled.button.attrs({
    type : "submit"
})`
width : 40%;
border-style:none;
color:white;
background-color: blue;
border-radius: 5px;
`

export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 30px;
`

export const ClickDiv = styled.div`
width: 100%;
height: 30px;
background-color: black;
color: whitesmoke;
text-align: center;
font-size: 20px;
position: fixed;
bottom: 0;
right: 0;
margin-right: 50px;
z-index: 9998;
`