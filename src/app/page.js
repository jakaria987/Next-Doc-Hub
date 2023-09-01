import About from "@/components/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Image from "next/image";
import ProrammingPage from "./programmingDocs/page";
import ExtraSection from "@/components/Home/ExtraSection/ExtraSection";
const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <ExtraSection />
      <About />
    </main>
  );
};
export default HomePage;
