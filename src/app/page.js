import Banner from "../components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "../components/Home/Framework/Framework";
import JoinCommunity from "../components/Home/Banner/JoinComunity/JoinComunity";
import Chatbot from "@/components/Home/ChatBot/Chatbot";
import About from "@/components/Home/About/About";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <JoinCommunity />
      <About />
      <Chatbot></Chatbot>
    </main>
  );
};
export default HomePage;
