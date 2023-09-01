import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image'

const JoinCommunity = () => {
    const images = [
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ];
    return (
        <section>
            <div className="container">
                <h2 className=" text-center font-bold text-4xl">Join a Community of <br /> Millions</h2>
                <p className="text-center">
                    You're not alone. Millions of developers from around the world visit the Prognexus documentation every month. <br /> Prognexus provides a platform that unites people and teams, fostering agreement and collaboration.
                </p>
            </div>
            <div className="marquee-container overflow-hidden h-[350px]">
                <Marquee speed={100}>
                        <div className="marquee-item flex gap-5">
                            <Image
                                src="https://images.unsplash.com/photo-1627634777217-c864268db30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md -rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md -rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md -rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md -rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md rotate-3"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt=""
                                width={350}
                                height={350}
                                className=" ml-7 rounded-md -rotate-3"
                            />
                        </div>
                </Marquee>
            </div>
        </section>
    );
};

export default JoinCommunity;
