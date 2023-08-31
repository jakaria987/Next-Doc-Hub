import About from '@/components/About/About';
import Banner from '@/components/Home/Banner/Banner';
import Image from 'next/image'
import ProrammingPage from './programmingDocs/page';
const HomePage=()=> {
  return (
    <main>
      <Banner></Banner>
      {/* <About></About> */}
      <ProrammingPage/>
      <About/>
    </main>
     
  )
}
export default HomePage;
