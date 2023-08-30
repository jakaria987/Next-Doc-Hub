import About from '@/components/About/About';
import Banner from '@/components/Home/Banner/Banner';
import ProductionGradeFoundation from '@/components/Home/ProductionGradeFoundation/ProductionGradeFoundation';
import Image from 'next/image'
const HomePage=()=> {
  return (
    <main>
      <Banner></Banner>
      <ProductionGradeFoundation/>
      <About></About>
    </main>
     
  )
}
export default HomePage;
