import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const BuildCards = () => {
  return (
    <div className="max-w-7xl mx-auto border rounded-md py-20 px-8 my-12">

           <p>
        {" "}
        <span className="text-purple-600 bg-purple-100 rounded-lg px-1 ">
          Starter
        </span>{" "}
        <span className="text-green-500 bg-green-200  rounded-lg px-1 mx-3">
          Ecommerce
        </span>{" "}
        <span className="text-blue-500 bg-blue-100  rounded-xl px-1">Blog</span>{" "}
        <span className="text-orange-500 bg-orange-100  rounded-lg px-1 ml-3 lg:mx-3">
          AI
        </span>{" "}
        <span className="text-rose-500 bg-rose-100  rounded-xl px-1  ml-3 invisible lg:visible">
          Edge Config
        </span>
        <span className="text-pink-500 bg-pink-100 rounded-xl px-1 ml-3 invisible lg:visible">
          Edge Fuctions
        </span>{" "}
        <span className="text-amber-500 bg-amber-100 rounded-xl px-1 ml-3 invisible lg:visible">
          Portfolio
        </span>{" "}
        <span className="text-blue-500 bg-blue-100 rounded-xl px-1 ml-3 invisible lg:visible">
          SaaS
        </span>{" "}
        <span className="text-purple-500 bg-purple-100 rounded-xl px-1 ml-3 invisible lg:visible">
          Multi-tenant Apps
        </span>{" "}
        <span className="text-green-500 bg-green-100 rounded-xl px-1 ml-3 invisible lg:visible">
          Realtime Apps
        </span>{" "}
        <span className="text-blue-500 bg-blue-100 rounded-xl px-1 ml-3 invisible lg:visible">
          Documentation
        </span>{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
      <h1 className="text-4xl py-6 font-bold ">Build like the Best</h1>
      <p className="text-slate-400 text-xl">
        Jumpstart your Next.js development <br /> process with our pre-built
        solutions
      </p>
      <div className="py-3 rounded-md flex">
        <Link
          className="btn bg-black hover:bg-black text-white sm:btn-sm md:btn-md lg:btn-md"
          href="/"
        >
          Deploy a Template On Vercel <BsArrowUpRight></BsArrowUpRight>
        </Link>
      </div>
      </div>
      <div className="relative md:w-full w-56 md:mt-0 mt-10">
          <div >
            <img
              className="w-[320px] h-50 -rotate-[3deg]"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122003%2Fnextjs%2Fshowcase%2Ftemplate-next-commerce.jpg&w=1200&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
              alt="Image 1"
            />
          </div>
          <img
            className="w-[320px] h-50 absolute left-16 md:top-10 bottom-2 -rotate-[4deg]"
            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122387%2Fnextjs%2Fshowcase%2Ftemplate-next-gallery.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
            alt="Image 2"
          />
          <img
            className="w-[320px] h-50 absolute left-28 md:top-20 top-16 -rotate-[2deg]"
            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122002%2Fnextjs%2Fshowcase%2Ftemplate-next-boilerplate.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
            alt="Image 2"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildCards;
