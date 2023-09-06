import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Home/Framework/Framework";
import JoinCommunity from "@/components/Home/Banner/JoinComunity/JoinComunity";
import About from "@/components/Home/About/About";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <JoinCommunity/>
      <About/>
    </main>
  );
};
export default HomePage;
