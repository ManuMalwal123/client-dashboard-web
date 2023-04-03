import React from "react";
import { Container } from "@common/styled/index";
import Sidebar from "@admin-components/customaizer/sidebar";
// import Header from "@admin-components/customaizer/header";

function Layout({children}) {
  return (
    <>
      <Container
        className="overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 85%",
          height: "100vh",
        }}
      >
        <Sidebar />
        {children}
      </Container>
    </>
  );
}

export default Layout;
