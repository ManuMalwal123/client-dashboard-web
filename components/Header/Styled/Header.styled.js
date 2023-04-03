import styled from "styled-components";
import theme from "../../../themes/default";


export const MainHeaderContainer = styled.div.attrs(()=>({
}))`
    background-color: ${theme.colors.defaultcolor} ;
    width: 100%;
    display:flex;
    justify-content: space-between;
`

 export const HeaderContacts = styled.div`
    display: flex;
    margin: 15px;
`
 export const ContactsContainer = styled.div`
 color: white;
 margin-left: 10px;
 &:hover{
    text-decoration: underline;
 }
`
export const Iconphone = styled.i.attrs(() => ({
    className: 'fa fa-phone',
  }))``

export const Iconemail = styled.i.attrs(()=>({
    className : "fa fa-envelope"
}))``

export const SocialLink = styled.a`
    text-decoration: none;
    color: #fff;
`

export const Iconfacebook = styled.i.attrs(()=>({
    className : "fa fa-facebook-f",
}))`
`
export const Icontwitter = styled.i.attrs(()=>({
    className : "fa fa-twitter",
}))``

export const Iconlinkedin = styled.i.attrs(()=>({
    className : "fa fa-linkedin",
}))``

export const Iconpinterest = styled.i.attrs(()=>({
    className : "fa fa-pinterest-p",
}))``

export const Iconinstagram= styled.i.attrs(()=>({
    className : "fa fa-instagram",
}))``