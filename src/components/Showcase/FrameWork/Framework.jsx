"use client";
import React from 'react';
import Image from 'next/image'
import loomLogo from "./pngegg.png"
import loom from "./loom-illustration.svg"
import plexLogo from "./plex-illustration.svg"
import plex from "./plex.svg"
import washington from "./DU14hOvXcAA-w5V.jpg"
import mrBeast from "./mrbeast-picture.avif"
import basement from "./basement-stickers.svg"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const Framework = () => {
    return (
        <div className=' mt-14'>
            <h1 className='md:text-6xl text-center mb-4 text-3xl'>
                <span className="bg-gradient-to-r from-gray-600 via-gray-500 font-bold to-black text-transparent bg-clip-text">
                    The essential web framework <br /> for impactful modifications
                </span>
            </h1>

            <p className='md:text-2xl mb-14 text-gray-500 text-center'>Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.</p>
            <div className='hidden sm:block px-20'>
                <div className='grid grid-cols-3 gap-5 items-center justify-center'>
                    <a href="https://vercel.com/customers/loom-headless-with-nextjs" target='blank' className=' shadow-md'>
                        <div
                            className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                        >
                            <div
                                className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                            >
                                <div>
                                    <div
                                        className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-7 transform transition duration-300 ease-in-out"
                                    >


                                        <div className=" flex gap-3 text-black">
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>Preview</h4>
                                                <p className=' text-sm text-gray-500'>deployed seamlessly</p>
                                            </div>
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>Fast Loads</h4>
                                                <p className=' text-sm text-gray-500'>via Image Optimization</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt=""
                                className="object-cover w-[80%] relative ml-40 mb-"
                                src={loom}
                            />
                            <div className=" text-black font-bold absolute bottom-28 left-4">
                                <div className='flex items-center gap-3'>
                                    <Image width={40} height={40} src={loomLogo}></Image>
                                    <span className=' text-3xl'>loom</span>
                                </div>
                                <p className=' mt-4'>With Next.js, Vercel, and Sanity, Loom empowers every team to iterate</p>
                            </div>
                        </div>
                    </a>
                    <div
                        className="overflow-hidden h-full w-[440px]  aspect-video  cursor-pointer rounded-md relative group row-span-2 border shadow-md"
                    >
                        <a href="https://vercel.com/blog/aws-and-vercel-accelerating-innovation-with-serverless-computing" target='blank'>
                            <div
                                className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                            >
                                <div>
                                    <div
                                        className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-7 transform transition duration-400 ease-in-out"
                                    >


                                        <div className=" flex gap-3 text-black ">
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>5 Bilion+</h4>
                                                <p className=' text-sm text-gray-500'>Lambda invocations per week</p>
                                            </div>
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>Lighting-Fast</h4>
                                                <p className=' text-sm text-gray-500'>Tumaround on developing new features</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt=""
                                className="h-[60%] w-[60%] relative ml-40"
                                src={washington}
                            />
                            <div className=" text-black font-bold absolute bottom-28 left-4 mb-5">
                                <p className=' text-[22px] text-gray-700'>AWS and Vercel: Accelerating innovation with serverless computing</p>
                            </div>
                        </a>
                    </div>

                    <a href="https://vercel.com/blog/serving-millions-of-users-on-the-new-mrbeast-storefront" target='blank'  className=' shadow-md'>
                        <div
                            className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                        >
                            <div
                                className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                            >
                                <div>
                                    <div
                                        className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out"
                                    >


                                        <div className=" flex gap-3 text-black ">
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>Preview</h4>
                                                <p className=' text-sm text-gray-500'>deployed seamlessly</p>
                                            </div>
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>Fast Loads</h4>
                                                <p className=' text-sm text-gray-500'>via Image Optimization</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt=""
                                className="object-cover w-[50%] ml-[217px] brightness-50 relative "
                                src={mrBeast}
                            />
                            <div className=" text-black font-bold absolute bottom-28 left-4">
                                <p className=' text-3xl mb-2'>Mr Beast</p>
                                <p>Serving millions of users on the new MrBeast storefront</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://vercel.com/blog/how-plex-6x-their-impressions-deploying-next-js-on-vercel" target='blank'  className=' shadow-md'>
                        <div
                            className="overflow-hidden  aspect-video  cursor-pointer rounded-md relative group border"
                        >
                            <div
                                className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                            >
                                <div>
                                    <div
                                        className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                                    >


                                        <div className=" flex gap-3 text-black ">
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>40% less</h4>
                                                <p className=' text-sm text-gray-500'>lines of code</p>
                                            </div>
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>On-Demand ISR</h4>
                                                <p className=' text-sm text-gray-500'>For faster data propagation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    alt=""
                                    className="object-cover"
                                    src={plexLogo}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-300 to-transparent opacity-50"></div>
                            </div>


                            <div className=" text-black font-bold absolute bottom-28 left-4">
                                <div className=' mb-3' >
                                    <Image width={90} height={90} src={plex}></Image>
                                </div>
                                <p>How Plex 6x their impressions deploying Next.js on Vercel</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://vercel.com/blog/navigating-tradeoffs-in-large-scale-website-migrations" target='blank'  className=' shadow-md'>
                        <div
                            className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                        >
                            <div
                                className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                            >
                                <div>
                                    <div
                                        className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6 transform transition duration-300 ease-in-out"
                                    >


                                        <div className=" flex gap-3 text-black ">
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>79-90</h4>
                                                <p className=' text-sm text-gray-500'>Real Exprience Store</p>
                                            </div>
                                            <div className='border-2 p-3 rounded-md'>
                                                <h4 className=' text-[18px] font-bold'>5 Minute</h4>
                                                <p className=' text-sm text-gray-500'>Build times</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                alt=""
                                className="object-cover w-[60%] h-[50%] ml-40 relative "
                                src={basement}
                            />
                            <div className=" text-black absolute bottom-28 left-4">


                                <p className=' text-3xl font-bold mb-2'>Basement.</p>

                                <p className=' font-semibold'>Navigating tradeoffs in large- scale website migrations</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=' text-center flex items-center justify-center mt-16 gap-4'>
                    <p className=' text-xl text-gray-600'>Find out what Next.js can do for your business</p>
                    <Link href="https://vercel.com/contact/sales" >
                    <button className='bg-black px-4 py-3 text-white rounded-md'>Contact Sales</button>
                    </Link>
                </div>
            </div>
            <div className='block sm:hidden'>
                <Carousel  showThumbs={false}>
                    {/* Carousel item 1 */}
                    <div
                        className="overflow-hidden h-[350px] w-full cursor-pointer rounded-md relative group border"
                    >
                        <a href="">
                            <Image
                                alt=""
                                className="object-cover relative h-full"
                                src={loom}
                            />
                            <div className=" text-black font-bold absolute bottom-36 left-4">
                                <div className='flex items-center gap-3 justify-center'>
                                    <div className='h-8 w-[aspect-1.2]'>
                                        <Image className='h-full w-full' src={loomLogo}></Image>
                                    </div>
                                    <span className='text-3xl'>loom</span>
                                </div>
                                <p className=' mt-4 overflow-hidden'>With Next.js, Vercel, and Sanity, Loom empowers every team to iterate</p>
                            </div>
                            <div className=' absolute bottom-6'>
                                <div className=" flex gap-3 text-black ml-5">
                                    <div className='border-2 p-3 rounded-md'>
                                        <h4 className=' text-[18px] font-bold'>Preview</h4>
                                        <p className=' text-sm text-gray-500'>deployed seamlessly</p>
                                    </div>
                                    <div className='border-2 p-3 rounded-md'>
                                        <h4 className=' text-[18px] font-bold'>Fast Loads</h4>
                                        <p className=' text-sm text-gray-500'>via Image Optimization</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        {/* Carousel item 2 */}
                        <div
                            className="overflow-hidden h-[350px] w-full cursor-pointer rounded-md relative group border"
                        >
                            <a href="https://vercel.com/blog/aws-and-vercel-accelerating-innovation-with-serverless-computing" target='blank'>
                                <Image
                                    alt=""
                                    className="h-full w-full relative ml-40"
                                    src={washington}
                                />
                                <div className=" text-black font-bold absolute top-14 left-4 mb-5">
                                    <p className=' text-[22px] text-gray-700'>AWS and Vercel: Accelerating innovation with serverless computing</p>
                                </div>
                                <div
                                    className='absolute bottom-6 ml-3'>
                                    <div className=" flex gap-3 text-black ">
                                        <div className='border-2 p-2 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>5 Bilion+</h4>
                                            <p className=' text-sm text-gray-500'>Lambda invocations per week</p>
                                        </div>
                                        <div className='border-2 p-2 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>Lighting-Fast</h4>
                                            <p className=' text-sm text-gray-500'>Tumaround on developing new features</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        {/* Carousel item 3 */}
                        <div
                            className="overflow-hidden h-[350px] w-full cursor-pointer rounded-md relative group border"
                        >
                            <a href="https://vercel.com/blog/serving-millions-of-users-on-the-new-mrbeast-storefront" target='blank'>
                                <div
                                    className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                                >
                                    <Image
                                        alt=""
                                        className="object-cover w-[50%] ml-[217px] brightness-50 relative "
                                        src={mrBeast}
                                    />
                                    <div className=" text-black font-bold absolute bottom-16 left-4">
                                        <p className=' text-3xl mb-2'>Mr Beast</p>
                                        <p>Serving millions of users on the new MrBeast storefront</p>
                                    </div>
                                </div>
                                <div
                                    className="absolute bottom-6 ml-3"
                                >
                                    <div className=" flex gap-3 text-black ">
                                        <div className='border-2 p-3 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>Preview</h4>
                                            <p className=' text-sm text-gray-500'>deployed seamlessly</p>
                                        </div>
                                        <div className='border-2 p-3 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>Fast Loads</h4>
                                            <p className=' text-sm text-gray-500'>via Image Optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>

                    </div>
                    {/* Add more carousel items as needed */}
                    <div>
                        <div
                            className="overflow-hidden h-[350px] w-full cursor-pointer rounded-md relative group border"
                        >
                            <a href="https://vercel.com/blog/serving-millions-of-users-on-the-new-mrbeast-storefront" target='blank'>
                                <div
                                    className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                                >
                                    <div className="relative">
                                        <Image
                                            alt=""
                                            className="object-cover"
                                            src={plexLogo}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-300 to-transparent opacity-50"></div>
                                    </div>
                                    <div className=" text-black font-bold absolute bottom-14 left-4">
                                        <div className='h-8 w-[aspect-1.2]'>
                                            <Image className='h-full w-full' src={plex}></Image>
                                        </div>
                                        <p>How Plex 6x their impressions deploying Next.js on Vercel</p>
                                    </div>
                                </div>
                                <div
                                    className="absolute bottom-6 ml-5"
                                >
                                    <div className=" flex gap-3 text-black ">
                                        <div className='border-2 p-3 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>40% less</h4>
                                            <p className=' text-sm text-gray-500'>lines of code</p>
                                        </div>
                                        <div className='border-2 p-3 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>On-Demand ISR</h4>
                                            <p className=' text-sm text-gray-500'>For faster data propagation</p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div>
                        <div
                            className="overflow-hidden h-[350px] w-full cursor-pointer rounded-md relative group border"
                        >
                            <a href="https://vercel.com/blog/serving-millions-of-users-on-the-new-mrbeast-storefront" target='blank'>
                                <div
                                    className="overflow-hidden  aspect-video cursor-pointer rounded-md relative group border"
                                >
                                    <Image
                                        alt=""
                                        className="object-cover w-[50%] ml-[217px] relative "
                                        src={basement}
                                    />
                                    <div className=" text-black absolute bottom-14 left-4">


                                        <p className=' text-3xl font-bold mb-2'>Basement.</p>

                                        <p className=' font-semibold'>Navigating tradeoffs in large- scale website migrations</p>
                                    </div>
                                </div>
                                <div
                                    className="absolute bottom-6 ml-10"
                                >
                                    <div className=" flex gap-3 text-black ">
                                        <div className='border-2 p-3 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>79-90</h4>
                                            <p className=' text-sm text-gray-500'>Real Exprience Store</p>
                                        </div>
                                        <div className='border-2 p-5 rounded-md'>
                                            <h4 className=' text-[18px] font-bold'>5 Minute</h4>
                                            <p className=' text-sm text-gray-500'>Build times</p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Framework;


