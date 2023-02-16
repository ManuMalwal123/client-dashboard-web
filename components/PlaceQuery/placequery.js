import {React , useState} from 'react'
import {MainContainer,HeadingContainer,FormContainer,Ul,LiContainer,Li,Name,Email,Message,Send,ButtonDiv,HeadingContainerInner} from './Styled/placequery.styled'

export default function Placequery() {

  const [query,setQuery] = useState(false)
  return(
    <>
     <HeadingContainer onClick={() => setQuery(true)}>
        PLACE A QUERY
      </HeadingContainer>
      {query && (
        <div>
           <MainContainer>
        <HeadingContainerInner onClick={() => setQuery(false)}>
        PLACE A QUERY
      </HeadingContainerInner>
          <FormContainer>
          <Ul>
            <LiContainer>
              <Li>
                <Name/>
                <Email/>
              </Li>
            </LiContainer>
            <LiContainer>
              <Li>
                <Name/>
                <Email/>
              </Li>
            </LiContainer>
              <Li>
                <Message/>
              </Li>
            <LiContainer>
              <ButtonDiv>
                <Send>Send</Send>
              </ButtonDiv>
            </LiContainer>
          </Ul>
        </FormContainer>
        </MainContainer>
        </div>
      )}
    </>
  )
}
  
