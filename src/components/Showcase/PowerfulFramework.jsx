import Link from "next/link";
import { LiaGreaterThanEqualSolid } from "react-icons/lia";
import { TbPlayerTrackNext } from "react-icons/tb";
import { FaBattleNet } from "react-icons/fa";
const PowerfulFramework = () => {
  return (
    <div className=" bg-gray-50 px-1">
      <h1 className="text-center md:text-3xl text-2xl text-neutral font-semibold md:pt-32 pt-14">
        A powerful framework for building high-performance,
        <br />
        server rendered web applications
      </h1>
      <div className="py-16  md:grid md:grid-cols-2 items-center lg:grid-cols-3 w-full px-3">
        <div className="mx-auto text-center md:text-left">
          <div>
            <LiaGreaterThanEqualSolid className="text-5xl mb-3 mx-auto md:mx-0  border p-2 rounded-full " />
          </div>
          <h1 className="text-xl font-semibold">
            Superior Developer Experience
          </h1>
          <p className="text-gray-500 mt-2">
            Deploy your Next.js site globally in seconds,
            <br />
            with zero configuration just Git push to get started.
          </p>
        </div>
        <div className="mx-auto text-center md:text-left mt-7 md:mt-0">
          <FaBattleNet className="text-5xl mb-3 border p-2 rounded-full mx-auto md:mx-0" />
          <h1 className="text-xl font-semibold">Battle-tested in Production</h1>
          <p className="text-gray-500 mt-2">
            All the features you need for production: hybrid
            <br />
            static & server rendering, TypeScript support,
            <br />
            smart bundling, route pre-fetching, and more.
          </p>
        </div>
        <div className="mx-auto text-center md:text-left mt-7 md:mt-0">
          <TbPlayerTrackNext className="text-5xl mb-3 border p-2 rounded-full mx-auto md:mx-0" />
          <h1 className="text-xl font-semibold">Performance-obsessed stack</h1>
          <p className="text-gray-500 mt-2">
            Next.js brings years of experience in building
            <br />
            and optimizing production applications.
          </p>
        </div>
      </div>
      <div className="text-center pb-28 md:flex items-center justify-center gap-3">
        <div>
          <Link href="" className="btn bg-white border-slate-300">
            Find a Partner
          </Link>
        </div>
        <div className=" mt-3 md:mt-0">
          <Link href="" className="btn bg-black hover:text-black mx-2 text-white">
            Start learning next.js
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PowerfulFramework;
