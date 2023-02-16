import styled from "styled-components";
import theme from "../../../themes/default";

export const Main = styled.div`
 margin-top: 30px;
`
export const Container = styled.div.attrs(()=>({
    className : "container"
}))``

export const Row = styled.div.attrs(()=>({
    className : "row d-sm-flex"
}))``

export const Col1 = styled.div.attrs(()=>({
    className : "col-12 col-lg-6"
}))``

export const Heading = styled.h3`
 color: #000;
  font-size: 37px;
  line-height: 40px;
  font-weight: 600;
  font-family: ${theme.font.defaultfont};
`
export const Span = styled.span`
 color: #ca1c13;
  font-weight: bold;
`
export const Minihead = styled.div`
 font-size: 19px;
  line-height: 50px;
  font-weight: 400;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};

`
export const Paragraph = styled.p`
text-align: justify;
  color: #000;
  font-size: 14px;
  margin: 0px 0 15px;
`
export const Button = styled.button`
 background-color: #204799;
color: white;
padding: 5px 15px;
border: 0px;
`
export const Col2 = styled.div.attrs(()=>({
className : "col-12 col-lg-6",
}))``

export const Image = styled.img.attrs((props)=>({
    src : props.src,
}))`
 width : 550px;
height : 450px;
`

export const Imagediv = styled.div`
border: 1px solid black;
`