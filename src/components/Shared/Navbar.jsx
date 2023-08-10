import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../Shared/logo.png";
import logo2 from "../Shared/logo-vercel.png";
const navLinks = [
  {
    path: "/showcase",
    title: "Showcase",
  },
  {
    path: "/docs",
    title: "Docs",
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
  return (
    <nav className="mx-3 w-full">
      <div className="navbar fixed  z-10 bg-white shadow-sm ">
        <div className="navbar-start">
          <Image src={logo} className="w-1/2 lg:w-1/4"></Image>

          <Link href="/" className="md:text-2xl lg:text-3xl uppercase font-medium">
            Next<span className="text-sm">-Docs Hub</span>
          </Link>
          <div className="dropdown ml-28">
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-10 pr-4 py-7  z-[5] shadow bg-base-100 rounded-box"
            >
              <li>
                <Link href="/learn">Learn</Link>
                <Link href="/deploy">Deploy</Link>
              </li>
              {navLinks.map(({ path, title }) => (
                <li key={path}>
                  <Link className=" text-[15px]" href={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <label tabIndex={0} className=" btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            {navLinks.map(({ path, title }) => (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search Documentation..."
          className="input input-sm invisible lg:visible focus:outline-none bg-base-200 w-2/5 max-w-xs "
        />

        <div className="invisible lg:visible navbar-end ">
          <Link href="/deploy" className="btn btn-sm btn-outline">
            <Image src={logo2} className="w-5 h-5"></Image>Deploy
          </Link>

          <Link href="/learn" className="btn btn-sm btn-neutral mx-3">
            Learn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;