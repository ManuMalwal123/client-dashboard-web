import React from "react";
import Link from "next/link";

import Layout from "@admin-components/dasboard/layout";
import { Button } from "@common/styled/index";

function DashboardComponent() {
  return (
    <>
      <h4>Welcome to Admin Panel</h4>
      <Button>
      <Link href={"/admin/dashboard/customaizer"}>Customize Your Site</Link>
      </Button>

    </>
  );
}

DashboardComponent.DashboardLayout = Layout;

export default DashboardComponent;
