"use client"
import React, { useState } from "react";
import { RxSlash } from 'react-icons/rx';
const DefiningRoute = () => {
    const [script, setScript] = useState("TypeScript");
    const [file,setFile] = useState("")
    const handleSetScript = (e) =>{
        setScript(e.target.value)
    }
    // if(script = "TypeScript"){
      
    // }
    
  return (
    <div className="my-8">
      <h1 className="text-4xl font-semibold">Defining Routes</h1>
      <div className="border px-3 py-2 mx-5 rounded my-12 lg:w-1/2">
        <p className="text-sm">
          We recommend reading the{" "}
          <span className="text-sky-500">Routing Fundamentals</span> page before
          continuing.
        </p>
      </div>
      <p className="mb-6">
        This page will guide you through how to define and organize routes in
        your Next.js application.
      </p>
      <hr />
      <h1 className="text-2xl font-semibold my-8">Creating Routes</h1>
      <h1 className="my-6">
        Next.js uses a file-system based router where folders are used to define
        routes.
      </h1>
      <p>
        Each folder represents a{" "}
        <span className="text-sky-500"> route segment</span> that maps to a{" "}
        <span className="font-bold">URL</span> segment. To create a{" "}
        <span className="text-sky-500">nested route</span>, you can nest folders
        inside each other.
      </p>
      <img
        className="w-[642px] h-[240px] my-8"
        src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_2PHSwT98ft8Jg2vp5hMS9ojinrcz"
        alt=""
      />
      <p>
        A special{" "}
        <span className="text-blue-500">
          <button className="btn btn-xs border-0 bg-slate-100">page.js</button>{" "}
          file{" "}
        </span>{" "}
        is used to make route segments publicly accessible.
      </p>
      <img
        className="w-[642px] h-[240px] my-8"
        src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdefining-routes.png&w=1920&q=75&dpl=dpl_2PHSwT98ft8Jg2vp5hMS9ojinrcz"
        alt=""
      />
      <p className="my-6">
        In this example, the{" "}
        <span className="">
          <button className="btn btn-xs border-0 bg-slate-100">
            /dashboard/analytics
          </button>
        </span>{" "}
        URL path is not publicly accessible because it does not have a
        corresponding{" "}
        <span>
          <button className="btn btn-xs border-0 bg-slate-100">page.js</button>{" "}
        </span>{" "}
        file. This folder could be used to store components, stylesheets,
        images, or other colocated files.
      </p>
      <div className="border px-3 py-2 mx-5 rounded my-12 lg:w-1/2">
        <p>
          {" "}
          <span className="font-bold">Good to know:</span>{" "}
          <span>
            <button className="btn btn-xs border-0 lowercase bg-gray-200">
              .js
            </button>
          </span>{" "}
          ,
          <span>
            <button className="btn btn-xs border-0 lowercase bg-gray-200">
              .jsx
            </button>
          </span>{" "}
          , or
          <span>
            <button className="btn btn-xs border-0 lowercase bg-gray-200">
              .tsx
            </button>
          </span>{" "}
          file extensions can be used for special files.
        </p>
      </div>
      <hr />
      <h1 className="text-2xl font-semibold my-8">Creating UI</h1>
      <p>
        {" "}
        <span className="text-blue-500">Special file conventions</span> are used
        to create UI for each route segment. The most common are{" "}
        <span className="text-blue-500">pages</span> to show UI unique to a
        route, and <span className="text-blue-500">layouts</span> to show UI
        that is shared across multiple routes.
      </p>
      <p>
        For example, to create your first page, add a{" "}
        <span>
          <button className="btn btn-xs border-0 lowercase bg-gray-200">
            page.js
          </button>
        </span>{" "}
        file inside the{" "}
        <span>
          <button className="btn btn-xs border-0 lowercase bg-gray-200">
            app
          </button>
        </span>{" "}
        directory and export a React component:
      </p>
      <div className="border rounded p-4 m-6">
        <div className="flex justify-between">
            <div className="flex space-x-1">
            <div className="flex space-x-2">
            <p className="bg-slate-700 w-5 h-5 text-sm	text-white">TS</p>
            <p className="text-slate-500">app/page.tsx</p>

          </div>  
          <div className="flex space-x-2">
            <p className="bg-slate-700 w-5 h-5 text-sm	text-white">JS</p>
            <p className="text-slate-500">app/page.js</p>
          </div>
            </div>
          
          <div className="flex ">
          
             <div className="items-center flex justify-center">
        <select
          className="border-0 p-2 rounded-md shadow-md mb-2 "
          value={script}
          onChange={handleSetScript}
        >
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiningRoute;
