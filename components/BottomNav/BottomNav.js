import React from 'react'

import { MainContainer,InnerContainer,Container,ImageIcon,ImageContainer,P} from './Styled/bottomnav.styled'

export default function BottomNav() {
  return (
    <>
        <MainContainer>
            <InnerContainer>
                <Container>
                <ImageContainer>
                <ImageIcon src = "/images/home.png" width={50} height={30} />
                </ImageContainer>
                <P>Home</P>
                </Container>
                <Container>
                <ImageContainer>
                <ImageIcon src = "/images/category.png" width={50} height={30} />
                </ImageContainer>
                <P>Categories</P>
                </Container>
                <Container>
                <ImageContainer>
                <ImageIcon src = "/images/call.png" width={50} height={30} />
                </ImageContainer>
                <P>Call</P>
                </Container>
                <Container>
                <ImageContainer>
                <ImageIcon src = "/images/whatsappicon.png" width={50} height={30} />
                </ImageContainer>
                <P>Whatsapp</P>
                </Container>
                <Container>
                <ImageContainer>
                <ImageIcon src = "/images/emailicon.png" width={50} height={30} />
                </ImageContainer>
                <P>Email</P>
                </Container>
            </InnerContainer>
        </MainContainer>
    </>
  )
}
