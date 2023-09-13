"use client";
import Layout from "@/components/Dashboard/Layout";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import Link from "next/link";
import Course_creation_form from "@/components/Dashboard/Course_creation_form";
const Course = () => {
  const [sideNav, setSideNav] = useState(true);
  return (
    <>
      <div className="">
        <div className="lg:hidden items-end ">
          <button onClick={() => setSideNav(!sideNav)} className="">
            {sideNav ? (
              <>
                <GiHamburgerMenu className="w-6 h-6"></GiHamburgerMenu>
                <h1 className="text-3xl font-medium w-full">
                  Admin Dashboard Template
                </h1>
              </>
            ) : (
              <>
                {" "}
                <div className="bg-violet-950 shadow-xl text-white">
                  <RxCross2 className="w-6 h-6"></RxCross2>{" "}
                  <ul
                    tabIndex={0}
                    className="menu m-0 dropdown-content pt-5 shadow  w-full h-screen gap-3 "
                  >
                    <li>
                      <Link href="/ManageUser">
                        <FaUsers></FaUsers>Manage User
                      </Link>
                    </li>
                    <li>
                      <Link href="/Course">
                        <MdCreateNewFolder></MdCreateNewFolder>Course Creation
                      </Link>
                    </li>

                    <li>
                      <Link href="/">
                        <FaHome></FaHome>Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Layout></Layout>
        </div>
        <div className="lg:col-span-2 ">
          <div>
            <h5 className="text-3xl font-semibold text-center">Create Your Course</h5> <br />
            <Course_creation_form></Course_creation_form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
