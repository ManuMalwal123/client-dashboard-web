import styled from "styled-components";
import theme from "../../../themes/default";

export const StickyDownload = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
width: 200px;
height: 50px;
position: fixed;
right  : 0;
margin-top : -41px;
background-color: ${theme.colors.defaultcolor};
margin-right: 50px;
display: none;
color : ${theme.colors.textcolor};
font-size: 18px;
padding-top: 12px;
padding-left: 12px;
cursor: pointer;
z-index: 9990;
`

export const Sticky = styled.div.attrs(()=>({
    className : "dropdown"
}))`
width : 50px;
height : 50px;
position: fixed;
right : 0;
margin-top: 300px;
background-color: ${theme.colors.defaultcolor};
padding-top: 14px;
padding-left: 10px;
cursor: pointer;
z-index:9990;

&:hover{.dropdown-content{
    display: block; 
}   
}
`
export const WhatsappDownload = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
width: 200px;
height: 50px;
position: fixed;
right  : 0;
margin-top : -51px;
background-color: green;
margin-right: 50px;
display: none;
color : ${theme.colors.textcolor};
font-size: 18px;
padding-top: 12px;
padding-left: 12px;
cursor: pointer;
z-index:9990;
`

export const Whatsapp = styled.div.attrs(()=>({
    className : "dropdown"
}))`
display: none;

@media only screen and (max-width: 1024px) and (min-width:767px) 
{
display: block;
width : 50px;
height : 50px;
position: fixed;
right : 0;
margin-top: 250px;
background-color: green;
padding-top: 14px;
padding-left: 10px;
cursor: pointer;
z-index:9990;

&:hover{.dropdown-content{
    display: block;   
}   
}
}
`
export const EmailDownload = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
width: 200px;
height: 50px;
position: fixed;
right  : 0;
margin-top : -51px;
background-color: blue;
margin-right: 50px;
display: none;
color : ${theme.colors.textcolor};
font-size: 18px;
padding-top: 12px;
padding-left: 12px;
cursor: pointer;
z-index:9990;
`

export const Email = styled.div.attrs(()=>({
    className : "dropdown"
}))`
display: none;

@media only screen and (max-width: 1024px) and (min-width:767px) 
{
    display: block;
width : 50px;
height : 50px;
position: fixed;
right : 0;
margin-top: 350px;
background-color: blue;
padding-top: 14px;
padding-left: 10px;
cursor: pointer;
z-index:9990;

&:hover{.dropdown-content{
    display: block;   
}   
}
}
`