import { Container } from "@common/styled/index";
import React from "react";

import CenterView from "./CenterView";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <Container style={{ display: 'grid', gridTemplateColumns: "15% 85%", height: '100vh' }}>
      <Sidebar />
      <Container>
        <Nav />
        <CenterView />
      </Container>
    </Container>
  );
}

export default Dashboard;
