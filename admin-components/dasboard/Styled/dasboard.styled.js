import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`

export const MainContainer = styled.div`
display: flex;
width:100%;
height: fit-content;
`
export const Navbar = styled.div`
display: flex;
width: 100%;
height: 40px;
`
export const Button = styled.button`
width: 30px;
height: 30px;
padding-left: 2px;
padding-top: 1px;
`
export const DropdownContent = styled.div.attrs(()=>({
    className : "dropdown-content",
}))`
  display: block;
  position: absolute;
  transition: all .5s ease;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background-color: white;
  color: grey;
  width: 100px;
  height: 30px;
  height: 30px;
  margin-top: 17px;
`

export const Dropdown = styled.div`
 position: relative;
  display: inline-block;
  margin-left: 45%;
  background-color: white;
  color: grey;
  width: 100px;
  height: 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #f0f1f3;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  &:hover{
    color: black;
  }
`
export const Span = styled.span`
font-size: 10px;
`
export const RightArrow = styled.img.attrs((props)=>({
  src : props.src
}))`
width: 20px;
height: 20px;
margin-top: 10px;
margin-left: 10px;
`
export const Website = styled.iframe.attrs((props)=>({
  src : props.src
}))`
width: 100%;
height: 90vh;
`