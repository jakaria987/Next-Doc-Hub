"use client"
import React, { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Page = ({ params }) => {
    const id = params.id;
    const [proDocs, setProDocs] = useState([]);
    useEffect(() => {
        fetch("/api/programming")
            .then(res => res.json())
            .then(data => setProDocs(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const languageData = proDocs.find(prodoc => prodoc._id === id);
    const sections = languageData?.sections || {};
    console.log(sections)
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopyClick = (index) => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    }

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-center">Documentation: {languageData?.language}</h1>

                <p className="text-lg text-gray-700 mb-6">{languageData?.introduction}</p>

                <div className="flex flex-wrap mb-8">
                    <div className="w-full md:w-3/4 pr-8">
                        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                        <ul className="space-y-2">
                            {languageData?.tableOfContents.map((section, index) => (
                                <li key={index} className="mb-2">
                                    <a href={`#${section}`} className="text-blue-600 hover:underline">{section}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h2 className="text-2xl font-semibold mb-4">Sections</h2>
                        <ul className="space-y-2">
                            {Object.keys(sections).map((section, index) => (
                                <li key={index} className="mb-2">
                                    <a href={`#${section}`} className="text-blue-600 hover:underline">{section}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="my-8" />

                {Object.keys(sections).map((section, index) => (
                    <div key={index} id={section} className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">{section}</h2>
                        {Array.isArray(sections[section]) ? (
                            <ul className="list-disc pl-8 space-y-2">
                                {sections[section].map((subsection, subIndex) => (
                                    <li key={subIndex} className="mb-2 text-gray-700">{subsection.description}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-700">{sections[section]}</p>
                        )}
                    </div>
                ))}

                <hr className="my-8" />

                <h2 className="text-2xl font-semibold mb-4">Example Code</h2>
                <div className="mb-8">
                    {sections["Example Code"]?.map((example, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{example.description}</h3>
                            <pre className="bg-gray-100 p-4 overflow-auto relative">
                                <code className="text-sm block whitespace-pre">{example.code}</code>
                                <CopyToClipboard text={example.code}>
                                    <button
                                        className={`absolute top-2 right-2 p-1 text-xs rounded focus:outline-none ${copiedIndex === index ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
                                            }`}
                                        onClick={() => handleCopyClick(index)}
                                    >
                                        {copiedIndex === index ? 'Copied' : 'Copy'}
                                    </button>
                                </CopyToClipboard>
                            </pre>
                            <p className="text-sm mt-1">{example.detailedDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Page;
