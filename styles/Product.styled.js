import styled from "styled-components";
import theme from "../themes/default";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.defaultcolor};
  display: block;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.defaultcolor};
  display: flex;
  justify-content: center;
`;
export const H3 = styled.h3`
  color: white;
  font-size: 50px;
`;

export const P = styled.p`
  color: white;
  font-size: 18px;
`;
export const ContainerCards = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
  padding: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
`;
export const InnerCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-left: "50px";
  margin-top: "50px";

  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 100%;
    height: fit-content;
    background-color: white;
    display: grid;
    grid-template-columns: auto auto;
    margin-left: "50px";
    margin-top: "50px";
  }

  @media only screen and (max-width: 480px) and (min-width: 320px) {
    width: 100%;
    height: fit-content;
    background-color: white;
    display: block;
    margin-left: "50px";
    margin-top: "50px";
  }
`;
export const CardDiv = styled.div.attrs(() => ({
  className: "card",
}))`
  width: 80%;
  margin-top: 5%;
  margin-left: 10%;
`;
export const CardBody = styled.div.attrs(() => ({
  className: "card-body",
}))`
  background-color: ${theme.colors.defaultcolor};
  color: white;
  display: flex;
  justify-content: center;
`;

export const Span1 = styled.span.attrs(() => ({
  className: "mx-4",
}))``;

export const HomeLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: whitesmoke;
  }
`;
export const ImageDiv = styled.div`
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
    opacity: 0.5;
  }
`;
