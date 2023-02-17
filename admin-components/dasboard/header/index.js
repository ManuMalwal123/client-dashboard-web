import { Container } from "@common/styled/index";

const Header = ({ breadCrumbLabel }) => {
  return (
    <Container className="p-2 border-bottom text-muted">
      Home / {breadCrumbLabel}
    </Container>
  );
};

export default Header;
