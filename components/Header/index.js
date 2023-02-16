import React from 'react'
import { MainHeaderContainer , Container , Row , Col} from './Styled/Header.styled'
import Contacts from './Contacts'
import Icons from './Icons'
export default function Header() {
  return (
    <>
   <MainHeaderContainer>
     <Container>
        <Row>
          <Col>
          <Contacts/>
          <Icons/>
          </Col>
          </Row>
        </Container>
      </MainHeaderContainer>
    </>
  )
}
