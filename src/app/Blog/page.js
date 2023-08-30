'use client'
import { data } from 'autoprefixer';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/blogdetails")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div>
            <h1 className='text-3xl font-bold pl-20 pt-14 '>The Latest Next.js News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-20 mt-10 '>
                {blogs?.map(({ _id, title, description, date, point }) => (
                    <div className="card border  border-gray-300 bg-primary w-full text-primary-content mb-2" key={_id}>
                        <div className="card-body">
                            <h2>{date}</h2>
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <ul className='text-sky-500 '>
                                {point.map((pointItem, index) => (
                                    <li key={index}>{pointItem}</li>
                                ))}
                            </ul>
                            <div className="card-actions justify-center">
                                <Link className='bg-slate-100 text-slate-600 hover:bg-slate-200 w-96 text-center rounded-md hover:text-black p-2' href={`/Blog/${_id}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;