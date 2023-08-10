import AboutNextjs from '@/components/AboutNextjs';
import Banner from '@/components/Home/Banner/Banner';
import MiddleSection from '@/components/Home/MiddleSection/MiddleSection';
import ProductionGradeFoundation from '@/components/Home/ProductionGradeFoundation/ProductionGradeFoundation';
import Image from 'next/image'

const HomePage=()=> {
  return (
    <main>
      <Banner></Banner>
      <AboutNextjs></AboutNextjs>
      <ProductionGradeFoundation/>
      <MiddleSection/>
    </main>
     
  )
}
export default HomePage;
