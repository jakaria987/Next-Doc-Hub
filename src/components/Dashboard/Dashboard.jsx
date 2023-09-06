import Link from "next/link";
import ManageUser from "../../app/ManageUser/page";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
const Links = [
  {
    to: "/ManageUser",
    title: "Manage User",
    icon: <FaUsers></FaUsers>,
  },
  {
    path: "/Course",
    title: "Course Creation",
    icon: <MdCreateNewFolder></MdCreateNewFolder>,
  },
];
const DashboardLayout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <ManageUser />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side bg-black bg-opacity-60 ml-12 shadow-lg text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-8 w-64 pt-24 min-h-full bg-base-200 text-base font-medium  ">
            {/* Sidebar content here */}
            {Links.map(({ to, title }) => (
              <li className="" key={to}>
                <a href={to}>{title}</a>
              </li>
            ))}
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

export default DashboardLayout;
