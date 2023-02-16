import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Carousel from "../components/carousel/slider";
import Record from "../components/records/records";
import Inquire from "../components/enquiry/inquire";
import Image from "next/image";
import { Container,Row ,Col1,MainHeading,Para,Col2,Imagediv, SpanHead} from "../styles/Neuro.styled";
function Neuropsychiatry() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Container>
        <Row>
          <Col1>
            <MainHeading>
              Neuropsychiatry <SpanHead>PCD Franchise</SpanHead>
              in India
              </MainHeading>
            <Para>
              <b>Neuropsychiatry PCD Pharma Franchis </b> - The neuro issues are
              rising around the globe which is driving people to become aware
              about balance in lifestyle as well as mental stability, the
              requirement of neuro medicines are on its own pace. According to
              Data Bridge Market Research, the neurological disease
              pharmaceuticals market was valued at USD 79.40 billion in 2021 and
              is predicted to reach USD 125.60 billion by 2029, growing at a
              CAGR of 5.9 percent from 2022 to 2029. Therefore, many pharma
              companies with high proficiency in the neuropsychiatry field have
              started to deal with quality products and offering their
              <u> Best Neuropsychiatry Franchise in India.</u>
              <br />
              <br />
              <p>
                Psycogen Captab is also one of them that is offering the quality
                medicines to pharma professionals to start their own business
                through our top Neuropsychiatry PCD Franchise in India. We work
                as per guidelines laid by WHO and GMP in order to maintain the
                professional career in the market and also for matching the
                global standard of the products. The reputed
                <i> Neuropsychiatry Pharma Franchise Company</i> in India has
                been treating various kinds of brain disorders and always thinks
                about the well being of the society.
              </p>
              </Para>
            </Col1>
          <Col2>
            <Imagediv>
              <Image src="/neuropsychiatry.png" width="550" height="450" />
              </Imagediv>
            </Col2>
          </Row>
        </Container>
      <Record />
      <Inquire />
    </>
  );
}

export default Neuropsychiatry;
