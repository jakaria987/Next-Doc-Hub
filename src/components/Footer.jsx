import Image from "next/image";
import footerLogo from '../components/logo.png';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-base-content container mx-auto">
      <div>
        <span className="footer-title mx-auto lg:text-2xl lg:mb-10">Welcome </span>
        <Image src={footerLogo} className="w-16 h-16 lg:w-20 lg:h-16 mx-auto"></Image>
        <Link href="/" className="text-xl lg:text-2xl uppercase font-medium mx-auto">
            Next<span className="text-sm">-Docs Hub</span>
          </Link>
      </div>
      <div>
        <span className="footer-title mx-auto lg:text-2xl">Query</span>
        <Link href="/showcase" className="link link-hover mx-auto text-xl font-semibold">Showcase</Link>
        <Link href="/docs" className="link link-hover mx-auto text-xl font-semibold">Docs      </Link>
        <Link href="/blog" className="link link-hover mx-auto text-xl font-semibold">Blog      </Link>
        <Link href="/analytics" className="link link-hover mx-auto text-xl font-semibold">Analytics </Link>
        <Link href="/templates" className="link link-hover mx-auto text-xl font-semibold">Templates </Link>
        <Link href="/enterprise" className="link link-hover mx-auto text-xl font-semibold">Enterprise</Link>
      </div>
      <div>
        <span className="footer-title mx-auto lg:text-2xl">Legal</span>
        <a className="link link-hover mx-auto text-xl font-semibold">Terms of use</a>
        <a className="link link-hover mx-auto text-xl font-semibold">Privacy policy</a>
        <a className="link link-hover mx-auto text-xl font-semibold">Cookie policy</a>
        
      </div>
      <div>
        <span className="footer-title mx-auto lg:text-2xl">Contact Us</span>
        <div className="form-control w-80 ">
          <label className="label mx-auto">
            <span className="label-text lg:text-2xl font-semibold">Enter your Query</span>
          </label>
          <div className="relative mx-auto">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            {/* <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            /> */}
            <button className="btn btn-ghost absolute top-0 right-0 rounded-l-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
