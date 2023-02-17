import styled from "styled-components";
import { globalVars } from "@styles/admin-components/styled/globalVars";

export const Container = styled.div`
  background: ${(props) => props.bgColor || "white"};
  height: ${(props) => props.height || "auto"};
  ${({ boxShadow }) => boxShadow && `
    box-shadow: ${globalVars.shadowSm};
  `}
`;
export const Row = styled.div``;

// Form Elements
export const Form = styled.form`
  display: ${(props) => props.display || "auto"};
  gap: 15px;
  border-radius: ${globalVars.borderRadius};
  background-color: white;

  ${({ boxShadow }) =>
    boxShadow &&
    `
    box-shadow: ${globalVars.shadowSm};
  `}
`;

export const Label = styled.label`
  color: black;
  margin-bottom: 4px;
  display: block;

  ${({ required }) =>
    required &&
    `
  &::after {
    content: "*";
    color: ${globalVars.redColor}
  }
  `}
`;

export const Input = styled.input`
  padding: 7px;
  border: none;
  outline: 1px solid ${globalVars.borderColor};
  border-radius: ${globalVars.borderRadius};

  &:focus {
    outline: 2px solid ${globalVars.blueColor};
    transition: outline ease-in-out 100ms;
  }
`;

export const FormGroup = styled.div``;

export const Button = styled.button`
  padding: 7px;
  border-radius: ${globalVars.borderRadius};
  background-color: ${globalVars.blueColor};
  border: 1px solid ${globalVars.blueColor};
  cursor: pointer;
  color: white;
  margin: 2px;
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5);
  }
  &:focus {
    box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5);
    outline: 2px solid rgba(0, 118, 255, 1);
    outline-offset: 2px;
  }
`;
