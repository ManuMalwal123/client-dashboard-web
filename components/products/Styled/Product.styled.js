import styled from "styled-components";
import theme from "../../../themes/default";

export const Product = styled.div`
 margin: 0%;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 5%;
  background-color: #f2f2f2;
`
export const ProductContainer = styled.div.attrs(()=>({
    className : "container"
}))``

export const Column1 = styled.div.attrs(()=>({
    className : "col"
}))``

export const ProductH2 = styled.h2`
     text-align: center;
  font-size: 30px;
  line-height: 34px;
  font-weight: 300;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};
`
export const ProductPara = styled.p`
  font-size: 14px;
  margin-right: -6%;
  padding-top: 1%;
  text-align: center;
  color: gray;
  line-height: 1.7rem;
  font-weight: 500;
`
export const ProductRow = styled.div.attrs(()=>({
    className : "row ms-5"
}))``

export const Column2 = styled.div.attrs(()=>({
    className : "col d-flex m-0 p-0"
}))``

export const Image1 = styled.img.attrs((props)=>({
  src : props.src,
}))`
width : 250px;`

export const ParaA = styled.a`
    text-decoration: none;
    color: #b72821;
    font-weight: bold;
    padding-left: 0.4%;

  &:hover{
    text-decoration: underline;
    color: #0693e3;
  }
`


export const Image2 = styled.img.attrs((props)=>({
    src : props.src,
  }))`
  width : 250px;
  margin-left:20px;`


