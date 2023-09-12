import React from 'react';

const BookCover = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-60 h-80 bg-white border-2 border-gray-400 p-4 transition-transform transform-gpu hover:-rotate-5 hover:scale-105 duration-300">
        <div className="absolute bg-gray-300 inset-0 transform -rotate-3 origin-bottom-left"></div>
        <div className="absolute bg-gray-700 bottom-0 left-0 w-1/20 h-full"></div>
        <div className="absolute bg-gray-700 top-0 left-0 w-full h-1/20"></div>
        <div className="absolute w-full h-full p-4">
          <h1 className="text-lg font-semibold">Build a Multi-Tenant App</h1>
          <h2 className="text-sm">with Custom Domains using Next.js</h2>
          <p className="text-xs mt-2">
            Build, Deployment & Git in the book will be the content of the book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
