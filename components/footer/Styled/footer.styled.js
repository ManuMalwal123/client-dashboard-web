import styled from "styled-components";
import theme from "../../../themes/default";

export const MainFooter = styled.div`
background-color: ${theme.colors.footercolor};
  margin: 0;
`
export const Text = styled.footer.attrs(()=>({
    className : "text-center text-lg-start text-muted mt-5"
}))``

export const Box = styled.section.attrs(()=>({
    className : "box"
}))`
`
export const ContainerText = styled.div.attrs(()=>({
    className : "container text-center text-md-start pt-5"
}))``

export const Row = styled.div.attrs(()=>({
    className : "row"
}))``

export const Col1= styled.div.attrs(()=>({
    className : "col-md-3 col-lg-3 col-xl-3"
}))``

export const ContainerFluid = styled.div.attrs(()=>({
    className : "container-fluid p-0 bg-white"
}))`
 width: 80%;
border-radius: 4%;
margin-right: 20%;
`
export const Image1 = styled.img.attrs((props)=>({
    src : props.src
}))``

export const P = styled.p`
padding-top: 12%;
  font-size: 14px;
  color: #ffff;
  text-align: justify;
  letter-spacing: 0px;
`
export const H5 = styled.h5`
     font-size: 25px;
  line-height: 25px;
  font-weight: 700;
  color: #ffff;
  font-family: ${theme.font.defaultfont};
`
export const Footlinks = styled.div`
margin-top: 20%;
`
export const Ul = styled.ul`
list-style: none;
`
export const Li = styled.li`
 background-color: white;
  width: 100%;
  padding: 3% 0% 4% 4%;
  margin-left: -5%;
  color: #292b33;
  &:hover{
    cursor: pointer;
    text-decoration: underline;}
`
export const Item = styled.li`
background-color: white;
  margin-top: 3%;
  width: 100%;
  padding: 3% 0% 4% 4%;
  margin-left: -5%;
  color: #292b33;
  &:hover{
    cursor: pointer;
    text-decoration: underline;}
`
export const Sidebar = styled.div`
 width: 100%;
  background: #00000057;
  padding: 24px 0px 2px 15px;
`
export const H1 = styled.h1`
 font-size: 18px;
 font-weight: bold;
 color: ${theme.colors.textcolor};
`
export const OuterForm = styled.div.attrs(()=>({
    className : "form"
}))``

export const Button = styled.button.attrs(()=>({
    className : "btn btn-primary w-25",
    type : "button"
}))`
 background-color: #0095eb;
  padding-top: 3%;
  color: #ffffff;
  border: 0;
  width: 25%;
  border-radius: 5px;
  margin-bottom: 4%;
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-md-3 col-lg-3 col-xl-3 p-0 m-0"
}))``

export const I = styled.i.attrs(()=>({
    className : "fa fa-map-marker mx-3 text-white d-flex mt-4 px-3"
}))``

export const TextP = styled.p`
 margin-top: -3%;
  margin-left: 5%;
  font-size: 16px;
  line-height: 30px;
`
export const Hr = styled.hr`
color: #ffffff;
 margin-top: 4%;
`
export const Container = styled.div.attrs(()=>({
    className :"container p-3 pt-0"
}))``

export const Row1 = styled.div.attrs(()=>({
    className : "row d-flex align-items-center"
}))``

export const Col3 = styled.div.attrs(()=>({
    className : "col-md-7 col-lg-8 text-center text-md-start"
}))``

export const Text1 = styled.div.attrs(()=>({
    className : "p-3 text-white"
}))``

export const Col4 = styled.div.attrs(()=>({
    className : "col-md-5 col-lg-4 ml-lg-0 text-center text-md-end"
}))``

export const Facebook = styled.i.attrs(()=>({
    className : "fa fa-facebook-f text-white m-2"
}))``

export const Linkedin = styled.i.attrs(()=>({
    className : "fa fa-linkedin-in text-white m-2"
}))``

export const Twitter = styled.i.attrs(()=>({
    className : "fa fa-twitter text-white m-2"
}))``

export const Pinterest = styled.i.attrs(()=>({
    className : "fa fa-pinterest-p text-white m-2"
}))``

export const H3 = styled.h3.attrs(()=>({
    className : "fw-bold text-white mx-4"
}))``

export const Envelope = styled.i.attrs(()=>({
    className : "fa fa-envelope mx-3 text-white d-flex px-3"
}))``

export const Phone = styled.i.attrs(()=>({
    className : "fa fa-phone mx-3 text-white d-flex px-3"
}))``

export const Name = styled.input.attrs({
    type : "text",
    name : "name",
    placeholder : "Your Name"
})`
 width: 95%;
  padding: 2.5%;
  font-family: ${theme.font.defaultfont};
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  margin: 4% 5% 0% 0%;
  font-size: 14px;
  outline: none;
`
export const Email = styled.input.attrs({
    type : "text",
    name : "email",
    placeholder : "Email"
})`
 width: 95%;
  padding: 2.5%;
  font-family: ${theme.font.defaultfont};
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  margin: 4% 5% 0% 0%;
  font-size: 14px;
  outline: none;
`
export const PhoneNumber = styled.input.attrs({
    type : "text",
    name : "phone",
    placeholder : "Your Number"
})`
 width: 95%;
  padding: 2.5%;
  font-family: ${theme.font.defaultfont};
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  margin: 4% 5% 0% 0%;
  font-size: 14px;
  outline: none;
`
export const City = styled.input.attrs({
    type : "text",
    name : "city",
    placeholder : "City"
})`
 width: 95%;
  padding: 2.5%;
  font-family: ${theme.font.defaultfont};
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  margin: 4% 5% 0% 0%;
  font-size: 14px;
  outline: none;
`
export const Message = styled.input.attrs({
    type : "textarea",
    name : "subject",
    placeholder : "Message"
})`
  width: 95%;
  padding: 2.5%;
  font-family: ${theme.font.defaultfont};
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  margin: 4% 5% 0% 0%;
  font-size: 14px;
  outline: none;
  height: 90%;
  padding-bottom: 15%;
  margin-bottom: 5%;
`