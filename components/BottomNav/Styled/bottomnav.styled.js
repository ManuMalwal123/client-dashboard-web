import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.div`
width : 100%;
height: 100px;
position: fixed;
bottom: 0;
display: none;
background-color: white;
z-index: 9999;
box-shadow: 5px;

@media screen and (max-width: 767px) {
    display: flex;
}
`
export const InnerContainer = styled.ul`
 display: flex;
 width: 100%;
 padding-left: 0;
 margin-top: 15px;
`
export const Container = styled.li`
width:100%;
height: 69px;
background-color: whitesmoke;
list-style: none;
border: 0.3px solid grey;
display: block;
text-align: center;
`

export const ImageContainer = styled.div`
padding-top: 10px;
height: fit-content;

`
export const ImageIcon = styled(Image).attrs((props)=>({
    src : props.src,
}))`
`

export const P = styled.p`

`
