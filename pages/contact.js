import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Link from "next/link";
import { ContainerFluid2,Container,Row,Col1,ContactBox,Geo,LocationTextP,Col2,Telephone,Mob,Col3,Envelope,Email,MobA,H4,ContactDiv,Location,LocationText,
ContainerMainHeading,MainHeadingh1,Span,ContactForm,Rowbottom,FormGroup,Button,GoogleMap,Frame,FormGroupTextarea,Name,Mail,Message,Emailinput,City} from "../styles/Contact.styled";
function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      
      <ContainerFluid2>
        <Image src="/../public/contact.jpg" height={500} width={1900} />
      </ContainerFluid2>
      <Container>
        <Row>
          <Col1>
            <ContactBox>
              <Geo/>
              <Location>
                <H4>Our Location</H4>
              </Location>
              <LocationText>
                <LocationTextP>
                  Plot No. E 304, GSPL Tower, 2nd Floor, Industrial Area, Phase
                  8 A, Mohali, Punjab, 160055
                  </LocationTextP>
              </LocationText>
              </ContactBox>
            </Col1>
          <Col2>
            <ContactBox>
              <Telephone/>
              <ContactDiv>
                <H4>Contact Us Anytime</H4>
              </ContactDiv>
              <Mob>
                <Link href="tel:+919216513000"><MobA>+91 9216513000</MobA></Link> |
                <Link href="tel:+919988899209"><MobA>+91 9988899209</MobA></Link>
                </Mob>
              </ContactBox>
            </Col2>
          <Col3>
            <ContactBox>
              <Envelope/>
              <Location>
                <H4>Write Some Words</H4>
              </Location>
              <Email>
                <Link href="mailto:klifesciences1991@gmail.com">
                  <MobA>klifesciences1991@gmail.com</MobA>
                </Link>
                <br />
                <Link href="mailto:klshopers1991@gmail.com">
                  <MobA> klshopers1991@gmail.com</MobA>
                </Link>
              </Email>
              </ContactBox>
            </Col3>
          </Row>
        </Container>

        <ContainerMainHeading>
        <MainHeadingh1>
          Send Us <Span>A Message</Span>
          </MainHeadingh1>

          <ContactForm>
            
          <Rowbottom>
            <FormGroup>
            <Name/>
            </FormGroup>

            <FormGroup>
            <Mail/>
            </FormGroup>

            <FormGroup>
              <City/>
            </FormGroup>

            <FormGroup>
              <Emailinput/>
            </FormGroup>

            </Rowbottom>
            
          <FormGroupTextarea>
            <Message/>
          </FormGroupTextarea>
      
          <Button>
            Submit
            </Button>
          </ContactForm>
        </ContainerMainHeading>

      <ContainerMainHeading>
        <MainHeadingh1>
          Get In <Span>Touch</Span>
          </MainHeadingh1>
        </ContainerMainHeading>

        <GoogleMap>
        <Frame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.1494438335085!2d76.84609377477777!3d30.68607108788772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9345866a0619%3A0xbe98c27e119e1246!2sWebHopers%20Infotech%20Pvt%20Ltd%20%7C%20Web%20Development%20%26%20Digital%20Marketing%20Company%20in%20Panchkula%20Chandigarh%20Haryana!5e0!3m2!1sen!2sin!4v1671695196627!5m2!1sen!2sin"
        ></Frame>
      </GoogleMap>
      <Footer />
    </>
  );
}

export default Contact;
