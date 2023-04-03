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
  a {
    color: white;
    text-decoration: none;
  }
`;

export const Select = styled.select`
width : 120px;
height: 30px;
cursor: pointer;
border: none;
border-radius: ${globalVars.borderRadius};
&:hover{
  background-color: ${globalVars.blueColor};
  color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5);
}
&:focus {
    box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5);
    outline-offset: 2px;
  }
`;

export const Option = styled.option`
width : 120px;
height: 30px;
cursor: pointer;
border: none;
border-radius: ${globalVars.borderRadius};
&:hover{
  background-color: ${globalVars.blueColor};
  color: white;
}
&:focus {
    box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5);
    outline-offset: 2px;
  }
`;

export const DivBlock = styled.div`
display: block;
margin-left: 10px;
`
export const DivFlex = styled.div`
display:flex;
text-align: center;
`
export const Image = styled.img.attrs((props)=>({
  src : props.src,
  width : props.width,
  height : props.height
}))``
