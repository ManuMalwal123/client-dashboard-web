import Heading from "./heading";
import { Container,Row,Col1,CardGroup,CardImageTop,Card,
  Title,Para,Col2,Col3,Col4,Section,Vis,Text,Image } from "./Styled/vision.styled";

function Vision() {
  return (
    <Container>
      <Heading />
      <Row>
        <Col1>
          <CardGroup>
            <CardImageTop src="/mission1.jpg" />
            <Card>
              <Title>Mission</Title>
              <Para>
                Bringing transformation in the health sector with quality
                treatment is our main mission. With this we are running our
                company and contributing in the health sector with quality
                pharmaceuticals.
                </Para>
              </Card>
            </CardGroup>
          </Col1>

       <Col2>
         <Col3>
            <Col4>
              <Section>
                <Vis>Vision</Vis>
                <Text>
                  Psycogen always keeps its vision on society and puts every
                  single effort into keeping it well and disease free. Working
                  with an ethical approach and bringing new innovation in the
                  health sector are also one of our visions.
                </Text>
                </Section>
              </Col4>
            <Image src="/vision1.jpg"  />
            </Col3>
          </Col2>
        </Row>
      </Container>
  );
}

export default Vision;
