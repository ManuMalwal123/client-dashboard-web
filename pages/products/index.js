import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/footer/footer";
import {
  ContainerMain,
  Container,
  H3,
  P,
  ContainerCards,
  InnerCardContainer,
  CardDiv,
  CardBody,
  Span1,
  HomeLink,
  ImageDiv,
} from "../../styles/Product.styled";
import StickyButton from "../../components/StickyButtons/StickyButton";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error } = useSWR(
    "http://localhost:3002/api/web/product/get",
    fetcher
  );
  if (!data) return " I am loading....";
  if (error) return "error";

  const result = data.data.map((item) => {
    return (
      <div key={item.id}>
        <CardDiv>
          <ImageDiv>
            <Image src={item.images} className="card-img-top" alt="card" />
          </ImageDiv>
          <CardBody>
            <Link href={`/products/${item.id}`}>
              <p className="card-text">{item.name}</p>
            </Link>
          </CardBody>
        </CardDiv>
      </div>
    );
  });

  return (
    <>
      <Header />
      <Navbar />
      <StickyButton />
      <ContainerMain>
        <Container>
          <H3>Product</H3>
        </Container>
        <P>
          <HomeLink href="/">Home</HomeLink>
          <Span1>&gt;</Span1>Product
        </P>
      </ContainerMain>
      <ContainerCards>
        <InnerCardContainer>{result}</InnerCardContainer>
      </ContainerCards>
      <Footer />
    </>
  );
}
