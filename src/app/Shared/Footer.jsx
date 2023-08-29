import Image from "next/image";
import footerLogo from "../Shared/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 bg-white shadow-sm text-sm border-t-2 text-gray-600 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6  gap-6">
        <div className="flex flex-col space-y-2">
          <Image src={footerLogo} alt="Footer Logo" width={70} height={70} />
          <Link href="/" className=" font-bold text-3xl">
            Next<span className="text-xs">-Docs Hub</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <span className=" font-bold">Resources</span>
          <Link href="/docs" className="link link-hover">
            Docs
          </Link>
          <Link href="/learn" className="link link-hover">
            Learn
          </Link>
          <Link href="/showcase" className="link link-hover">
            Showcase
          </Link>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
          <Link href="/analytics" className="link link-hover">
            Analytics
          </Link>
          <Link href="/conf" className="link link-hover">
            Next.js Conf
          </Link>
          <Link href="/previews" className="link link-hover">
            Previews
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <span className=" font-bold">More</span>
          <Link href="/commerce" className="link link-hover">
            Commerce
          </Link>
          <Link href="/contact-sales" className="link link-hover">
            Contact Sales
          </Link>
          <a href="https://github.com" className="link link-hover">
            GitHub
          </a>
          <Link href="/releases" className="link link-hover">
            Releases
          </Link>
          <Link href="/telemetry" className="link link-hover">
            Telemetry
          </Link>
          <Link href="/about-vercel" className="link link-hover">
            About Vercel
          </Link>
          <Link href="/nextjs-vercel" className="link link-hover">
            Next.js + Vercel
          </Link>
          <Link href="/open-source-software" className="link link-hover">
            Open Source Software
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <span className=" font-bold">Stay Connected</span>
          <Link href="/about-vercel" className="link link-hover">
            About Vercel
          </Link>
          <Link href="/nextjs-vercel" className="link link-hover">
            Next.js + Vercel
          </Link>
          <Link href="/open-source-software" className="link link-hover">
            Open Source Software
          </Link>
          <a href="https://github.com" className="link link-hover">
            GitHub
          </a>
          <a href="https://twitter.com" className="link link-hover">
            Twitter
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className=" font-bold">Legal</span>
          <Link href="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="/cookie-preferences" className="link link-hover">
            Cookie Preferences
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <span className=" font-bold">Subscribe to our newsletter</span>
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
