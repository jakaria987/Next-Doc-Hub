"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "./logo.png";
import { Authcontext } from "@/components/Provider/AuthProvider";
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Links = [
  // {
  //   path: "/Showcase",
  //   title: "Showcase",
  // },
  {
    path: "/Docs",
    title: "Docs",
  },
  {
    path: "/Blog",
    title: "Blog",
  },
  {
    path: "/Dashboard",
    title: "Dashboard",
  },
  {
    path: "/CodeEditor",
    title: "CodeEditor",
  },
  // {
  //   path: "/templates",
  //   title: "Templates",
  // },
  // {
  //   path: "/enterprise",
  //   title: "Enterprise",
  // },
  {
    path: "/Team",
    title: "Team",
  },
  {
    path: "/ColorPicker",
    title: "Pick Color",
  },
];

const Navbar = () => {
  const { currentUser, logout } = useContext(Authcontext);
  const [navbar, setNavbar] = useState(true);

  return (
    <nav className="w-full md:h-full">
      <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
          {navbar ? (
            <>
              <Image src={logo} className="w-10 rounded-full" />
              <Link href="/" className="md:text-2xl lg:text-3xl font-medium">
                ProgNexus
              </Link>
            </>
          ) : (
            <></>
          )}
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
          onChange={(e) => handleSearch(e.target.value)}
          className="input input-sm mr-5 invisible lg:visible focus:outline-none bg-base-200 w-2/5 max-w-xs"
        />
        {/* <Search></Search> */}
        {/* <Darkreader /> */}

        <div className="invisible lg:visible navbar-end ">
          <div className="hidden md:flex items-center">
            {/* <div>
              {currentUser && (
                <img
                  src={currentUser.photoURL || ""}
                  className="h-12 w-12 rounded-full ml-2"
                  title={currentUser.displayName || ""}
                />
              )}
            </div> */}
            <div className="mr-3">
              {currentUser ? (
                <button
                  className="bg-red-600 font-extrabold text-white rounded-md py-2 px-2 mr-3"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              ) : (
                <Link href="/Login">
                  <FaUserPlus className=" text-3xl mr-5" />
                </Link>
              )}
            </div>

            <Link
              href="/learn"
              className=" border-2 px-4 py-1 border-black rounded-md hover:bg-gray-300 mr-4"
            >
              Learn
            </Link>
          </div>
        </div>
        <div className="">
          <div className="lg:hidden items-end ">
            <button onClick={() => setNavbar(!navbar)} className="">
              {navbar ? (
                <>
                  <GiHamburgerMenu className="w-6 h-6"></GiHamburgerMenu>
                </>
              ) : (
                <>
                  {" "}
                  <RxCross2 className="w-6 h-6"></RxCross2>{" "}
                  <div className="">
                    <ul
                      tabIndex={0}
                      className="menu m-0 dropdown-content mt-10 shadow bg-white w-screen h-screen  gap-3 "
                    >
                      <li>
                        <div className="flex">
                          <Image src={logo} className="w-36" />
                          <Link href="/" className="font-medium text-2xl">
                            ProgNexus
                          </Link>
                        </div>
                      </li>
                      <li className="">
                        <Link href="/learn">Learn</Link>{" "}
                      </li>
                      <li className="">
                        {" "}
                        <Link href="/Login">Login</Link>{" "}
                      </li>

                      {Links.map(({ path, title }) => (
                        <li className="" key={path}>
                          <Link className="text-[15px]" href={path}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>{" "}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
