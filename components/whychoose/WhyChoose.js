import {Choose,Container,Col1,H3,H4,P,Row,Col2,Image,Section,Who,Text,ImageBox} from "../whychoose/Styled/Choose.styled"

function WhyChoose() {
  return (
    <Choose>
      <Container>
        <Col1>
          <H3>Why Choose us</H3>
          <H4>
            We are Serious About Patient's Health & Our Collaborators!
            </H4>
          <P>
            The main purpose of the company to eradicate mental illness from the
            nation.Psycogen Captabis a customer-centric Franchise Company who is
            delivering formulations in the market to satisfy the needs of its
            customers. We will serve every nook of the globe to eliminate this
            mental sickness from the world. Our diligent team and modern
            equipped production unit are helping us in disseminating the Neuro
            medications in the market.
            </P>
          </Col1>

        <Row>
          <Col2>
          <ImageBox>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_who_white.webp" />
            </ImageBox>
            <Section>
              <Who>WHO Certified Company</Who>
              <Text>
                By working under the guidelines laid by WHO and GMP we are able
                to match the global standard of the company. This represents our
                company's professionalism in the market and always strives to
                keep us globally known.
              </Text>
              </Section>
            </Col2>

          <Col2>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_certified_white.webp" />
            <Section>
              <Who>ISO 9001:2015 Certified Company</Who>
              <Text>
                Being an ISO-certified company is another proof that we are a
                well-recognized and authorized company of India that follows all
                the rules and regulations laid by The Indian Healthcare
                Government.
              </Text>
              </Section>
            </Col2>

          <Col2>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_packaging_white.webp" />
            <Section>
              <Who>Packing</Who>
              <Text>
                In order to keep the products safe from any kind of leakage and
                damage to the products, our packaging team packs the products in
                an accurate way. This represents the standard of the overall
                products as well as increases the long shelf life of the
                products.
              </Text>
              </Section>
            </Col2>
          </Row>

        <Row>
          <Col2>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_quality_white.webp" />
            <Section>
              <Who>Our Quality Approach</Who>
              <Text>
                Psycogen Captab is a quality oriented company that always keeps
                its vision on dealing with quality products. In order to provide
                an effective range of neuropsychiatry medicines our quality team
                ensures the quality of our products while manufacturing.
              </Text>
              </Section>
            </Col2>

          <Col2>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_dedicated_workforce_white.webp" />
            <Section>
              <Who>Specialist Staff</Who>
              <Text>
                Our company is backed by well educated and highly experienced
                staff that works on each step easier for us and our clients. By
                working tirelessly at the place they are contributing to our
                goodwill.
              </Text>
              </Section>
            </Col2>

            <Col2>
            <Image src="https://www.psycogen.in/wp-content/uploads/2022/07/ic_ethics_white.webp" />
            <Section>
              <Who>Ethics</Who>
              <Text>
                The organisation totally believes in ethics set by our
                healthcare sector and always puts more emphasis on spreading
                awareness by quality products and services. The major ethic of
                our company is the transparency while dealing that attracts the
                more to our clients.
              </Text>
              </Section>
            </Col2>
          </Row>
        </Container>
      </Choose>
  );
}

export default WhyChoose;
