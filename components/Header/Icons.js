import React from 'react'

import { Social,Socialli,SocilaA,Iconfacebook,Iconinstagram,
    Iconlinkedin,Iconpinterest,Icontwitter } from './Styled/Icon.styled'

export default function Icons() {
  return (
    <>
    <Social>
              <Socialli>
                <SocilaA>
                  <Iconfacebook/>
                  </SocilaA>
                </Socialli>
              <Socialli>
                <SocilaA>
                 <Icontwitter/>
                </SocilaA>
                </Socialli>
              <Socialli>
                <SocilaA>
                  <Iconlinkedin/>
                </SocilaA>
                </Socialli>
              <Socialli>
                <SocilaA>
                  <Iconpinterest/>
                </SocilaA>
                </Socialli>
              <Socialli>
                <SocilaA>
                  <Iconinstagram/>
                </SocilaA>
                </Socialli>
              </Social>
    </>
  )
}
