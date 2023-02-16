import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Slider from "../components/carousel/slider";
import Section from "../components/section1/section";
import Records from "../components/records/records";
import Inquire from "../components/enquiry/inquire";
import Section2 from "../components/section2/section2";
import Vision from "../components/mission/vision";
import Vision1 from "../components/mission/vision1";
import WhyChoose from "../components/whychoose/WhyChoose";
import Products from "../components/products/products";
import GetIn from "../components/getintouch/GetIn";
import Footer from "../components/footer/footer";
import Query from "../components/Query/query";
import StickyButton from "../components/StickyButtons/StickyButton";
import BottomNav from "../components/BottomNav/BottomNav";
import Placequery from "../components/PlaceQuery/placequery";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <StickyButton/>
      <BottomNav/>
      <Placequery/>
      <Slider />
      {/* <Query/> */}
      <Section />
      <Records />
      <Inquire />
      <Section2 />
      <Vision />
      <Vision1 />
      <WhyChoose />
      <Products />
      <GetIn />
      <Footer />
    </>
  );
}
