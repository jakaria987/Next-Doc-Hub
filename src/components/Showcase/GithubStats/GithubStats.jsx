import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const GithubStats = () => {
    return (
        <div className="github-stats md:flex lg:flex justify-around mt-16 text-center px-40 bg-slate-50 pt-14">
            <div>
                <h1 className="font-bold text-black text-4xl mb-5">14th</h1>
                <h1 className='text-2xl font-semibold text-gray-800 mt-2'>Largest</h1>
                <a className="btn  mb-10 text-gray-600 sm:btn-sm md:btn-md lg:btn-md border-none" href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
                    on GitHub
                    <FiArrowUpRight className="text-base-200 w-5 h-5"></FiArrowUpRight>
                </a>
            </div>
            <div>
                <h2 className="font-bold text-black text-4xl mb-5"># 1</h2>
                <p className='text-2xl font-semibold text-gray-800 mt-2'>React</p>
                <a className="btn  mb-10 text-gray-600 sm:btn-sm md:btn-md lg:btn-md border-none" href="https://github.com/vercel/next.js/" target="_blank" rel="noopener noreferrer">
                    Framework
                    <FiArrowUpRight className="text-base-200 w-5 h-5"></FiArrowUpRight>
                </a>
            </div>
            <div>
                <h1 className="font-bold text-black text-4xl mb-5">100,000</h1>
                <p className='text-2xl font-semibold text-gray-800 mt-2'>Stars</p>
                <a className="btn text-gray-600  mb-10 sm:btn-sm md:btn-md lg:btn-md border-none" href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
                    On Github
                    <FiArrowUpRight className="text-base-200 w-5 h-5"></FiArrowUpRight>
                </a>
            </div>
        </div>
    );
};

export default GithubStats;
