import Link from "next/link";
import styled from "styled-components";
import theme from "../themes/default";

export const ContainerFluid2 = styled.div.attrs(()=>({
    className : "container-fluid-2"
}))`
display: flex;
justify-content: center;
`

export const Container = styled.div.attrs(()=>({
    className : "container"
}))``

export const Row = styled.div.attrs(()=>({
    className : "row mt-5 p-0"
}))``

export const Col1 = styled.div.attrs(()=>({
    className : "col-md-4 mb-4"
}))``

export const ContactBox = styled.div.attrs(()=>({
    className : "contact-box center-version"
}))`
 text-align: center;
  border: 1px solid #184093;
  padding: 30px 0 0px 0;
  height: 190px;

  &:hover{
    transform: translateY(10px);
  transition: all 1s ease;
  }
`
export const Geo = styled.i.attrs(()=>({
    className : "bi bi-geo-alt-fill"
}))`
 color: #184093;
  font-size: 30px;
  border: 1px solid #184093;
  border-radius: 50%;
  padding: 5px;
`
export const H4 = styled.h4`
    padding-top: 15px;
  font-size: 21px;
  font-weight: 500;
  color: #161922;
  font-family: ${theme.font.defaultfont};
`
export const LocationTextP = styled.p`
 padding-top: 10px;
  color: #303030;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-md-4 mb-4"
}))``

export const Telephone = styled.i.attrs(()=>({
    className : "bi bi-telephone-fill"
}))`
 color: #184093;
  font-size: 30px;
  border: 1px solid #184093;
  border-radius: 50%;
  padding: 5px;
`
export const Mob = styled.div.attrs(()=>({
    className : "mob pt-3"
}))``

export const MobA = styled.a`
 font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #20489a;

  &:hover{
    text-decoration: underline;
  color: #0095eb;
  }
`

export const Col3 = styled.div.attrs(()=>({
    className : "col-md-4 mb-4"
}))``

export const Envelope = styled.i.attrs(()=>({
    className : "bi bi-envelope-fill"
}))`
 color: #184093;
  font-size: 30px;
  border: 1px solid #184093;
  border-radius: 50%;
  padding: 5px;
`

export const Email = styled.div.attrs(()=>({
    className : "email pt-2"
}))``

export const ContactDiv = styled.div.attrs(() => ({
    className : "contact"
}))``

export const Location = styled.div.attrs(()=>({
    className : "location"
}))``

export const LocationText = styled.div.attrs(()=>({
    className : "location-text"
}))``



// <-------------------Form------------------------->



export const ContainerMainHeading = styled.div.attrs(()=>({
    className : "container mt-5 p-0 main-heading text-center"
}))``

export const MainHeadingh1 = styled.h1`
 color: #000;
  font-size: 42px;
`
export const Span = styled.span`
 color: #ca1c13;
  font-weight: 700;
`
export const ContactForm = styled.form.attrs(()=>({
    className : "contact-form m-0"
}))` background-color: #ebebeb;
padding: 50px 50px;
border-radius: 10px;`

export const Rowbottom = styled.div.attrs(()=>({
    className : "row"
})) ``

export const FormGroup = styled.div.attrs(()=>({
    className : "form-group col-md-6 mb-3"
}))``

export const Button = styled.button.attrs(()=>({
    type : "submit",
    className: "btn"
}))`
background-color : #3da095 !important;
color : ${theme.colors.textcolor};
`

export const FormGroupTextarea = styled.form.attrs(()=>({
    className : "form-group mb-3"
}))``

export const Name = styled.input.attrs(()=>({
    type:"name",
    className:"form-control",
    id:"inputEmail4",
    placeholder:"Your Name"
}))``

export const Mail = styled.input.attrs(()=>({
    type:"mail",
    className:"form-control",
    id:"inputPassword4",
    placeholder:"Your Email",
}))``

export const City = styled.input.attrs(()=>({
    type:"city",
    className:"form-control",
    id:"inputEmail4",
    placeholder:"City"
}))``

export const Emailinput = styled.input.attrs(()=>({
    type:"email",
    className:"form-control",
    id:"inputEmail4",
    placeholder:"Phone Number"
}))``

export const Message = styled.textarea.attrs(()=>({
    rows:"7",
    type : "message",
    className:"form-control h-100",
    id:"inputAddress",
    placeholder:"Message"
}))``


// <-----------Map----------->


export const GoogleMap = styled.div.attrs(()=>({
    className : "google-map m-0 p-0"
}))``


export const Frame = styled.iframe.attrs((props)=>({
 src : props.src,
 allowfullscreen : "",
 loading:"lazy",
 referrerpolicy:"no-referrer-when-downgrade"
}))`
width: 100%;
 height: 400px;
`