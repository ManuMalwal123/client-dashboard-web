import styled from "styled-components";

export const Row1 = styled.div.attrs(()=>({
    className : "row d-flex p-0 mt-5 px-4"
}))`
width : 75%;
margin-left: 11%;
`

export const Row2 = styled.div.attrs(()=>({
    className : "row m-0"
}))`
&:hover{
    .text-center{
        background-color:rgba(208,109,107,255);
        color: white;
    }
    .w-100{
        opacity: 0.5;
    }
}
`

export const Col1 = styled.div.attrs(()=>({
    className : "col m-0"
}))`
`

export const Col2 = styled.div.attrs(()=>({
    className : "col-lg-5 col-12 p-0 m-0 flex-fill"
}))`
`

export const Col3 = styled.div.attrs(()=>({
    className : "col-lg-5 col-12 d-flex p-0 m-0"
}))``

export const Section = styled.section.attrs(()=>({
    className:"text-center"
}))`background-color: #20489a1f;`

export const H3 = styled.h3.attrs(()=>({
    className : "mt-2"
}))`
`

export const P = styled.p.attrs(()=>({
    className : "px-2 m-2 text-center"
}))`
font-size: 14px; 
line-height: 1.5rem;`


export const Image = styled.img.attrs((props)=>({
    src : props.src,
    className: "w-100"
}))`
height: 100%;
`

export const Col4 = styled.div.attrs(()=>({
    className : "col-lg-4 col-12 m-0 p-0"
}))`
&:hover{
    .section22{
        background-color:rgba(208,109,107,255) ;
    }
    
    color: white;
    .w-100{
        opacity: 0.5;
    }
}
`

export const H31 = styled.h3.attrs(()=>({
    className : "mt-4 text-center"
}))``

export const P1 = styled.p.attrs(()=>({
    className : "px-4 p-0 m-0 text-center"
}))`
font-size : 14px;`

export const Image1 = styled.img.attrs((props)=>({
    src : props.src,
    className : "w-100"
}))`
height: 38%;
`
export const Section2 = styled.section.attrs(()=>({
    className : "section22"
}))`
background-color: #20489a1f;
padding-top: 12px;
height: 177px;
`