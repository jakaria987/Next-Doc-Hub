import GetStarted from "@/components/Docs/GetStarted/GetStarted";
import Link from "next/link";
import React from "react";
import { FiBox } from "react-icons/fi";
const getStart = [
  {
    path: "/Installation",
    title: "Installation",
  },
  {
    path: "/projectStructure",
    title: "Project Structure",
  },
  {
    path: "/reactEssential",
    title: "React Essentials",
  },
];
const application = [
  {
    path: "/Routing",
    title: "Routing",
  },
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
const Docs = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        <GetStarted></GetStarted>


          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary my-36 drawer-button lg:hidden"
          >
            Open Docs
          </label>
        </div>
        <div className="drawer-side shadow">
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
              <Link
                href="/getStart"
                className="text-lg text-semibold text-black"
              >
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
                href="/application"
                className="text-base text-semibold text-black"
              >
                Building Your Application
              </Link>
            </li>

            {application.map(({ path, title }) => (
              <li key={path}>
                <Link className="text-medium text-gray-500" href={path}>
                  {title}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/api" className="text-lg text-semibold text-black">
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
              <Link href="/api" className="text-lg text-semibold text-black">
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
                href="/community"
                className="text-lg text-semibold text-black"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/contribution"
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

export default Docs;
