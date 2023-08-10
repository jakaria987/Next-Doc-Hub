import { AiOutlineArrowRight } from "react-icons/ai";

const AboutNext = () => {
  return (
    <div className="my-20 px-5">
      {/* section's heading */}
      <div className="lg:flex justify-center items-center w-full">
        <h1 className="text-center font-bold text-3xl font-serif">
          What's in Next.js?
        </h1>
        <p className="text-xl text-slate-500 font-serif text-center">
          All the tools you need to make the Web. Faster.
        </p>
      </div>
      {/* card section started */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto max-w-7xl mt-12">
        {/* Card -1 */}
        <div>
          <div className="card  md:w-96 w-full h-96 bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <figure>
              <img
                className="w-[384px] h-[280]"
                src="https://i.ibb.co/wcmSVwD/build-In-Optimization.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Built-in Optimizations</h2>
              <p className="text-slate-500">
                Automatic Image, Font, and Script Optimizations for improved UX
                and Core Web Vitals.
              </p>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div>
          <div className="card h-96  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <figure>
              <img
                className="w-[384px] h-[280px]"
                src="https://i.ibb.co/VQ2sCCj/dynamic-HTML.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dynamic HTML Streaming</h2>
              <p className="text-slate-500">
                Instantly stream UI from the server, integrated with the App
                Router and React Suspense.
              </p>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div>
          <div className="card  md:w-96 w-full h-96 bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <figure>
              <img
                src="https://i.ibb.co/zrZGf1T/react-Server-Component.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">React Server Components</h2>
              <p className="text-slate-500 ">
                Add components without sending additional client-side
                JavaScript. Built on the latest React features.
              </p>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div>
          <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <div className="card-body">
              <h2 className="card-title">CSS Support</h2>
              <p className="text-slate-500 hidden md:block">
                {" "}
                Style your application with your favorite tools, including
                support for CSS Modules,Sass, Tailwind CSS, styled-jsx, and
                more.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <div className="card-body">
              <h2 className="card-title">Route Handlers</h2>
              <p className="text-slate-500 hidden md:block">
                Build API endpoints to securely connect with third party
                services and consume from your frontend.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
            <div className="card-body">
              <h2 className="card-title">Middleware</h2>
              <p className="text-slate-500 hidden md:block">
                Take control of the incoming request. Use code to define routing
                and access rules for authentication, experimentation, and
                internationalization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-96 mx-auto max-w-7xl md:mt-3">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-96">
            <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition  ">
              <div className="card-body">
                <h2 className="card-title">Data Fetching</h2>
                <p className="text-slate-500 hidden md:block">
                  Make your React component async and await your data. Next.js
                  supports both server and client data fetching.
                </p>
              </div>
            </div>
            <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
              <div className="card-body">
                <h2 className="card-title">Node.js & Edge Runtimes</h2>
                <p className="text-slate-500 hidden md:block">
                  Build scalable solutions with Serverless functions, and
                  deliver fast dynamic, personalized content with Edge.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-96 md:mt-4">
            <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition  ">
              <div className="card-body ">
                <h2 className="card-title">Client and Server Rendering</h2>
                <p className="text-slate-500 hidden md:block">
                  Flexible rendering and caching options, including Incremental
                  Static Regeneration (ISR), on a per-page level.
                </p>
              </div>
            </div>

            <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition">
              <div className="card-body">
                <h2 className="card-title">
                  Advanced Routing & Nested Layouts
                </h2>
                <p className="text-slate-500 hidden md:block">
                  Create routes using the file system, including support for
                  more advanced routing patterns and UI layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  md:w-96 w-full bg-base-100 border shadow-sm hover:border hover:border-current transition md:ml-7 mt-4 md:mt-0">
          <figure>
            <img
              src="https://i.ibb.co/3z52y7W/rsz-11nextjs-cover.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Next.js 13</h2>
            <p>
              The power of full-stack to the frontend. Read the release notes.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-circle ">
                <AiOutlineArrowRight> </AiOutlineArrowRight>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNext;
