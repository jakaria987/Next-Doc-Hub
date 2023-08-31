import React from 'react';

const Banner = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500', 'text-pink-500'];

    return (
        <div>
            <div
                className="relative h-[550px] bg-cover w-full bg-no-repeat bg-center flex items-center justify-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/9cyTpqC/h.jpg")' }}
            >
                <div className="absolute bg-black opacity-40 inset-0"></div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-4xl font-semibold uppercase  mb-6"><span className='uppercase'>Learn </span>
                        <span className={colors[0]}> c</span> 
                        <span className={colors[1]}>o</span>
                        <span className={colors[2]}>d</span>
                        <span className={colors[3]}>i</span>
                        <span className={colors[4]}>n</span>
                        <span className={colors[5]}>g</span></h1> 
                        
                        <p className="text-lg ">Explore a variety of programming languages and enhance your skills.</p>
                        <p className="text-lg">Interactive learning environment</p>


                        <div className="mt-10">
                            <button href="#" className="btn btn-primary text-green-500 mr-4 x">Try Now
                            </button>
                            <button href="#" className="btn btn-primary-daisy">Remind Me </button>

                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;