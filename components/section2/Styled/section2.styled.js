import styled from "styled-components";

export const Image = styled.img.attrs((props)=>({
    src : props.src
}))`
width: 100%;
height: fit-content;
`
export const Text = styled.div`
display: block;
`
export const H6 = styled.h6`
 font-size: 25px;
  line-height: 40px;
  margin-bottom: 10px;
`
export const P = styled.p`
 text-align: justify;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  margin-right: 23px;
`
export const Ul = styled.ul`
  color: #737e86;
  font-size: 14px;
  line-height: 35px;
`
export const MainDiv = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
`
export const Container = styled.div`
width: 70%;
height: fit-content;
display: flex;
justify-content: center;

@media screen and (max-width: 1024px)  {
  display: block;
}
`
export const Para = styled.div`
width: 100%;
height: fit-content;
`