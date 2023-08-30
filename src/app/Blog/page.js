"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("api/blogdetails")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl font-bold pl-20 py-12 ">
        {/* The Latest Next.js News */}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 my-10 ">
        {blogs?.map(
          ({ _id, title, image, publish_date, author_name, category }) => (
            <div
              key={_id}
              className="card w-96 my-2 rounded text-white bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img src={image} alt="Shoes" />
              </figure>
              <div className="card-body bg-black bg-opacity-40">
                <h2 className="card-title ">{title}</h2>
                <p className="text-lg font-semibold border rounded text-center w-2/5">
                  {category}
                </p>
                <p>{publish_date}</p>
                <div className="card-actions justify-end">
                  <Link
                    // href=""
                    className="bg-white hover:bg-slate-200  text-center rounded-md text-black p-2"
                    href={`/Blog/${_id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogPage;
