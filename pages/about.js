import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/footer/footer";
import Image from "next/image";
import { ContainerFluid,Container,Row,Col1,Heading,Paragraph,Col2,ImageBorder,Col3,Para,Text,HSpan,ImageDiv} from "../styles/About.styled";

function About() {
  return (
    <>
      <Header />
      <Navbar />
      <ContainerFluid>
        <ImageDiv>
        <Image
          width={1900}
          height={500}
          src="/images/about.jpg"
        />
        </ImageDiv>
        <Container>
          <Row>
           <Col1>
             <Heading>About <HSpan>Psycogen Captab</HSpan></Heading>
            <Paragraph>
                Started in 1994, Psycogen Captab has left a significant remark
                of its presence in the market since we always deal with clear
                vision and transparency. This attracts the clients most since we
                know their value and we are familiar with their great enthusiasm
                and always put every single effort into keeping their business
                on a path of high growth.
                </Paragraph>
              <br />

              <Paragraph>
                Our organisation is dealing with various forms of businesses
                such as PCD companies, distributors, doctors, medical
                specialists and many others. We are strived to provide our
                people with a conscious mind and free from any kind of brain
                disorder.
                </Paragraph>
              <br />

              <Paragraph>
                Thus, we are considered as a genuine pharma company that deals
                with the quality of neuro medicines. We usually interact with
                some leading pharma companies and share each other's ideas,
                think about changes which are needed for society’s welfare and
                then bring quality products
                </Paragraph>
              <br />

              <Paragraph>
                Along with the intention of creating new business opportunities,
                Psycogen Captab is offering the neuropsychiatry franchise
                business in each corner of the nation. We have been experiencing
                this pharma industry for the last 24 years since then we always
                strive to bring new innovation in the pharma market.
                </Paragraph>
              </Col1>
            <Col2>
              <ImageBorder>
                <Image
                  src="/images/psycocaptab.png"
                  width="750"
                  height="700"
                />
              </ImageBorder>
              </Col2>
            </Row>
        </Container>
        
        <Col3>
        <div>
          <Para>
            We have seen that in today’s world various new neuro issues are
            rising and that becomes a major concern in the pharma market. Our
            company deals with all medicines which are found to be effective
            against the issues. That includes; depression, anxiety,
            schizophrenia, anxiety, migraine, panic disorder, separation anxiety
            disorder and many others.
            </Para>
          <br />
          
          <Text>
            We are mainly focusing on treating a wide range of mental disorders
            with our medicines and for that we have well qualified experts.
            </Text>
            </div>
            
          </Col3>
        <Footer />
        </ContainerFluid>
    </>
  );
}

export default About;
