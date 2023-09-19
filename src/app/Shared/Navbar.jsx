"use client";
import './Navbar.css';
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "./logo.png";
import { Authcontext } from "../../components/Provider/AuthProvider";
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Darkreader from "react-darkreader";

const Links = [
  {
    path: "/Docs",
    title: "Docs",
  },
  {
    path: "/Quiz",
    title: "Quiz",
  },
  {
    path: "/Blog",
    title: "Blog",
  },
  {
    path: "/ColorPicker",
    title: "Pick Color",
  },
  {
    path: "/TypingTest",
    title: "Typing Test",
  },
  {
    path: "/Team",
    title: "Team",
  }
];

const Navbar = () => {
  const { currentUser, logout } = useContext(Authcontext);
  const [navbar, setNavbar] = useState(true);

  return (
    <nav className="w-full md:h-full  bg-white ">
      <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
          {navbar ? (
            <>
              <Image src={logo} className="w-10 mr-2 rounded-full" />
              <Link href="/" className="md:text-2xl lg:text-3xl font-medium">
                ProgNexus
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-base">
            {Links.map(({ path, title }) => (
              <li className="text-xl font-semibold" key={path}>
                <Link activeClassname="active" href={path}>{title}</Link>
              </li>

            ))}
            {
              currentUser ? <> <li className="text-xl font-semibold"><Link href="/Dashboard">Dashboard</Link></li> </> : <></>
            }
          </ul>
        </div>

        {/* <Darkreader /> */}
        <div className="invisible lg:visible navbar-end ">

          <Darkreader />
          <div className="hidden md:flex items-center ms-4">
            <div className="ml-3">
              {currentUser ? (
                <div className="flex gap-2"><div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={currentUser.photoURL} />
                </div>
              </div>
                <button
                  className="btn btn-primary bg-black text-white "
                  onClick={logout}
                >
                  LogOut
                </button>
                  
                </div>
              ) : (
                <button className="btn btn-primary bg-black text-white"><Link href="/Login">
                  Login
                </Link></button>
              )}
            </div>
          </div>
        </div>
        <div className="lg:hidden items-end">
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
                      <Link href="/learn"></Link>{" "}
                    </li>
                    <li className="">
                      {" "}
                      <Link href="/Login">Login</Link>{" "}
                    </li>

                    {Links.map(({ path, title }) => (
                      <li className="" key={path}>
                        <Link activeClassName="active" className="text-[15px] " href={path}>
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
    </nav>
  );
};

export default Navbar;
