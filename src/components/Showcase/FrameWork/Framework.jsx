import React from "react";
import Image from "next/image";
import loomLogo from "./pngegg.png";
import plexLogo from "./plex-illustration.svg";
import plex from "./plex.svg";

const Framework = () => {
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-center">
      <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-sm relative group">
        <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className=" flex gap-3 ">
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">Preview</h4>
                  <p className=" text-sm">deployed seamlessly</p>
                </div>
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">Fast Loads</h4>
                  <p className=" text-sm">via Image Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 relative "
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
      "
        />
        <div className=" text-white font-bold absolute bottom-28 left-4">
          <div className="flex items-center gap-3">
            <Image width={40} height={40} src={loomLogo}></Image>
            <span className=" text-3xl">loom</span>
          </div>
          <p>
            With Next.js, Vercel, and Sanity, Loom empowers every team to
            iterate
          </p>
        </div>
      </div>
      <div className="overflow-hidden h-full w-[500px]  aspect-video bg-red-400 cursor-pointer rounded-md relative group row-span-3">
        <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className=" flex gap-3 ">
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">5 Billion+</h4>
                  <p className=" text-sm">Lambda invocation per week</p>
                </div>
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">Lighting-Fast</h4>
                  <p className=" text-sm">Turnaround on developing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="h-full w-full aspect-square group-hover:scale-110 transition duration-300 relative "
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
      "
        />
        <div className=" text-white font-bold absolute bottom-28 left-4">
          <div className="flex items-center gap-3">
            <span className=" text-3xl">
              AWS and Vercel: Accelerating innovation with serverless computing
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-md relative group">
        <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className=" flex gap-3 ">
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">100m+</h4>
                  <p className=" text-sm">Youtube subs</p>
                </div>
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">200m+</h4>
                  <p className=" text-sm">Social followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 relative "
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
      "
        />
        <div className=" text-white font-bold absolute bottom-28 left-4">
          <div className="flex items-center gap-3">
            <span className=" text-3xl">Mr. Beast</span>
          </div>
          <p>Serving millions of users on the mr. beast storefront</p>
        </div>
      </div>
      <div className="overflow-hidden  aspect-video  cursor-pointer rounded-md relative group">
        <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className=" flex gap-3 text-black ">
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">Preview</h4>
                  <p className=" text-sm">deployed seamlessly</p>
                </div>
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">Fast Loads</h4>
                  <p className=" text-sm">via Image Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image alt="" className="object-cover" src={plexLogo} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-300 to-transparent opacity-50"></div>
        </div>

        <div className=" text-black font-bold absolute bottom-28 left-4">
          <div>
            <Image width={90} height={90} src={plex}></Image>
          </div>
          <p>
            With Next.js, Vercel, and Sanity, Loom empowers every team to
            iterate
          </p>
        </div>
      </div>
      <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-md relative group">
        <div className="rounded-md z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className=" flex gap-3 ">
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">79 - 90</h4>
                  <p className=" text-sm">Real experience score</p>
                </div>
                <div className="border p-3 rounded-md">
                  <h4 className=" text-[18px] font-bold">5 minute</h4>
                  <p className=" text-sm">Build Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 relative "
          src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
      "
        />
        <div className=" text-white font-bold absolute bottom-28 left-4">
          <div className="flex items-center gap-3">
            <span className=" text-3xl">basement</span>
          </div>
          <p>Navigating tradeoffs in large scale website.</p>
        </div>
      </div>
    </div>
  );
};

export default Framework;
