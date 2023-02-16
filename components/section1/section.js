import Image from "next/image";
import {Main,Container,Row,Col1,Heading,Span,Minihead,Paragraph,Button,Col2,Imagediv} from "../section1/Styled/section.styled"

function Section() {
  return (
    <Main>
      <Container>
        <Row>
          <Col1>
            <Heading>
              Welcome To <Span>Psycogen Captab</Span>
              </Heading>
            <Minihead>
              Best Neuropsychiatry Pharma Company in India
              </Minihead>
            <Paragraph>
              Psycogen Captab is an ISO certified pharma company for
              neuropsychiatry medicines, that offers PCD Pharma Franchise and
              Third Party Manufacturing services for highest quality neuro
              products which are processed by the highly expert team of pharma
              professionals under the regulations of WHO and GMP to ensure the
              global standard and highly professionalism of our company.
              <br />
              <br />
              We are among the most reputed pharmaceutical companies based in
              Mohali that offers a wide range of DCGI and FSSAI approved pharma
              medicines, includeing; tablets, capsules, injectables, sofr
              gelatin, sachets, syrups and many more for Neuropsychiatry PCD
              Pharma Franchise. With the outstanding and transparent services we
              are able to make a reputable goodwill in the pharma market. Along
              with 300+ quality products Psycogen Captab has taken an initiative
              to make the society disease free.
              </Paragraph>
            <Button>Know More</Button>
            </Col1>
          <Col2>
           <Imagediv>
              <Image src="/../public/neuropsychiatry.png" width={550} height={450} />
            </Imagediv>
            </Col2>
          </Row>
        </Container>
      </Main>
  );
}

export default Section;
