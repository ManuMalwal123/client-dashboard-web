import {MainFooter,Text,Box,ContainerText,Row,Col1,ContainerFluid,Image1,P,H5,Footlinks,Ul,Li,Item,
H1,OuterForm,Button,Col2,I,TextP,Hr,Container,Row1,Col3,Text1,Col4,Facebook,
Twitter,Linkedin,Pinterest, Sidebar,H3,Envelope,Phone,Name,Email,PhoneNumber,City,Message} from "../footer/Styled/footer.styled";

export default function Footer() {
  return (
    <MainFooter>
      <Text>
        <Box>
          <ContainerText>
            <Row>
              <Col1>
               <ContainerFluid>
                  <Image1 src="./captab-logo.png" />
                  </ContainerFluid>
                <P>
                  Psycogen Captab is an ISO Certified Pharmaceuticals company
                  that works towards making life free of Neuropsychiatry
                  diseases which has become a worldwide public health concern.
                  </P>
                </Col1>

              <Col2>
                <H5>Quick Links</H5>
                <Footlinks>
                  <Ul><Li><a href="/home" />Home</Li>
                    <Item><a href="/about" /> About </Item>
                    <Item><a href="/home" /> Product Galley</Item>
                    <Item><a href="/about" /> Neuropsychiatry PCD Pharma Franchise </Item>
                    <Item><a href="/home" /> Contact us </Item> </Ul>
                  </Footlinks>
                  </Col2>

              <Col2>
                <Sidebar>
                  <OuterForm>
                   <H1>Inquire us</H1>
                   <Name/><br />
                    <Email/><br />
                    <PhoneNumber/><br />
                    <City/><br />
                    <Message/>
                    <Button>Send</Button>
                    </OuterForm>
                  </Sidebar>
                  </Col2>

              <Col2>
                <H3>Contact Us</H3>
                <I><TextP>Plot No. D-235, 4th Floor Industrial Focal Point, Phase 8B, Mohali, Punjab - 160071</TextP></I>
                <Envelope><TextP>klifesciences1991@gmail.com</TextP></Envelope>
                <Envelope><TextP> klshopers1991@gmail.com</TextP></Envelope>
                <Phone><TextP>+91-9216513000 | +91-9988899209</TextP></Phone>
                </Col2>
              </Row>
            </ContainerText>
        </Box>
        <Hr/>

        <Container><Row1><Col3><Text1>© 2022 . All Rights Reserved Psycogen Captab</Text1></Col3>
              <Col4>
              <a href=""><Facebook/></a>
              <a href=""><Linkedin/></a>
              <a href=""><Twitter/></a>
              <a href=""><Pinterest/></a>
              </Col4>
            </Row1>
          </Container>
        </Text>
      </MainFooter>
  );
}
