import { Container } from "@common/styled/index";
import Link from "next/link";
import { Menu } from "../styled";

const Sidebar = () => {
  return (
    <Container className="border-right" boxShadow>
      <h2 className="text-center p-2">WebHoper</h2>
      <small className="px-1 text-muted">Menu Items</small>

      <Menu className="p-1">
        <Link href={"/admin/dashboard"}>Dashboard</Link>
        <Link href={"/admin/dashboard/pages"}>Pages</Link>
        <Link href={"/admin/dashboard/appearance"}>Appearance</Link>
        <Link href={"/admin"}>Logout</Link>
      </Menu>
    </Container>
  );
};

export default Sidebar;
