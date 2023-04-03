import React from 'react'
import useSWR from 'swr'
import { MainHeaderContainer,HeaderContacts,ContactsContainer,Iconphone , Iconemail,
  Iconfacebook , Iconinstagram , Iconlinkedin , Iconpinterest , Icontwitter,SocialLink } 
  from '@components/Header/Styled/Header.styled'

export default function Contacts() {
  const id = "Header"
console.log(process.env.HOST_API)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`${process.env.HOST_API}/api/header/${id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data,"dattaaa")
  const result = data.getdatabyid
  const Value = result.value
  return (
    <>
    <MainHeaderContainer>
      <HeaderContacts>
        <ContactsContainer>
          <Iconphone/>  {Value.Mobile1} | {Value.Mobile2}
        </ContactsContainer>
        <ContactsContainer>
          <Iconemail/>  {Value.Email}
        </ContactsContainer>
        </HeaderContacts>
      <HeaderContacts>
      <ContactsContainer style={{textDecoration : "none !important" }}>
        <SocialLink href={Value.Facebook}>
        <Iconfacebook/>
        </SocialLink>
        </ContactsContainer> 
        <ContactsContainer style={{textDecoration : "none !important" }}>
        <SocialLink href={Value.Instagram}>
        <Iconinstagram/>
        </SocialLink>
        </ContactsContainer>
        <ContactsContainer style={{textDecoration : "none !important" }}>
        <SocialLink href={Value.LinkedIn}>
        <Iconlinkedin/> 
        </SocialLink>
        </ContactsContainer>
        <ContactsContainer style={{textDecoration : "none !important" }}>
        <SocialLink href={Value.Twitter}>
        <Icontwitter/>
        </SocialLink>
        </ContactsContainer>
        <ContactsContainer style={{textDecoration : "none !important" }}>
        <SocialLink href={Value.Pinterest}>
        <Iconpinterest/>
        </SocialLink>
        </ContactsContainer>  
      </HeaderContacts>
    </MainHeaderContainer>  
    </>
  )
}


