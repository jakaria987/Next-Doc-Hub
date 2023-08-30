import About from '@/components/About/About';
import AboutNextjs from '@/components/AboutNextjs';
import Banner from '@/components/Home/Banner/Banner';
import ProductionGradeFoundation from '@/components/Home/ProductionGradeFoundation/ProductionGradeFoundation';
import MiddleSection from '@/components/MiddleSection';
import Image from 'next/image'
const HomePage=()=> {
  return (
    <main>
      <Banner></Banner>
      <AboutNextjs></AboutNextjs>
      <ProductionGradeFoundation/>
      <MiddleSection/>
     <About></About>
    </main>
     
  )
}
export default HomePage;
