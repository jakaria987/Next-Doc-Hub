import Image from "next/image";
import footerLogo from "../Shared/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 bg-white shadow-sm text-sm border-t-2 text-gray-600 w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
        <div className="flex flex-col space-y-2">
          <Image src={footerLogo} alt="Footer Logo" width={40} height={40} className="rounded-full" />
          <Link href="/" className=" font-bold text-3xl">
            Prog<span className="">Nexus</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-2 font-semibold">
          <span className=" font-bold text-lg">Main</span>
          <Link href="/showcase" className="link link-hover">
            Showcase
          </Link>
          <Link href="/docs" className="link link-hover">
            Docs
          </Link>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
          <Link href="/AllCourse" className="link link-hover">
            Courses
          </Link>
        </div>
        <div className="flex flex-col space-y-2 font-semibold">
          <span className="text-lg font-bold">More</span>
          <Link href="/Dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link href="/Team" className="link link-hover">
            Team
          </Link>
          <Link href="/ColorPicker" className="link link-hover">
            Pick Color
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-lg font-bold">Subscribe to our newsletter</span>
          <p className="text-xs">
            Stay updated on new releases and features, guides, and case studies.
          </p>
          <div className="md:flex items-center">
            <input
              type="email"
              placeholder="you@domain.com"
              className="input input-bordered w-40 h-10 text-xs"
            />
            <button className="border-2 p-2 md:ml-1 ml-10 mt-3 rounded-lg text-xs hover:bg-gray-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
