import { Section,Row,Col1,Image,Col2,Text,H6,P,Ul,Section2Container,MainDiv,Container,Para } from "./Styled/section2.styled";

function Section2() {
  return (
  //  <Section>
   
  //     <Row>
  //     <Section2Container>
  //       <Col1>
  //         <Image src="/img1.png" />
  //         </Col1>
  //       <Col2>
  //         <Text>
  //           <H6>Third Party Manufactuing Services</H6>
  //           <P>
  //             Established in 1999, Psycogen Captab has been leaving a remarkable
  //             sign in the pharma market with our services. Our organisation also
  //             offers best third party pharma manufacturing to the pharma
  //             companies at reasonable prices. Many top pharma franchises and
  //             other companies usually interacted with us to get quality
  //             pharmaceuticals through third party manufacturing. Our
  //             manufacturing takes place in the state-of-the-art plant that has
  //             unique infrastructure. It has separate sections for each type of
  //             tasks such as logistics, lamination, packaging and many more. Here
  //             are some highlights of our unit.
  //             </P>
            //   <Ul>
            //   <li>
            //     Advanced equipment and tools are being utilised for
            //     manufacturing.
            //   </li>
            //   <li>
            //     All the machineries are serviced and greased for better
            //     performance.
            //   </li>
            //   <li>
            //     The unit also gets sanitisation in order to maintain the quality
            //     and standard.
            //   </li>
            //   <li>
            //     It is backed by a highly skilled production team and other
            //     experts.
            //   </li>
            //   <li>
            //     At our company we always maintain the most demanded stock.
            //   </li>
            // </Ul>
  //           </Text>
  //         </Col2>
  //         </Section2Container>
  //       </Row>
       
  //     </Section>

      <MainDiv>
        <Container>
        <Image src="/img1.png" />
        <Text>
        <Para>
             <H6>Third Party Manufactuing Services</H6>
           <P>
            Established in 1999, Psycogen Captab has been leaving a remarkable
            sign in the pharma market with our services. Our organisation also
            offers best third party pharma manufacturing to the pharma
            companies at reasonable prices. Many top pharma franchises and
            other companies usually interacted with us to get quality
            pharmaceuticals through third party manufacturing. Our
            manufacturing takes place in the state-of-the-art plant that has
            unique infrastructure. It has separate sections for each type of
            tasks such as logistics, lamination, packaging and many more. Here
            are some highlights of our unit.
            </P>
        </Para>
        <Ul>
              <li>
                Advanced equipment and tools are being utilised for
                manufacturing.
              </li>
              <li>
                All the machineries are serviced and greased for better
                performance.
              </li>
              <li>
                The unit also gets sanitisation in order to maintain the quality
                and standard.
              </li>
              <li>
                It is backed by a highly skilled production team and other
                experts.
              </li>
              <li>
                At our company we always maintain the most demanded stock.
              </li>
            </Ul>
        </Text>
        </Container>
      </MainDiv>
  );
}

export default Section2;
