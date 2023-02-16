import styled , {keyframes} from "styled-components";
import theme from "../../../themes/default";

export const Bounce = keyframes`
0%{ transform: translateY(0); }

50% { transform: translateY(-50px); }`

export const Choose = styled.div`
     background-image: url(/bg2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin-top: 80px;
    
`
export const Container = styled.div.attrs(()=>({
    className : "container-flu"
}))`
padding-bottom: 4%;
`

export const Col1 = styled.div.attrs(()=>({
    className : "col mt-5"
}))`
    width: 75%;
    margin-left: 12%;
`

export const H3 = styled.h3`
  color: ${theme.colors.textcolor};
  margin: 0% 4% 0%;
  padding-top: 4%;
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};
  `

  export const H4 = styled.h4`
  margin-top: 20px;
  margin-left: 50px;
  color: #161922;
  font-size: 22px;
  line-height: 25px;
  font-weight: 500;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};
  margin-bottom: 15px;
 `

 export const P = styled.p`
    color: #fff;
  margin-left: 50px;
  margin-right: 50px;
  text-align: justify;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};
`
export const Row = styled.div.attrs(()=>({
    className : "row mt-5 p-0 d-flex"
}))`
    width: 75%;
    justify-content: space-between;
    margin-left: 14%;
`

export const Col2 = styled.div.attrs(()=>({
    className : "col-lg-4 col-md-6 col-sm-12 border"
}))`margin-left: -5%;
background-color: #ac3b34;
&:hover{
  background-color: rgb(43,76,136,0.5);
  color: white;
 
  }
`

export const Image = styled.img.attrs((props)=>({
    src : props.src
}))`
margin-top: 10px;
`

export const Section = styled.section.attrs(()=>({
    className : "p-2 py-4"
}))``

export const Who = styled.h4`
color: ${theme.colors.textcolor};
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  letter-spacing: 0px;
  font-family: ${theme.font.defaultfont};
`
export const Text = styled.p`
    color: #fff;
  text-align: justify;
  margin: 0 0 15px;
  line-height: 25px;
  font-size: 14px;
`
export const ImageBox = styled.div`
width: fit-content;
height: fit-content;
margin-top: 10px;
margin-bottom: 10px;

`

