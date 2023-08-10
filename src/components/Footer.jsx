import Image from "next/image";
import footerLogo from '../components/logo.png';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-base-content container mx-auto">
      <div>
        <span className="footer-title">Services</span>
        <Image src={footerLogo} className="w-16 h-16 lg:w-16 lg:h-16"></Image>
        <Link href="/" className="text-2xl lg:text-3xl uppercase font-medium">
            Next<span className="text-sm">-Docs Hub</span>
          </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
