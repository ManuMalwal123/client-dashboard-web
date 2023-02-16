import { Card,Container,Col1,Div1,Div2,Div3,Span1,Span2,P,IconImage } from "./Styled/records.styled";
import Image from "next/image";

export default function Items(props) {
  console.log(props);
  return (
    <Card>
      <Container>
        <Col1>
          <Div1><Image src={props.image} /></Div1>
          <Div2>
            <Div3><Span1>{props.title}</Span1>
              <Span2>+</Span2>
              </Div3>
           <P>{props.desc}</P>               
            </Div2>
          </Col1>
        </Container>
      </Card>
  );
}
