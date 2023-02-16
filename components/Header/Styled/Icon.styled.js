import styled from "styled-components";

export const Social = styled.ul.attrs(()=>({
    className : "d-flex my-3 p-0"
}))`
    margin: 0 auto;
    list-style: none;
    margin-right: 45px; 
`

export const Socialli = styled.li`
    margin-left: 12px;
    display: inline-block !important;
`

export const SocilaA = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
`

export const Iconfacebook = styled.i.attrs(()=>({
    className : "fa fa-facebook-f",
}))``


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
