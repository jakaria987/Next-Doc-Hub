import Link from "next/link";
import React from "react";

const ExtraSection = () => {
  return (
    <div className="mt-20 mb-28">
      <h1 className="text-3xl font-bold text-center my-5">
        Popular CSS Framework
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  mx-3 md:gap-60 md:px-20 ">
        <div>
          <p className="text-slate-500 text-lg mt-5">
            A CSS framework is a pre-built set of CSS files and components that
            developers can use to streamline and standardize the process of
            designing and styling web applications or websites.
          </p>
          <p className="text-slate-500 text-lg mt-2">
            It ensures consistent design, saves time, and offers cross-browser
            compatibility.
          </p>
        </div>

        <div className="relative md:mt-10 md:w-full w-56 mb-10 ">
          <div>
            {/* <img
              className="w-[320px] h-50 -rotate-[3deg]"
              src=""
              alt="Image 1"
            /> */}
          </div>
          <img
            className="w-[320px] h-50 absolute left-16 md:bottom-28 top-0 bottom-2 -rotate-[3deg]"
            src="https://learncodeweb.com/wp-content/uploads/2019/01/Bootstrap.jpg"
            alt="Image 2"
          />
          <img
            className="w-[320px] h-50 absolute left-28 bottom-12 md:bottom-12  top-20 lg:top-28 -rotate-[2deg]"
            src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png"
            alt="Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
