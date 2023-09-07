import Link from "next/link";

import { FaHome, FaUsers } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

const Layout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side bg-violet-950  shadow-xl text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h1 className="text-2xl pt-20 px-8 font-semibold">Admin Dashboard</h1>
          <ul className="menu px-8 w-64 pt-5 min-h-full bg-base-200 text-base font-medium  ">
            {/* Sidebar content here */}
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
      </div>
    </>
  );
};

export default Layout;
