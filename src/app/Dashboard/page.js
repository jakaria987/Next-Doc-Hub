"use client";
import Layout from "../../components/Dashboard/Layout";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
const Dashboard = () => {
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

      <div className="invisible lg:visible flex">
        <Layout></Layout>
        <h1 className="text-3xl font-medium w-full">
          Admin Dashboard Template
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
