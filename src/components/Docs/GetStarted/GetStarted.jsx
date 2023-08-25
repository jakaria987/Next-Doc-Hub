import React from 'react';
import '../GetStarted/Styles/Styles.css';

const GetStarted = () => {
    return (
        <div className='pl-10 mt-40 mb-10'>
              <h1 className='text-3xl font-semibold'>Introduction</h1>
            <p className='my-6'>Welcome to the Next.js documentation!</p>
            <div className="divider"></div>
            <h2 className='text-2xl font-bold my-8'>What is Next.js? </h2>
            <p className="text-[15px] space-y-5">Next.js is a React framework for building full-stack web applications. You use React<br /> Components to build user interfaces, and Next.js for additional features and optimizations.<br />
                <p>Under the hood, Next.js also abstracts and automatically configures tooling needed for<br />  React, like bundling, compiling, and more. This allows you to focus on building your<br />  application instead of spending time with configuration.<br />
                </p>
                <p> Whether you're an individual developer or part of a larger team, Next.js can help you build<br />  interactive, dynamic, and fast React applications.</p>
            </p>
            <h2 className='text-2xl font-bold my-8'>Main Features </h2>
            <p className='my-6'>Some of the main Next.js features include:</p>
            <div className="text-[15px] mr-44">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className='text-blue-500 font-semibold'>Comprehensive Documentation</td>
                                <td> Provide in-depth documentation covering all aspects of Next.js, including guides, concepts, API references, and examples.
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className='text-blue-500 font-semibold'>Search Functionality</td>
                                <td> Implement a powerful search feature to help users find specific topics or keywords quickly.
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className='text-blue-500 font-semibold'>Interactive Code Examples</td>
                                <td> Include interactive code snippets that users can run and modify directly on the website to see the results in real-time.</td>
                            </tr>
                            <tr>
                                <td className='text-blue-500 font-semibold'>Tutorials and Guides</td>
                                <td>  Offer step-by-step tutorials and guides for beginners and advanced users alike to learn and master Next.js concepts.</td>
                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Community Contributions</td>
                                <td>  Allow users to submit their own tutorials, code examples, or improvements to enrich the website's content.
                                </td>
                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Changelog and Release Notes</td>
                                <td>Keep track of Next.js updates, changelogs, and release notes to inform users about the latest improvements and changes.
                                </td>
                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Showcase and Use Cases</td>
                                <td> Highlight real-world applications and projects built with Next.js to inspire and demonstrate its capabilities.
                                </td>
                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Interactive Navigation</td>

                                <td>
                                    Provide a user-friendly and intuitive navigation system that allows users to explore different sections easily.
                                </td>                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Mobile Responsiveness</td>
                                <td>Ensure the website is fully responsive to provide a seamless experience on various devices.

                                </td>                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Comment Section</td>
                                <td> Include a comment section for each topic to encourage discussions, questions, and feedback from users.
                                </td>                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Multilingual Support</td>
                                <td> If possible, offer translations of the documentation to cater to a broader international audience.
                                </td>                            </tr> <tr>
                                <td className='text-blue-500 font-semibold'>Error Handling and Troubleshooting</td>
                                <td> Include troubleshooting guides and solutions for common issues that users might encounter while using Next.js.
                                </td>                            </tr>
                            <tr>
                                <td className='text-blue-500 font-semibold'>Newsletter and Updates</td>
                                <td> Offer a newsletter subscription for users to receive the latest updates, tutorials, and news related to Next.js.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>
    );
};

export default GetStarted;