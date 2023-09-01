import About from '@/components/About/About';
import Banner from '@/components/Home/Banner/Banner';
import Image from 'next/image'
import ProrammingPage from './programmingDocs/page';
import JoinCommunity from '@/components/Home/Banner/JoinComunity/JoinComunity';
const HomePage=()=> {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage/>
      <JoinCommunity/>
      <About/>
    </main>
     
  )
}
export default HomePage;
