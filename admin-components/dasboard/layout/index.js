import React from "react";

import { Container } from "@common/styled/index";
import Sidebar from "@admin-components/dasboard/sidebar";
import Header from "@admin-components/dasboard/header";
import { useRouter } from "next/router";

const breadCrumb = (pathname) => {
  if (pathname.search("pages") > 0) {
    return "Pages";
  } else if (pathname.search("appearance") > 0) {
    return "Appearance";
  } else {
    return "Dashboard";
  }
};

function Layout({ children }) {
  const router = useRouter();

  const breadCrumbLabel = breadCrumb(router.pathname);
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
        <Container>
          <Header breadCrumbLabel={breadCrumbLabel} />
          <Container
            className="m-2"
            style={{ backgroundColor: "rgba(0, 35, 76, 0.05)" }}
            height="100%"
          >
            <Container style={{ borderRadius: 4 }} className="p-2 border">
              {children}
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Layout;
