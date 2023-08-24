import Image from 'next/image'
import first from './1.png'
import second from './2.png'
import third from './elements.png'
const Book = () => {
    return (
        < >
            <div className=' mt-20'>
                <h1 className=' md:text-3xl text-2xl md:ml-28 ml-12 font-bold mb-6 '>Discover what's possible</h1>
                <div className="md:grid md:grid-cols-4  text-center md:ml-28 my-10 ml-14">
                   <a href="https://vercel.com/guides/nextjs-prisma-postgres" target='blank'>
                   <div className="flex hover:scale-110 duration-500">
                        <div className="bg-[#adadad] w-6 h-[300px] rounded-l-lg  shadow-lg">
                        </div>
                        <div className="bg-[#C6C6C6] w-60 h-[300px] hover:mr-3 duration-500">

                            <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">How to build a <br /> full stack app with <br /> Next.js, Prisma and <br /> Postgres</h2>
                            <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p>
                            <Image className='w-20 h-15 ml-5 mt-12 brightness-200' src={first}></Image>
                        </div>
                        <div className="bg-[#C6C6C6] w-2 h-76 rounded-e-md">
                        </div>
                    </div>
                   </a>
                    <a href="https://vercel.com/guides/nextjs-multi-tenant-application" target='blank'>
                    <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
                        <div className="bg-[#343434] w-6 h-[300px] rounded-l-lg shadow-gray-400 border border-slate-700">
                        </div>
                        <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-300">
                            <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">Build a multi-tenant<br /> app with custom <br /> domains using <br /> Next.js</h2>
                            <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p>
                            <Image className='w-20 h-15 ml-5 mt-10 brightness-200' src={second}></Image>
                        </div>
                        <div className="bg-[#343434] w-2 h-76 rounded-e-md">
                        </div>
                    </div>
                    </a>
                    <a href="https://vercel.com/guides/integrating-next-js-and-contentful-for-your-headless-cms" target='blank'>
                    <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
                        <div className="bg-gray-400 w-6 h-[300px] rounded-l-lg">
                        </div>
                        <div className="bg-gray-300 w-60 h-[300px] hover:mr-3 duration-500">
                            <h2 className="font-semibold text-xl text-gray-600 md:mt-8 mt-5 text-left ml-5">Integrating Next.js <br /> and contentful for <br /> your headless <br /> CMS <br /></h2>
                            <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p> <br />
                            <Image className='w-16 h-15 ml-5 mt-5 brightness-200' src={third}></Image>
                        </div>
                        <div className="bg-gray-300 w-2 h-76 rounded-e-md">
                        </div>
                    </div>
                    </a>
                    <a href="https://vercel.com/guides/wordpress-with-vercel" target='blank'>
                    <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
                        <div className="bg-[#4e4e4e] w-6 h-[300px] rounded-l-lg">
                        </div>
                        <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-500">
                            <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">Using headless <br /> wordpress <br /> with <br /> Next.js & vercel<br /></h2>
                            <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p> <br />
                            <Image className='w-20 h-15 ml-5 mt-5 brightness-200' src={first}></Image>
                        </div>
                        <div className="bg-[#343434] w-2 h-76 rounded-e-md">
                        </div>
                    </div>
                    </a>

                </div>
                <div className=' md:ml-36 ml-28 md:mt-16 mt-10'>
                    <button className=' border border-gray-400 px-5 py-3 rounded-md'>View All Guides</button>
                    <button className=' bg-black px-4 py-3 rounded-md text-white md:ml-4 md:mt-0 mt-3'>Talk to an Expert</button>
                </div>
            </div>
        </>
    );
};

export default Book;
// 'use client'
// import React from 'react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import Image from 'next/image';
// import first from './1.png';
// import second from './2.png';
// import third from './elements.png';

// SwiperCore.use([Navigation, Pagination]);

// const Book = () => {
//     return (
//         <div className='mt-20'>
//             <h1 className='md:text-3xl text-2xl md:ml-28 ml-12 font-bold mb-6'>Discover what's possible</h1>
//             <Swiper
//                 slidesPerView={1} // Display one slide at a time on mobile
//                 spaceBetween={20} // Space between slides
//                 navigation // Enable navigation arrows
//                 pagination={{ clickable: true }} // Enable pagination bullets
//                 className='md:ml-28 my-10 ml-14'
//             >
//                 {/* Book 1 */}
//                 <SwiperSlide>
//                     <a href="https://vercel.com/guides/nextjs-prisma-postgres" target='_blank' rel='noopener noreferrer'>
//                         <div className="flex hover:scale-110 duration-500">
//                             <div className="bg-[#adadad] w-6 h-[300px] rounded-l-lg shadow-lg"></div>
//                             <div className="bg-[#C6C6C6] w-60 h-[300px] hover:mr-3 duration-500">
//                                 <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">
//                                     How to build a <br /> full stack app with <br /> Next.js, Prisma and <br /> Postgres
//                                 </h2>
//                                 <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p>
//                                 <Image className='w-20 h-15 ml-5 mt-12 brightness-200' src={first} alt='Book 1' />
//                             </div>
//                             <div className="bg-[#C6C6C6] w-2 h-76 rounded-e-md"></div>
//                         </div>
//                     </a>
//                 </SwiperSlide>

//                 {/* Book 2 */}
//                 <SwiperSlide>
//                     <a href="https://vercel.com/guides/nextjs-multi-tenant-application" target='_blank' rel='noopener noreferrer'>
//                         <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
//                             <div className="bg-[#343434] w-6 h-[300px] rounded-l-lg shadow-gray-400 border border-slate-700"></div>
//                             <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-300">
//                                 <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">
//                                     Build a multi-tenant<br /> app with custom <br /> domains using <br /> Next.js
//                                 </h2>
//                                 <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p>
//                                 <Image className='w-20 h-15 ml-5 mt-10 brightness-200' src={second} alt='Book 2' />
//                             </div>
//                             <div className="bg-[#343434] w-2 h-76 rounded-e-md"></div>
//                         </div>
//                     </a>
//                 </SwiperSlide>

//                 {/* Book 3 */}
//                 <SwiperSlide>
//                     <a href="https://vercel.com/guides/integrating-next-js-and-contentful-for-your-headless-cms" target='_blank' rel='noopener noreferrer'>
//                         <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
//                             <div className="bg-gray-400 w-6 h-[300px] rounded-l-lg"></div>
//                             <div className="bg-gray-300 w-60 h-[300px] hover:mr-3 duration-500">
//                                 <h2 className="font-semibold text-xl text-gray-600 md:mt-8 mt-5 text-left ml-5">
//                                     Integrating Next.js <br /> and contentful for <br /> your headless <br /> CMS
//                                 </h2>
//                                 <p className="text-gray-500 text-left ml-5">Build, Deployment & Git</p> <br />
//                                 <Image className='w-16 h-15 ml-5 mt-5 brightness-200' src={third} alt='Book 3' />
//                             </div>
//                             <div className="bg-gray-300 w-2 h-76 rounded-e-md"></div>
//                         </div>
//                     </a>
//                 </SwiperSlide>

//                 {/* Book 4 */}
//                 <SwiperSlide>
//                     <a href="https://vercel.com/guides/wordpress-with-vercel" target='_blank' rel='noopener noreferrer'>
//                         <div className="flex hover:scale-110 duration-500 mt-4 md:mt-0">
//                             <div className="bg-[#4e4e4e] w-6 h-[300px] rounded-l-lg"></div>
//                             <div className="bg-[#343434] w-60 h-[300px] hover:mr-3 duration-500">
//                                 <h2 className="font-semibold text-xl text-white md:mt-8 mt-5 text-left ml-5">
//                                     Using headless <br /> wordpress <br /> with <br /> Next.js & vercel
//                                 </h2>
//                                 <p className="text-gray-400 text-left ml-5">Build, Deployment & Git</p> <br />
//                                 <Image className='w-20 h-15 ml-5 mt-5 brightness-200' src={first} alt='Book 4' />
//                             </div>
//                             <div className="bg-[#343434] w-2 h-76 rounded-e-md"></div>
//                         </div>
//                     </a>
//                 </SwiperSlide>
//             </Swiper>

//             <div className='md:ml-36 ml-28 md:mt-16 mt-10'>
//                 <button className='border border-gray-400 px-5 py-3 rounded-md'>View All Guides</button>
//                 <button className='bg-black px-4 py-3 rounded-md text-white md:ml-4 md:mt-0 mt-3'>Talk to an Expert</button>
//             </div>
//         </div>
//     );
// };

// export default Book;
