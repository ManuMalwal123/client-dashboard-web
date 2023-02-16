import Link from "next/link";
import styled from "styled-components";
import theme from "../../../themes/default";

export const NavbarContainer = styled.nav.attrs(()=>({
    className : "navbar navbar-expand-lg sticky-top bg-white m-0 p-0"
}))``

export const Container  = styled.div.attrs(()=>({
    className : "container my-3 p-0"
}))``

export const Col = styled.div.attrs(()=>({
    className : "col d-flex"
}))`
    width: 98%;
`
export const Logo = styled.div.attrs(()=>({
    className : "logo"
}))``

export const Icon = styled.span.attrs(()=>({
    className :"navbar-toggler-icon",
}))``

export const NavbarCollapse = styled.div.attrs(()=>({
    className : "collapse navbar-collapse"
}))`
`

export const NavbarCollapseInner = styled.div.attrs(()=>({
    className : "p-0"
}))`
height: 36px;
margin-left: 1rem!important;
margin-top: 1.5rem!important;
width : 90%;
`

export const Ullist = styled.ul.attrs(()=>({
    className : "d-flex p-0 w-100 items"
}))`
    list-style: none;
    margin-left: 0%;
    height: 28px;
    margin-top: 5px;
`
export const Menu = styled.li`
    margin-left: 2%;
    padding-right: 2%;
     border-right-style: solid;
    border-color: rgba(0, 0, 0, 0.05);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`
export const DropdownContent = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 200px;
`
export const Dropdown = styled.div.attrs(()=>({
    className : "dropdown"
}))`
    margin-left: 2%;

    &:hover{
        .dropdown-content{
            display: block;
        }
    }
`

export const MenuLink = styled.a`
    color: black !important;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
`
export const MenuLinkdiv = styled.a`
  color: black !important;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  margin-right: 10px;
`
export const DropdownLink = styled.a`
  padding: 10px 18px;
  text-decoration: none;
  display: block;
  color: #5f5f5f !important; 
  font-size: 14px !important;
`
export const Search = styled.div.attrs(()=>({
    className : "form-search"
}))``

export const Searchicon = styled.i.attrs(()=>({
    className : "fa fa-search"
}))`
 margin-left: -25%;
`

export const Btn = styled.button.attrs(()=>({
    className : "btnn"
}))`
    color: ${theme.colors.textcolor};
  border: none;
  width: 30%;
  margin-right: 5%;
  margin-top: 1%;
  height: 45px;
  background-color: ${theme.colors.defaultcolor};
`
export const Searchbtn = styled.button.attrs(()=>({
    className : "btn btn-primary"
}))`
   width: 102px;
    height: 44px;
    margin-top: 13px;
    margin-right: 38px;
    background-color: ${theme.colors.defaultcolor};
    border-color: ${theme.colors.defaultcolor};
    padding-top: 10px;

    &:hover{
        background-color:${theme.hover.defaulthoversearchcolor} !important;
        border-color: ${theme.hover.defaulthoversearchcolor} !important;
    }
`
export const Searchbar = styled.input.attrs({
    type : 'search',
    placeholder : 'Search'
})`
    width: 98%;
    height: 100%;
    font-size: 23px;
    border-color : ${theme.colors.defaultcolor};
`

export const ModalBody = styled.div.attrs(()=>({
    className : "modal-body"
}))`
height : 80px;
background-color: ${theme.colors.defaultcolor};
`

// <-------------Side NAvbar --------------------->


export const ToggleButton = styled.button`
margin-left: 55%;
display: none;

@media only screen  and (max-width : 1024px){
    display : block;
}
`
export const MainDiv = styled.ul`
width: 100%;
height:100%;
background-color: rgba(0,0,0,0.5) ;
z-index: 9999;
position: fixed;
right: 0;
top: 0;
bottom: 0;
display: none;
@media screen and (max-width : 1024px){
    display: block;
}
`
export const SideBar = styled.div`
width : 30%;
height: 100%;
background-color: black;
z-index: 9999;
position: absolute;
right: 0;
padding-left: 0px;
display: none;
@media screen and (max-width : 1024px){
    display: block;
}
`
export const CloseDiv = styled.div`
font-size: 20px;
background-color: black;
width: 40px;
height:fit-content;
display: flex;
justify-content: center;
margin-top: 2%;
color:grey;
margin-left: 80%;

&:hover{
    color: white;
}
`
export const Itemsbox = styled.div.attrs(()=>({
    className : "Dropdown"
}))`
width: 100%;
height: fit-content;
background-color: black;
color: grey;
display: none;
margin-top: 2%;
margin-bottom: 2%;
margin-left: 8%;
&:hover{
    color: white;
}
`

export const Items = styled.div`
width: 100%;
height: fit-content;
background-color: black;
margin-top: 10%;
color:grey;
margin-left: 10%;

 &:hover{
        .Dropdown{
                display: block;
        }
        color: white;
 }
`
export const SideBarLink = styled.a`
text-decoration: none;
color: grey !important;
 &:hover{
    color: white !important;
 }
`

export const IconsDiv = styled.div`
color: grey;
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
gap: 10px;
margin-top: 5%;

`

export const Facebook = styled.i.attrs(()=>({
className : "fa fa-facebook-f"
}))`
cursor: pointer;
 &:hover{
    color: white;
 }
`

export const Twitter = styled.i.attrs(()=>({
    className : "fa fa-twitter"
    }))`
   cursor: pointer;
 &:hover{
    color: white;
 }
   `
    
export const Linkedin = styled.i.attrs(()=>({
    className : "fa fa-linkedin"
    }))`
   cursor: pointer;
 &:hover{
    color: white;
 }
   `
 
    
export const Pinterest = styled.i.attrs(()=>({
    className : "fa fa-pinterest-p"
    }))`
    cursor: pointer;
 &:hover{
    color: white;
 }
    `

export const Instagram = styled.i.attrs(()=>({
    className : "fa fa-instagram"
    }))`
    cursor: pointer;
 &:hover{
    color: white;
 }
    `

export const SearchIcon = styled.i.attrs(()=>({
    className : "fa fa-search"
    }))`
    cursor: pointer;
 &:hover{
    color: white;
 }
    `
      
    
