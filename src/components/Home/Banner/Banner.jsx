<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 3ef3b085774baab8f0b55defaebb0155954c0fc6
import React from "react";

const Banner = () => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-yellow-500",
    "text-pink-500",
  ];

  return (
    <div className="relative h-[550px] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter brightness-75"
        style={{
          backgroundImage:
            'url("https://cdn3.f-cdn.com/files/download/97941784/programmin.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
      <div className="absolute z-2 inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-semibold uppercase mb-4">
          <span className="uppercase">Learn </span>
          <span className={colors[0]}> c</span>
          <span className={colors[1]}>o</span>
          <span className={colors[2]}>d</span>
          <span className={colors[3]}>i</span>
          <span className={colors[4]}>n</span>
          <span className={colors[5]}>g</span>
        </h1>
        <p className="text-lg mb-2 text-center">
          Explore a variety of programming languages and enhance your skills.
        </p>
        <p className="text-lg mb-6">Interactive learning environment--</p>
        <div className="flex space-x-4">
<<<<<<< HEAD
          <button href="#" className="btn btn-primary text-green-500">
            Try Now
          </button>

          <button href="#" className="btn btn-primary-daisy hover:bg-gray-500">
            Remind Me
          </button>
=======
          <Link
            href="/Docs"
            className="btn btn-primary text-green-500 hover:text-white"
          >
            Read More
          </Link>
          <Link
            href="/Login"
            className="btn btn-primary-daisy hover:bg-gray-500"
          >
            Login
          </Link>
>>>>>>> 3ef3b085774baab8f0b55defaebb0155954c0fc6
        </div>
      </div>
    </div>
  );
};

export default Banner;
