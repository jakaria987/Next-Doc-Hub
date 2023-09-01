import React from 'react';

const Banner = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500', 'text-pink-500'];

    return (
        <div className="relative h-[550px] overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center filter brightness-75"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80")' }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60 z-1"></div>
            <div className="absolute z-2 inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-semibold uppercase mb-4">
                    <span className='uppercase'>Learn </span>
                    <span className={colors[0]}> c</span> 
                        <span className={colors[1]}>o</span>
                        <span className={colors[2]}>d</span>
                        <span className={colors[3]}>i</span>
                        <span className={colors[4]}>n</span>
                        <span className={colors[5]}>g</span>
                </h1>
                <p className="text-lg mb-4">Explore a variety of programming languages and enhance your skills.</p>
                <p className="text-lg mb-6">Interactive learning environment</p>
                <div className="flex space-x-4">
                    <button href="#" className="btn btn-primary text-green-500">Try Now</button>
                    <button href="#" className="btn btn-primary-daisy hover:bg-gray-500">Remind Me</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
