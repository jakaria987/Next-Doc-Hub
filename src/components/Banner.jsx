"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Your one-stop guide to building modern web applications with Next.js.",
      "Whether you're a beginner or an experienced developer",
      "we have everything you need to get started and take your projects to the next level.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="py-32  h-96 bg-white text-center">
      <div className="max-w-6xl mx-auto  px-4">
        <div className="">
          <div className="">
            <h2 className="text-5xl font-bold text-gray-800 mb-2">
              Welcome to NextDocs Hub !
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {text}
              <Cursor
                cursorBlinking
                cursorStyle=""
                cursorColor="#ffaa17"
              />{" "}
            </p>
          </div>
          <div className=" mt-4 lg:mt-10 ">
            <a
              href="/docs"
              className="bg-black  text-white hover:bg-blue-600 py-2 px-4 rounded-full transition duration-300"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="bg-gray-200 text-white hover:bg-blue-600 py-2 px-4 rounded-full transition duration-300"
            >
              Learn Next.js
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
