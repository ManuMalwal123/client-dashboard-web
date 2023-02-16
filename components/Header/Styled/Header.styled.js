import styled from "styled-components";
import theme from "../../../themes/default";


export const MainHeaderContainer = styled.div.attrs(()=>({
    className : "d-lg-block d-none"
}))`
    background-color: ${theme.colors.defaultcolor} ;
    width: 100%;
    line-height: 15px;
`
export const Container = styled.div.attrs(()=>({
    className : "container p-0"
}))``

export const Row = styled.div.attrs(()=>({
    className : "row"
}))`
    display: flex;
`
export const Col = styled.div.attrs(()=>({
    className : "d-sm-flex m-0 p-0"
}))`
 width: 98%;
`
