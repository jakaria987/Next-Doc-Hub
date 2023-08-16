import React from 'react';

const PoweredBy = () => {
    return (
        <div>
            <h5 className='tracking-widest text-slate-500 text-center font-bold text-sm '>POWERING THE BEST FRONTEND TEAMS</h5>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-7xl mx-auto  bg-transparent my-12'>
                <img className='w-24  bg-slate-400 bg-transparent' src="https://assets.vercel.com/image/upload/v1582596549/front/home/new/logos/airbnb.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1581706075/front/home/new/logos/github.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1675298561/front/home/new/logos/open-ai.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1675298561/front/home/new/logos/twitch.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1618004238/front/home/new/logos/patreon.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1581706075/front/home/new/logos/auth0.svg" alt="" />
                <img className='w-24' src="https://assets.vercel.com/image/upload/v1663886786/front/home/new/logos/netflix.svg" alt="" />
            </div>
        </div>
    );
};

export default PoweredBy;