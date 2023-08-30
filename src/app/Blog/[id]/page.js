"use client"
import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
  const id = params.id;
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch("/api/blogdetails")  // Assuming the blog.json file is in the public folder of your project
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const details = blogs?.find(blog => blog._id == id);
  console.log(details);  // Use 'find' instead of 'filter'
  
  if (!details) {
    return <div>Loading...</div>;  // Add loading state or handle not found case
  }

  return (
    <div>
      <h1>{details.title}</h1>
      {/* Display other details */}
    </div>
  );
};

export default Page;
