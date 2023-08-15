import React from 'react';
import Image from "next/image";
import logo from "../ProductionGradeFoundation/pngwing.com.png";
import logo2 from "../ProductionGradeFoundation/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png";
import logo3 from "../ProductionGradeFoundation/26715726.png";
import banner from "../ProductionGradeFoundation/Screenshot 2023-08-10 090503.png"

const ProductionGradeFoundation = () => {
    return (
        <div className=' md:px-32 px-3'>
            <h1 className=' text-center text-3xl mb-10 font-bold font-serif'>Forged upon a base of rapid, industrial-strength tooling</h1>
            <Image src={banner} className=' mb-5 md:mb-0'></Image>
            <div className="md:grid grid-cols-3 gap-6">
                {[
                    { logo: logo, title: "React", link: "https://react.dev/", content: "The ultimate solution for web and native UIs. Next.js elevates React, enhancing your development experience." },
                    { logo: logo2, title: "Turbopack", link: "https://turbo.build/", content: "An efficient bundler optimized for JavaScript and TypeScript, engineered in Rust, and seamlessly integrated into Next.js 13" },
                    { logo: logo3, title: "Speedy Web Compiler", link: "https://swc.rs/", content: "A flexible Rust-based foundation for the upcoming era of rapid developer tools, versatile for both compilation and minification tasks" }
                ].map((card, index) => (
                    <div className="production-grade-card bg-gray-50 py-4 px-5 rounded-xl shadow-md border border-gray-300 mb-5">
                        <a href={card.link} target='blank' key={index} >
                            <div className="logo-container mb-10 h-12">
                                <Image src={card.logo} alt="Logo" width={48} height={48} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold mb-2">
                                    {card.title}
                                </h1>
                                <p className="text-gray-700">
                                    {card.content}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductionGradeFoundation;

