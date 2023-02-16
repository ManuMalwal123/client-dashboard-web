import Image from "next/image";
import styled from "styled-components";

export const Row = styled.div.attrs(()=>({
    className : "row m-0 p-0"
}))``

export const Col = styled.div.attrs(()=>({
    className : "col"
}))`
display: flex;
justify-content: center;
`

export const Card = styled.div`
margin-top: 5%;
`

export const Col1 = styled.div`
    width: 100%;
  height: 120px;
  background-color: white;
  display: flex;
`
export const Container = styled.div.attrs(()=>({
    className : "container d-flex text-align-center"
}))``

export const Div1 = styled.div`
padding: "20px";
`
export const Div2 = styled.div`
margin-top: "25px";
`
export const Div3 = styled.div`
color: #444;
line-height : 50px;
font-size : 50px ;
margin-bottom : 5px;
`
export const Span1 = styled.span`
font-size: 45px;
font-weight: bold;
color: #d06d6b;
`
export const Span2 = styled.span`
font-size: 40px;
 line-height: 50px;
  color: #444;
`

export const P = styled.p`
color: #000;
font-size: 12px;
font-weight: bold !important;
`

