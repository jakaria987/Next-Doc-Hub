import React from 'react';

const Apply = () => {
    return (
        <div className=' max-w-7xl mx-auto ms-6 me-6'>
           <h1 className='text-4xl font-semibold my-8'>Building Your Application</h1> 
           <p className='my-3'>Next.js provides the building blocks to create flexible, full-stack web applications. The guides in <span className='font-bold'>Building Your Application</span> explain how to use these features and how to customize your application's behavior.</p>
          
           <p className='mb-5'>The sections and pages are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case.</p>
           <p className=''>If you're new to Next.js, we recommend starting with the <span className='text-sky-500'>Routing</span> ,<span>Rendering</span> , <span className='text-sky-500'>Data Fetching</span>  and <span className='text-sky-500'>Styling</span>  sections, as they introduce the fundamental Next.js and web concepts to help you get started. Then, you can dive deeper into the other sections such as <span className='text-sky-500'>Optimizing</span>  and <span className='text-sky-500'>Configuring</span>. Finally, once you're ready, checkout the  <span className='text-sky-500'> Deploying</span>  and <span className='text-sky-500'> Upgrading</span> sections.</p>
           <div className='my-8 grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-4'>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Routing</h2>
    <p>Learn the fundamentals of routing for front-end application</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Data Fetching</h2>
    <p>Learn how to fetch, cache, revalidate, and mutate of data React and Next.js,</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Rendering</h2>
    <p>Learn the differences between Next.js rendering environments, strategies, and runtimes.</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Caching</h2>
    <p>An overview of caching mechanisms in Next.js. </p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Styling</h2>
    <p>Learn the different way you can style your Next.js application.</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Optimizing</h2>
    <p>Optimizing your Next.js application for best performance and user experience.</p>
   
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Configuring</h2>
    <p>Learn how to configure your Next.js application.</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Deploying</h2>
    <p>Learn how to deploy your Next.js app to production, either managed or self-hosted.</p>
    
  </div>
</div>
           <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Upgrading</h2>
    <p>Learn how to upgrade to the latest  version of Next.js.</p>
    
  </div>
</div>
           </div>
        </div>
    );
};

export default Apply;