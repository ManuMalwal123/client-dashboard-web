import styled from "styled-components";


export const DropdownContent = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
width: 250px;
height: 100px;
background-color: red;
display: none;
transition: height 4s;
`

export const Querydropdown = styled.div.attrs(()=>({
    className : "dropdown"
}))`
width : 250px;
height : 35px;
position: fixed;
bottom: 0;
right: 0;
background-color: black !important;
margin-right: 50px;
color: white !important;


&:hover {.dropdown-content{
    display: block;
    height:700px;
}
}
`
