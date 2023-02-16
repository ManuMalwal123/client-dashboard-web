import Items from "./items";
import image1 from "../../public/year.jpg";
import image2 from "../../public/produts.jpg";
import image3 from "../../public/customer.jpg";
import image4 from "../../public/staff.jpg";
import CountUp from 'react-countup';

import { Row,Col } from "./Styled/records.styled";

export default function Records() {
  return (
   <Row>
     <Col>
        <Items image={image1} title={<CountUp end={20} duration={3}/>} desc="YEARS EXPERIENCE" />
        </Col>
      <Col>
        <Items image={image2} title={<CountUp end={200} duration={3}/>} desc="PRODUCTS WE OFFER" />
        </Col>
      <Col>
        <Items image={image3} title={<CountUp end={625} duration={3}/>} desc="PARTNERS ASSOCIATED" />
        </Col>
      <Col>
        <Items image={image4} title={<CountUp end={5} duration={3}/>} desc="DIVISIONS" />
        </Col>
      </Row>
  );
}
