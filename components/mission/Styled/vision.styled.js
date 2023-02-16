import styled from "styled-components";

export const Container = styled.div.attrs(()=>({
    className : "px-4"
}))`
`

export const Row = styled.div.attrs(()=>({
    className : "row p-0 m-0 d-flex"
}))`
width: 75%;
justify-content: center;
`

export const Col1 = styled.div.attrs(()=>({
    className : "col-lg-4 col-12"
}))`
&:hover{
    .card-img-top{
        opacity: 0.5 ;
    }
    .px-4{
        background-color:rgba(208,109,107,255);
        color: white;
    }
}
`

export const CardGroup = styled.div.attrs(()=>({
    className : "card-group"
}))``

export const CardImageTop = styled.img.attrs((props)=>({
    src : props.src,
    className :"card-img-top"
}))``

export const Card = styled.div.attrs(()=>({
    className : "px-4"
}))`
    background-color: #20489a1f;
`
export const Title = styled.h3`
    text-align: center;
  overflow: hidden;
`
export const Para = styled.p`
  text-align: center;
  font-size: 14px;
  overflow: hidden;
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-lg-4 col-12"
}))`
`

export const Col3 = styled.div.attrs(()=>({
}))`
background-color: #20489a1f;
display: flex;
&:hover{
    background-color: rgba(208,109,107,255);
    color: white;
    .w-100{
        opacity: 0.5;
    }
}
@media screen  and (max-width:1024px) {
        display: block;
    }
`

export const Col4 = styled.div.attrs(()=>({
    className : "col-lg-12 d-flex"
}))``

export const Section = styled.section.attrs(()=>({
    className : "px-3 m-3"
}))`
`
export const Vis = styled.h3`
margin-top: 10%;
 text-align: center;
  justify-content: center;
  `

export const Text = styled.p`
    text-align: center;
  font-size: 14px;
  margin-top: 17px;`

export const Image = styled.img.attrs((props)=>({
    src : props.src,
    className :"w-100 p-0"
}))`
`

