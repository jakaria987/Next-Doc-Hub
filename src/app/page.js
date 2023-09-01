import About from "@/components/About/About";
import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Showcase/FrameWork/Framework";
const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <About />
    </main>
  );
};
export default HomePage;
