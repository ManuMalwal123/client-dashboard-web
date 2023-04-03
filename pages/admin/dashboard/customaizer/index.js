import React from "react";
import { Container,Select } from "@common/styled/index";
import { useState } from "react";
import { Pages } from "data.js";
import Layout from "@admin-components/customaizer/layout";

function Customaizer() {
  const [state , setState] = useState({
      route : "/"
  })
  
  function Change(e) {
    setState(prevState => {
      return({...prevState, route : e.target.value})
    })
  }
  console.log(state.route)
  
  const DropdownPages = Pages.map((data)=>{
    return(
      <>
        <option value = {data.slug}>{data.label}</option>
      </>
    )
  })

  return (
    <>
    <Container>
    <Container style={{height : 50}}>
    <Select style={{margin : 7}} onChange={Change}>
      {DropdownPages}
      </Select>
      </Container>
          <Container
            className="m-2"
            style={{ backgroundColor: "rgba(0, 35, 76, 0.05)" }}
            height="100%"
          >
            <Container style={{ borderRadius: 4 }} className="p-2 border">
            <Container className="p-2 border-bottom text-muted">
            <iframe src={`http://localhost:3000${state.route}`} width={"100%"} style ={{height : "100vh"}}/>
            </Container>
          </Container>
        </Container>
        </Container>
    </>
    
  );
};

Customaizer.DashboardLayout = Layout;
export default Customaizer;
