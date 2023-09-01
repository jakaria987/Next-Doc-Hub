import About from "@/components/About/About";
import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Home/Framework/Framework";
import JoinCommunity from "@/components/Home/Banner/JoinComunity/JoinComunity";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <JoinCommunity/>
      <About />
    </main>
  );
};
export default HomePage;
