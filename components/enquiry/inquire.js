import { Box,Enquire,Row,Col,Heading,HeadingSpan,Para,EnquiryContainer,
Col2,Form,Sidebar,Name,Email,Phone,TextArea,H5,City,Submit} from "./Styled/inquire.styled";

export default function Inquire() {
  return (
    <EnquiryContainer>
    <Box>
      <Row>
        <Col>
          <Enquire>
            <Heading>
              PCD Pharma Franchise
              <HeadingSpan>Business Opportunity</HeadingSpan> 
              </Heading>
            <Para>
              Psycogen Captab is a leading platform to get quality neuro
              medicines for the PCD franchise business. The company has been
              supporting the big client base and always providing various
              benefits in order to keep the clients productive. Moreover, Our
              <a
                href="https://www.psycogen.in/neuropsychiatry-franchise/"
                style={{
                  color: "#b72821",
                  textDecoration: "none",
                  margin: "5px",
                }}
              >
                Neuropsychiatry PCD Pharma Franchise
              </a>
              business comes as an opportunity to enter in the pharma market by
              earning high returns and experience. Apart from this, we always
              help our clients to establish their business on a well platform.
              </Para>
            <ul>
              <li>
                Monopoly based pharma franchise business is all provided by us.
              </li>
              <li>
                Promotional tools for promotion and advertising the company
              </li>
              <li>Psycogen also provides complete marketing assistance</li>
              <li>Our company always works with complete transparency</li>
              <li>
                An exceptional logistics service is also given by our company
              </li>
            </ul>
          </Enquire>
        </Col>
        <Col2>
          <Sidebar>
            <Form>
              <H5>Inquire us</H5>
             <Name/>
              <br />
              <Email/>
              <br />
              <Phone/>
              <br />
             <City/>
              <br />
              <TextArea/>
              <Submit/>
              </Form>
            </Sidebar>
          </Col2>
      </Row>
    </Box>
    </EnquiryContainer>
  );
}
