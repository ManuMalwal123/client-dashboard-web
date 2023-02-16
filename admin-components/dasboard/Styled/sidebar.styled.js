import styled from "styled-components";

export const ContainerSideBar = styled.div`
width : 30%;
height: 100vh;
background-color: #eeeeee;
`
export const DivHeading = styled.div`
display: flex;
`

export const H4 = styled.h4`
color : black;
font-size: 15px;
margin-top: 12px;
margin-left: 8px;
`
export const ButtonClose = styled.button`
width: 15px;
height: 20px;
border: none;
color: black;
margin-left: 150px;
padding-left: 2px;
padding-top: 1px;
`
export const LeftArrow = styled.img.attrs((props)=>({
    src : props.src
  }))`
  width: 20px;
  height: 20px;
  color: grey;
  margin-top: 10px;
  margin-left:142px;
  `
  export const ContainerDiv = styled.div`
 background-color: aliceblue;
 width: fit-content;
 height: fit-content;
 display: flex;
 `
  export const Phone1 = styled.input.attrs(()=>({
    type : "text",
    placeholder : "phone no.1"
  }))`
 width : 100px;
 height : 17px;
 font-size: 10px;
 margin-left: 10px;
 `
 export const Save = styled.div`
 width : fit-content;
 height : fit-content;
`
