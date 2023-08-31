"use client";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const Id = params.id;
  const [blogsDetails, setBlogsDetails] = useState([]);

  useEffect(() => {
    fetch("/api/blogdetails") // Assuming the blog.json file is in the public folder of your project
      .then((res) => res.json())
      .then((data) => {
        setBlogsDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const details = blogsDetails?.find((blog) => blog._id == Id);
  console.log(details); // Use 'find' instead of 'filter'

  if (!details) {
    return <div>Loading...</div>; // Add loading state or handle not found case
  }

  return (
    <div>
      <div
        className="hero h-[400px] "
        style={{ backgroundImage: `url('${details.image}')` }}
      >
        {/* <img src={details.image} className="h-1/2 w-full " alt="" /> */}
      </div>
      <div className="grid lg:grid-cols-2 px-5 lg:px-32 my-5 ">
        <div className="pl-4 lg:pl-10">
          <img
            className="mask mask-squircle w-16 h-16"
            src={details.author_image}
            alt=""
          />
          <h1 className="text-xl font-semibold">{details.author_name}</h1>
          <p className="text-lg font-medium text-gray-500 ">
            {details.author_description}
          </p>
        </div>
        <div className="border-l-2 border-purple-200 pl-4 mt-5 lg:mt-0 lg:pl-10">
          <h1 className="text-2xl font-semibold border border-black rounded text-center w-full lg:w-2/5">
            {details.category}
          </h1>
          <h2 className="text-2xl font-semibold ">{details.title}</h2>
          <p className="text-lg font-semibold">{details.publish_date}</p>
          <p className="text-lg font-medium text-gray-500 ">
            {details.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
