import Image from 'next/image'
import first from './1.png'
import second from './2.png'
import third from './elements.png'

const Book = () => {
    return (
        <>
            <div className="md:grid grid-cols-4 text-center md:ml-28 my-10">
                <div className="flex hover:scale-110 duration-500">
                <div className="bg-[#adadad] w-6 h-[300px] rounded-l-lg  shadow-lg">
                </div>
                <div className="bg-[#C6C6C6] w-60 h-[300px] hover:mr-3 duration-500">
                    
                    <h2 className="font-semibold text-xl text-white md:mt-8 text-left ml-5">How to build a <br /> full stack app with <br /> Next.js, Prisma and <br /> Postgres</h2>
                    <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p>
                    <Image className='w-20 h-15 ml-5 mt-12 brightness-200'  src={first}></Image>
                </div>
                <div className="bg-[#C6C6C6] w-2 h-76 rounded-e-md">
                </div>
                </div>
                <div className="flex hover:scale-110 duration-500">
                <div className="bg-[#343434] w-6 h-[300px] rounded-l-lg shadow-gray-400 border border-slate-700">
                </div>
                <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-300">
                    <h2 className="font-semibold text-xl text-white md:mt-8 text-left ml-5">Build a multi-tenant<br /> app with custom <br /> domains using <br /> Next.js</h2>
                    <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p>
                    <Image className='w-20 h-15 ml-5 mt-10 brightness-200'  src={second}></Image>
                </div>
                <div className="bg-[#343434] w-2 h-76 rounded-e-md">
                </div>
                </div>
                <div className="flex hover:scale-110 duration-500">
                <div className="bg-gray-400 w-6 h-[300px] rounded-l-lg">
                </div>
                <div className="bg-gray-300 w-60 h-[300px] hover:mr-3 duration-500">
                    <h2 className="font-semibold text-xl text-gray-600 md:mt-8 text-left ml-5">Integrating Next.js <br /> and contentful for <br /> your headless <br /> CMS <br /></h2>
                    <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p> <br />
                    <Image className='w-16 h-15 ml-5 mt-5 brightness-200'  src={third}></Image>
                </div>
                <div className="bg-gray-300 w-2 h-76 rounded-e-md">
                </div>
                </div>
                <div className="flex hover:scale-110 duration-500">
                <div className="bg-[#4e4e4e] w-6 h-[300px] rounded-l-lg">
                </div>
                <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-500">
                    <h2 className="font-semibold text-xl text-white md:mt-8 text-left ml-5">Using headless <br /> wordpress <br /> with <br /> Next.js & vercel<br /></h2>
                    <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p> <br />
                    <Image className='w-20 h-15 ml-5 mt-5 brightness-200'  src={first}></Image>
                </div>
                <div className="bg-[#343434] w-2 h-76 rounded-e-md">
                </div>
                </div>
            
            </div>
        </>
    );
};

export default Book;