import { globalVars } from "@styles/admin-components/styled/globalVars";
import styled from "styled-components";

export const Menu = styled.menu`
  a {
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 4px;
    text-decoration: none;
    color: inherit;
    display: block;
    
    &:hover, .active {
      color: white;
      background-color: #0076ff; 
      box-shadow: 0 2px 10px 0 rgba(0, 118, 255, 0.5); 
    }
  }
`;
