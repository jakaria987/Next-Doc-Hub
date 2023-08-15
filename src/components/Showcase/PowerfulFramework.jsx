import Link from "next/link";
import { LiaGreaterThanEqualSolid } from "react-icons/lia";
import { TbPlayerTrackNext } from "react-icons/tb";
import { FaBattleNet } from "react-icons/fa";
const PowerfulFramework = () => {
  return (
    <div className=" mt-10 bg-gray-50">
      <h1 className="text-center text-3xl text-neutral font-semibold pt-32">
        A powerful framework for building high-performance,
        <br />
        server rendered web applications
      </h1>
      <div className="py-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="mx-auto">
          <LiaGreaterThanEqualSolid className="text-3xl mb-3  border rounded-full" />
          <h1 className="text-xl font-semibold">
            Superior Developer Experience
          </h1>
          <p className="text-gray-500 mt-2">
            Deploy your Next.js site globally in seconds,
            <br />
            with zero configuration just Git push to get started.
          </p>
        </div>
        <div className="mx-auto">
          <FaBattleNet className="text-3xl mb-3 border rounded-full" />
          <h1 className="text-xl font-semibold">Battle-tested in Production</h1>
          <p className="text-gray-500 mt-2">
            All the features you need for production: hybrid
            <br />
            static & server rendering, TypeScript support,
            <br />
            smart bundling, route pre-fetching, and more.
          </p>
        </div>
        <div className="mx-auto">
          <TbPlayerTrackNext className="text-3xl mb-3 border rounded-full" />
          <h1 className="text-xl font-semibold">Performance-obsessed stack</h1>
          <p className="text-gray-500 mt-2">
            Next.js brings years of experience in building
            <br />
            and optimizing production applications.
          </p>
        </div>
      </div>
      <div className="text-center pb-28">
        <Link href="" className="btn bg-white border-slate-300">
          Find a Partner
        </Link>
        <Link href="" className="btn bg-black hover:text-black mx-2 text-white">
          Start learning next.js
        </Link>
      </div>
    </div>
  );
};

export default PowerfulFramework;
