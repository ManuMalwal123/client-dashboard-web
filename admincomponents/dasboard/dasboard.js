import { FLIGHT_MANIFEST } from 'next/dist/shared/lib/constants'
import Link from 'next/link'
import React,{useState} from 'react'
import { MainContainer,Navbar,Dropdown,DropdownContent,RightArrow,Container, Website,Span} from './Styled/dasboard.styled'
import { ContainerSideBar,H4,DivHeading ,LeftArrow,Phone1,ContainerDiv,Save} from './Styled/sidebar.styled'

function MainDashboard() {
    const [showResults, setShowResults] = useState(false)
    const [showButton , setShowButton] = useState(true)
    const [showDropdown , setShowDropdown] = useState(false)
    const [showInputDiv,setShowInputDiv] = useState(false)
  const open = () => setShowResults(true)
  const close = () => setShowResults(false)
  const vanish = () => setShowButton(false)
  const show = () => setShowButton(true)
  const dropdown = () => setShowDropdown(!showDropdown)
  const inputdiv = () => setShowInputDiv(true)
  return (
    <>
    <MainContainer>
    {showResults && (
   <ContainerSideBar>
    <DivHeading>
   <H4>WEB HOPERS</H4><LeftArrow src={"/left.svg"} onClick={()=>{close();show()}}/>
   </DivHeading>
   {showInputDiv && (
   <ContainerDiv>
   <Phone1></Phone1><Save>Save</Save>
   </ContainerDiv>)}
  </ContainerSideBar>)}
      <Container>
        <Navbar>
        {showButton && (<RightArrow src={"/right.svg"} onClick={()=>{open();vanish()}}/>)}
        <Dropdown  onClick={dropdown} >
          <Span>Select Page</Span>
          {showDropdown && (
            <DropdownContent>
            <Span onClick={inputdiv}>hello</Span>
            </DropdownContent>)}
        </Dropdown>
        </Navbar>
        <Website src={"http://localhost:3000/"} ></Website>
      </Container>
    </MainContainer>
    
    </>
  )
}

export default MainDashboard