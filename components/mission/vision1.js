import {Row1,Row2,Col1,Col2,Col3,Section,Image,H3,P,Col4,H31,P1,Image1,Section2} from "../mission/Styled/vision1.styled"
export default function Vision1() {
  return (
    <Row1>
      <Col1>
        <Row2>
          <Col2>
            <Image src="/value1.jpg"/>
            </Col2>
          <Col3>
            <Section>
              <H3>Value</H3>
              <P>
                We believe that working under some set values is our moral code
                in the market. And we always value the health of mankind,
                keeping it on a priority basis. For this we follow the rules and
                regulations of WHO and GMP. We are emphasising on bringing the
                latest quality products and basically dealing with neuro
                products.
                </P>
              </Section>
            </Col3>
          </Row2>
        </Col1>
      <Col4>
        <Image1 src="/quality1.jpg"/>
        <Section2>
          <H31>Quality</H31>
          <P1>
            The organisation asserts that dealing with only quality medicines or
            other pharma products is totally equal to serving the society.
            </P1>
        </Section2>
        </Col4>
      </Row1>
  );
}
