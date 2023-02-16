import styled from "styled-components";

export const ContainerFluid = styled.div.attrs(()=>({
    className : "container-fluid-1 w-100 p-0 m-0"
}))``

export const Container = styled.div.attrs(()=>({
    className : "container p-0"
}))``

export const Col1 = styled.div.attrs(()=>({
    className : "col-12 col-lg-6"
}))``

export const Col2= styled.div.attrs(()=>({
    className : "col-12 col-lg-6 m-0 p-0"
}))``

export const Col3= styled.div.attrs(()=>({
    className : "col-lg-12"
}))`
display: flex;
justify-content: center;
`

export const Row = styled.div.attrs(()=>({
    className : "row d-sm-flex"
}))``

export const Heading = styled.h3`
color: #000;
  font-size: 42px;
`
export const HSpan  = styled.span`
 color: #ca1c13;
  font-weight: 700;
`
export const Paragraph = styled.p`
text-align: justify;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
  font-family: sans-serif;
`
export const Para = styled.p`
    text-align: justify;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
  font-family: sans-serif;
  margin: 2% 6% 0% 7%;
`
export const Text = styled.p`
 text-align: justify;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
  font-family: sans-serif;
  margin: 0% 6% 0% 7%;
`
export const ImageBorder = styled.div.attrs(()=>({
    className : "image border border-secondary"
}))``

export const ImageDiv = styled.div`
display: flex;
justify-content: center;
`