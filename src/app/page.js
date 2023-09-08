import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Home/Framework/Framework";
<<<<<<< HEAD
import Testimonials from "@/components/Testimonials/Testimonials";
// import TestimonialCaousel from "@/components/Home/Testimonial/TestimonialCarousel";
=======
import JoinCommunity from "@/components/Home/Banner/JoinComunity/JoinComunity";
import About from "@/components/Home/About/About";
>>>>>>> de4d4f17aaba4f27dc8cfa37eefe8c412f756693

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
<<<<<<< HEAD
      <About />
      <Testimonials></Testimonials>
      {/* <TestimonialCaousel></TestimonialCaousel> */}
    
=======
      <JoinCommunity/>
      <About/>
>>>>>>> de4d4f17aaba4f27dc8cfa37eefe8c412f756693
    </main>
  );
};
export default HomePage;
