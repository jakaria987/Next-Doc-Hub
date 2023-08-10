import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const MiddleSection = () => {
  return (
    <div className="mb-20 bg-base-100 shadow-xl ">
      <h1 className="text-black text-3xl font-medium text-center">
        Get started in seconds
        <span className="text-lg text-slate-600">
          {" "}
          Deploy Next.js to Vercel
        </span>
      </h1>
      <div className="divide-y divide-dashed "></div>
      <div className="flex flex-col md:flex-row justify-center mx-3">
        <div className="mt-10">
          <span className="text-purple-500 bg-base-200  rounded-full px-2 py-1 ">
            Starter
          </span>
          <span className="text-green-500 bg-base-200  rounded-full px-2 py-1 mx-3">
            Ecommerce
          </span>
          <span className="text-blue-500 bg-base-200  rounded-full px-2 py-1 ">
            Blog
          </span>
          <span className="text-orange-500 bg-base-200  rounded-full px-2 py-1 ml-3 lg:mx-3">
            AI
          </span>
          <span className="text-rose-500 bg-base-300  rounded-full px-2 py-1 ml-3 invisible lg:visible">
            Edge Config
          </span>
          <span className="text-pink-400 bg-base-300 rounded-full px-2 py-1 invisible lg:visible">
            Edge Fuctions
          </span>

          <p className="text-slate-500 text-lg mt-5">
            Vercel is a frontend cloud from the creators of Next.js,
            <br />
            making it easy to get started with Next.js quickly.
          </p>
          <p className="mt-3 text-slate-500 text-lg">
            Jumpstart your Next.js development with one of our
            <br />
            pre-built solutions.
          </p>
          <Link
            className="btn mt-10 mb-20 sm:btn-sm md:btn-md lg:btn-md"
            href="/"
          >
            Deploy a Template On Vercel
            <FiArrowUpRight className="text-base-200 w-5 h-5"></FiArrowUpRight>
          </Link>
        </div>
        <>{/* Here  */}</>
      </div>
    </div>
  );
};

export default MiddleSection;
