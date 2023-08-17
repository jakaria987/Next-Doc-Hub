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


        <div className="relative">
          <div className="card card-compact z-40 bg-base-100 shadow-xl w-96 -rotate-[3deg]">
            <figure>
              <img
                className=""
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122003%2Fnextjs%2Fshowcase%2Ftemplate-next-commerce.jpg&w=1200&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Next.js Commerce</h2>
              <p>An all-in-one starter kit for high-performance e-commerce sites.</p>

            </div>
          </div>
          <div className="card card-compact z-30 bg-base-100 shadow-xl w-96  absolute left-16  bottom-3 -rotate-[3deg]">
            <figure>
              <img
                className=""
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122387%2Fnextjs%2Fshowcase%2Ftemplate-next-gallery.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Image Gallery Starter</h2>
              <p>Image Gallery Starter</p>

            </div>
          </div>
          <div className="w-96  absolute left-28 top-20 -rotate-[2deg] card card-compact bg-base-100 shadow-xl z-20">
            <figure>
              <img
                className="w-96"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1677122002%2Fnextjs%2Fshowcase%2Ftemplate-next-boilerplate.jpg&w=1920&q=75&dpl=dpl_3Sto41PsBArywegnuUrpLSNmSfm4"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Next.js Boilerplate</h2>
              <p>A Next.js app and a Serverless Function API.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCards;

