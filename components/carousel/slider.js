import Image from "next/image";
import { CarouselContainer,CarouselIndicator,ButtonSlider1,ButtonSlider2,CarouselInner,CarouselItemActive,CarouselItem,CarouselControlNext,ContainerCarousel,
  CarouselControlPrev,CarouselPrevIcon,CarouselNextIcon,VisuallyHidden} from "./Styled/carousel.styled";

const Slider = () => {
  return (
    <ContainerCarousel>
    <CarouselContainer>
      <CarouselIndicator>
       <ButtonSlider1/>
        <ButtonSlider2/>
      </CarouselIndicator>

      <CarouselInner>
        <CarouselItemActive>
          <Image
            src="/../public/banner2.jpg"
            width={1900}
            height={700}
            className="d-block w-100"
            alt="banner2"
          />
        </CarouselItemActive>
        <CarouselItem>
          <Image
            src="/../public/banner1.jpg"
            width={1900}
            height={700}
            className="d-block w-100"
            alt="banner1"
          />
        </CarouselItem>
        </CarouselInner>
      <CarouselControlPrev>
        <CarouselPrevIcon/>
       <VisuallyHidden>Previous</VisuallyHidden>
        </CarouselControlPrev>
        <CarouselControlNext>
       <CarouselNextIcon/>
        <VisuallyHidden>Next</VisuallyHidden>
        </CarouselControlNext>
      </CarouselContainer>
      </ContainerCarousel>
  );
};

export default Slider;
