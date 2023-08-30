"use client"
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const Id = params.id;
    const [blogsDetails, setBlogsDetails] = useState([]);

    useEffect(() => {
        fetch("/api/blogdetails")  // Assuming the blog.json file is in the public folder of your project
            .then(res => res.json())
            .then(data => {
                setBlogsDetails(data)
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const details = blogsDetails?.find(blog => blog._id == Id);
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
export default page;