
import { Getintouch,Container,Row,Col1,Col2,Col3,Heading,Text,Button,Logo} from "./Styled/getintouch.styled";
function GetIn() {
  return (
    <Getintouch>
      <Container>
        <Row>
          <Col1>
            <Logo>
              <img src="/captab-logo.png" />
              </Logo>
            </Col1>
          <Col2>
            <Heading>Interested ? Lets get in touch!</Heading>
            <Text>Please get in touch with us if you have any queries in relation to mutual business.</Text>
            </Col2>
          <Col3><Button>Get In Touch</Button></Col3>
          </Row>
        </Container>
      </Getintouch>
  );
}
export default GetIn;
