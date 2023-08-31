import React from 'react';

const About = () => {
    return (
        <div className='bg-zinc-200 my-12 '>
           
           <div className="hero h-[250px] bg-opacity-80" style={{backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-dark-green-cyan-paper-cut-minimalist-background-for-brochure-poster-banner-image_405384.jpg)'}}>

  <div className=" text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-white text-5xl font-bold">About Us</h1>
      <p className=" text-white text-xl">Gateway to Diverse Programming Languages</p>
      <div className='mt-4'>
        <button className='btn btn-outline bg-white'>Learn more</button>
      </div>
    </div>
  </div>
</div>
<div className='mt-12 md:flex justify-between pb-12 px-20 gap-12 '>
    <div className='ms-12 pb-6'>
    <h1 className='text-2xl font-bold text-slate-700 pb-3 hover:text-3xl hover:text-blue-500  hover:underline underline-offset-2'>Introduction</h1>
    <p>ProgNexus is an innovative online platform designed to teach programming languages to individuals of all backgrounds.With a user-friendly interface and comprehensive curriculum.</p>
    </div>
    <div className=' ms-12 pb-6'>
    <h1 className='text-2xl font-bold text-slate-700 pb-3 hover:text-3xl hover:text-blue-500  hover:underline underline-offset-2'>The mission & vision</h1>
    <p>ProgNexus aims to bridge the gap between aspiring programmers and their coding ambitions. This report outlines the structure, purpose, and features of the ProgNexus website.</p>
    </div>
    <div className='ms-12 pb-6'>
    <h1 className='text-2xl font-bold text-slate-700 pb-3 hover:text-3xl hover:text-blue-500 hover:underline underline-offset-2'>Uniqueness</h1>
    <p>Interactive learning process where users can code in real time. Community interaction helps users for asking and sharing their progress.Users can diverse learning paths.</p>
    </div>
    
</div>
        </div>
    );
};

export default About;