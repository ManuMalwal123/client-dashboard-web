import styled from "styled-components";

export const CarouselContainer = styled.div.attrs(()=>({
    className : "carousel slide",
    id : "carouselExampleIndicators",
    "data-bs-ride" : "carousel"
}))``

export const CarouselIndicator = styled.div.attrs(()=>({
    className : "carousel-indicators"
}))``

export const ButtonSlider1 = styled.button.attrs(()=>({
    type:"button",
    "data-bs-target":"#carouselExampleIndicators",
    "data-bs-slide-to":"0",
    className:"active",
    "aria-current":"true",
    "aria-label":"Slide 1"
}))``

export const ButtonSlider2 = styled.button.attrs(()=>({
    type:"button",
    "data-bs-target":"#carouselExampleIndicators",
    "data-bs-slide-to":"1",
    "aria-label":"Slide 2",
}))``

export const CarouselInner = styled.div.attrs(()=>({
    className : "carousel-inner"
}))`
`

export const CarouselItemActive = styled.div.attrs(()=>({
    className : "carousel-item active"
}))`


`

export const CarouselItem = styled.div.attrs(()=>({
    className : "carousel-item"
}))`

`

export const CarouselControlPrev = styled.button.attrs(()=>({
    className:"carousel-control-prev",
    type:"button",
    "data-bs-target":"#carouselExampleIndicators",
    "data-bs-slide":"prev"
}))`

`

export const CarouselPrevIcon = styled.span.attrs(()=>({
    className :"carousel-control-prev-icon",
     "aria-hidden":"true"
}))``

export const VisuallyHidden = styled.span.attrs(()=>({
   className : "visually-hidden",
}))``

export const CarouselNextIcon = styled.span.attrs(()=>({
    className:"carousel-control-next-icon",
     "aria-hidden":"true"
}))``

export const CarouselControlNext = styled.button.attrs(()=>({
    className:"carousel-control-next",
        type:"button",
        "data-bs-target":"#carouselExampleIndicators",
        "data-bs-slide":"next"
}))``

export const ContainerCarousel = styled.div`
background-color: white;
display: flex;
justify-content: center;
`