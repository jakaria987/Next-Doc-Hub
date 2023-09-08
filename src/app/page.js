import About from "@/components/About/About";
import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Home/Framework/Framework";
import Testimonials from "@/components/Testimonials/Testimonials";
// import TestimonialCaousel from "@/components/Home/Testimonial/TestimonialCarousel";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <About />
      <Testimonials></Testimonials>
      {/* <TestimonialCaousel></TestimonialCaousel> */}
    
    </main>
  );
};
export default HomePage;
