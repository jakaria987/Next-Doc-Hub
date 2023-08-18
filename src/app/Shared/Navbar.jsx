"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "./logo.png";
import { Authcontext } from "@/components/Provider/AuthProvider";
import { FaUserPlus } from "react-icons/fa";

const Links = [
  {
    path: "/Showcase",
    title: "Showcase",
  },
  {
    path: "/docs",
    title: "Docs",
  },
  {
    path: "/Blog",
    title: "Blog",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/analytics",
    title: "Analytics",
  },
  {
    path: "/templates",
    title: "Templates",
  },
  {
    path: "/enterprise",
    title: "Enterprise",
  },
];

const Navbar = () => {
  const { currentUser, logout } = useContext(Authcontext);

  return (
    <nav className="w-full p-0">
      <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
          <Image src={logo} className="w-1/2 lg:w-1/4" />
          <Link href="/" className="md:text-2xl lg:text-3xl font-medium">
            Next<span className="text-sm">-Docs Hub</span>
          </Link>
          <div className="dropdown ml-28">
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-10 pr-4 py-7 z-[5] shadow bg-white rounded-box">
              <li>
                <Link href="/learn">Learn</Link>
                <Link href="/Login">Login</Link>
              </li>
              {Links.map(({ path, title }) => (
                <li key={path}>
                  <Link className="text-[15px]" href={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links.map(({ path, title }) => (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search Documentation..."
          className="input input-sm invisible lg:visible focus:outline-none bg-base-200 w-2/5 max-w-xs"
        />

        <div className="invisible lg:visible navbar-end ">
          <div className="hidden md:flex items-center ml-auto">
            <div>
              {currentUser && (
                <img
                  src={currentUser.photoURL || ""}
                  className="h-12 w-12 rounded-full ml-2"
                  title={currentUser.displayName || ""}
                />
              )}
            </div>
            <div className="mr-5">
              {currentUser ? (
                <button
                  className="bg-red-600 font-extrabold text-white rounded-md py-2 px-2 mr-3"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              ) : (
                <Link  href="/Login"><FaUserPlus className=' text-3xl mr-5' /></Link>
              )}
            </div>

            <Link href="/learn" className=" border-2 px-4 py-1 border-black rounded-md hover:bg-gray-300 mr-4">
              Learn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
