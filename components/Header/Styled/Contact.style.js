import styled from "styled-components";
import theme from "../../../themes/default";

export const Contact = styled.ul.attrs(()=>({
    className : "my-3 p-0 d-sm-flex"
}))`
     list-style: none;
    align-items: center;
`
export const Touch = styled.li`
    text-decoration: none;
    color: ${theme.colors.textcolor};
    margin-left: 10px;
    size: 15px;
    font-family: ${theme.font.defaultfont};
`

export const Iconphone = styled.i.attrs(() => ({
    className: 'fa fa-phone',
  }))``

export const Iconemail = styled.i.attrs(()=>({
    className : "fa fa-envelope"
}))``

export const Contactdetails = styled.a`
    color : ${theme.colors.textcolor};
    text-decoration: none;
    margin-left: 8px;
     
     &:hover{
        text-decoration: underline;
        color: ${theme.colors.textcolor};
     }
`
