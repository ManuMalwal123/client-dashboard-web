import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/footer/footer";
import { ContainerMain ,Container,H3,P,ContainerCards,InnerCardContainer,CardDiv,CardBody,Span1,HomeLink,ImageDiv} from "../../styles/Product.styled";
import StickyButton from "../../components/StickyButtons/StickyButton";
import useSWR from 'swr';
import Link from "next/link";

const fetcher = url => fetch(url).then(r => r.json())

export default function Products() {
  
  const {data , error} = useSWR('http://localhost:3002/api/web/product/get', fetcher)
  console.log(data)
 if(!data) return " I am loading...."
 if(error) return "error"
 console.log(data.data)


  const result = data.data.map((item) => {
    return(
      <div key={item.id}>
      <CardDiv>
      <ImageDiv>
      <img src={item.images} class="card-img-top" alt="..."/>
      </ImageDiv>
      <CardBody>
        <Link href={`/products/${item.id}`}>
      <p class="card-text">{item.name}</p></Link>
      </CardBody>
      </CardDiv>
      </div>
      
    )})

    return (
      <>
        <Header />
        <Navbar />
        <StickyButton/>
        <ContainerMain>
        <Container>
        <H3>Product</H3>
        </Container>
        <P><HomeLink href="/">Home</HomeLink><Span1>&gt;</Span1>Product</P>
        </ContainerMain>
        <ContainerCards>
        <InnerCardContainer>{result}
        </InnerCardContainer>
      </ContainerCards>
      <Footer />
    </>
  
    )
}
