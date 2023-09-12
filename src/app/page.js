import Banner from "@/components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import Framework from "@/components/Home/Framework/Framework";


import JoinCommunity from "@/components/Home/Banner/JoinComunity/JoinComunity";
import About from "@/components/Home/About/About";

import ChatBot from "@/components/Home/ChatBot/Chatbot";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <JoinCommunity/>
      <ChatBot></ChatBot>
      <About />
    </main>
  );
};
export default HomePage;
