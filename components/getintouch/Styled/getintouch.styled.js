import styled from "styled-components";

export const Getintouch = styled.div`
 padding-top: 5%;
  padding-bottom: 0px;
  margin-bottom: 5%;
  color: #626262;
  text-align: center;
`
export const Container = styled.div.attrs(()=>({
    className : "container"
}))``

export const Row = styled.div.attrs(()=>({
    className : "row p-0"
}))``

export const Col1 = styled.div.attrs(()=>({
    className: "col-xs-3 col-md-3 m-0 p-0"
}))``

export const Col2 = styled.div.attrs(()=>({
    className : "col-xs-6 col-md-6 m-0 p-0 "
}))``

export const Col3 = styled.div.attrs(()=>({
    className : "col-xs-3 col-md-3 p-0 text-end"
}))``

export const Heading = styled.h5`
 text-align: center;
  margin-right: 20rem;
  color: #161922;
  font-size: 15px;
  margin-bottom: 15px;
  line-height: 25px;
  font-weight: 700;
  vertical-align: baseline;
  font-family: "Roboto", Arial, Tahoma, sans-serif;
`
export const Text = styled.p`
  color: #000;
  margin-right: 6%;
  font-size: 14px;
`
export const Button = styled.button.attrs(()=>({
    className : "button",
    type : "button d-flex"
}))`
 border: none;
  background-color: #f7f7f7;
  color: #747474;
  vertical-align: baseline;
  border-radius: 4px;
  padding: 11px 20px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
`
export const Logo = styled.div`
  width: 80%;
  height: 81%;
  border: 1px solid black;
`