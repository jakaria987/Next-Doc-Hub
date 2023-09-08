"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

const ProrammingPage = () => {
    const [pro, setPro] = useState([])
    useEffect(() => {
        fetch("api/programming")
            .then(res => res.json())
            .then(data => setPro(data))
    }, [])
    return (
        <div className=' px-16 '>
            <h1 className=' font-serif text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-500 via-gray-700 to-black bg-clip-text text-transparent'>  Explore Basic Programming Documentation on Programming Languages </h1>
            <div className="grid grid-cols-3 items-center">
                {pro.map(languages => (
                    <div className='w-50' key={languages._id}>
                        <Link href={`/programmingDocs/${languages._id}`}>
                            <div className={`border p-4 m-4 text-center rounded shadow-md`}>
                                <Image src={languages.logo} alt={`${languages.language} Logo`} className="mx-auto" width={50} height={50} />
                                <h3 className="text-xl font-semibold mt-2">{languages.language}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProrammingPage;
