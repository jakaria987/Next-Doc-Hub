"use client"
import GetStart from "@/app/GetStart/page";
import Link from "next/link";
import React, { useState } from "react";
import { FiBox } from "react-icons/fi";
const getStart = [
  {
    path: "/Installation",
    title: "Installation",
  },
  {
    path: "/ProjectStructure",
    title: "Project Structure",
  },
];
const application = [

  // {
  //   path: "/Routing",
  //   title: "Routing",
  // },


  {
    path: "/dataFetching",
    title: "Data Fetching",
  },
  {
    path: "/Rendering",
    title: "Rendering",
  },
  {
    path: "/catching",
    title: "Catching",
  },
  {
    path: "/Styling",
    title: "Styling",
  },
  {
    path: "/optimizing",
    title: "Optimizing",
  },
  {
    path: "/configuring",
    title: "Configuring",
  },
  {
    path: "/deploying",
    title: "Deploying",
  },
  {
    path: "/upgrading",
    title: "Upgrading",
  },
];

const api = [
  {
    path: "/components",
    title: "Components",
  },
  {
    path: "/fileConvention",
    title: "File Conventions",
  },
  {
    path: "/function",
    title: "Function",
  },
  {
    path: "/nextConfig",
    title: "Next.Config.js Options",
  },
  {
    path: "/createNextApp",
    title: "Create Next App",
  },
  {
    path: "/edgeRuntime",
    title: "Edge Runtime",
  },
  {
    path: "/next.jsCLI",
    title: "Next.js CLI",
  },
];
const routes = [
  {
    path: "/Routing",
    title: "Routing",
    subItems: [
"Defining Routes",
"Pages and Layouts",
"Linking and Navigating",
"Route Groups",
"Dynamic Routes",
"Loading UI and Streaming",
"Error Handling",
"Parallel Routes",
"Intercepting Routes",
"Route Handlers",
"Middleware",
"Project Organization",
"Internationalization",
    ]
  },
  // ... other routes ...
];
const architecture = [
  {
    path: "/Accessibility",
    title: "Accessibility",
  },
  {
    path: "/fastRefresh",
    title: "Fast Refresh",
  },
  {
    path: "/next.jsCompiler",
    title: "Next.js Compiler",
  },
  {
    path: "/browser",
    title: "Supported Browsers",
  },
  {
    path: "/turboPack",
    title: "Turbopack",
  },
];
const SideNav = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <GetStart />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary my-36 drawer-button lg:hidden"
          >
            Open Docs
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="pt-10 px-8 flex items-center">
            <FiBox
              className="h-6 mx-2 w-6 bg-gradient-to-b from-white
             to-blue-300 text-blue-600 rounded"
            />

            <div>
              <h1 className="text-lg font-semibold ">Using App Router</h1>
              <p className="text-sm text-gray-500">
                Features available in /app
              </p>
            </div>
          </div>
          <ul className="menu px-10 pt-8 w-80 h-[calc (100vh-121px)] sticky top-[121px] bg-white  text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/GetStart" className="text-lg text-semibold text-black">
                Getting Started
              </Link>
            </li>
            {getStart.map(({ path, title }) => (
              <li key={path}>
                <Link className="text-medium text-gray-500" href={path}>
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/Application"
                className="text-base text-semibold text-black"
              >
                Building Your Application
              </Link>
            </li>
            {routes.map(({ path, title, subItems }, index) => (
              <li key={path}>
                <button
                  className={`flex items-center justify-between w-full text-base text-semibold text-black ${activeSection === index ? 'active' : ''
                    }`}
                  onClick={() => toggleSection(index)}
                >
                  {title}
                  <span className={`ml-2 transform transition-transform ${activeSection === index ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>
                {activeSection === index && (
                  <ul>
                    {subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className="text-medium text-gray-500" href={`${path}/${subItem}`}>
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {application.map(({ path, title }) => (
              <li key={path}>
                <Link className="text-medium text-gray-500" href={path}>
                  {title}
                </Link>
              </li>

            ))}

            <li>
              <Link href="/Api" className="text-lg text-semibold text-black">
                ApI Reference
              </Link>
            </li>
            {api.map(({ path, title }) => (
              <li key={path}>
                <Link className="text-medium text-gray-500" href={path}>
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/Architecture"
                className="text-lg text-semibold text-black"
              >
                Architecture
              </Link>
            </li>
            {architecture.map(({ path, title }) => (
              <li key={path}>
                <Link className="text-medium text-gray-500" href={path}>
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/Community"
                className="text-lg text-semibold text-black"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/Contribution"
                className="text-medium text-gray-500 mb-16"
              >
                Contribution Guide
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
};

export default SideNav;
