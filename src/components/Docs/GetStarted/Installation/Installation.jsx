import React from "react";

const Install = () => {
  return (
    <div className="pl-10 mt-20 mb-10">
      <h1 className="text-3xl font-semibold">Installation</h1>
      <p className="mt-8">System Requirements:</p>
      <a href="https://nodejs.org/en" className="text-blue-500 mt-5">
        - Node.js 16.14 <span className="text-black ">or later.</span>
      </a>
      <p className="mt-2 mb-5">
        - macOS, Windows (including WSL), and Linux are supported.
      </p>
      <h1 className="text-2xl font-semibold">Automatic Installation</h1>
      <p className="mb-5">
        We recommend starting a new Next.js app using create-next-app, which
        sets up
        <br />
        everything automatically for you. To create a project, run:
      </p>
      <div className="border w-1/2">
        <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
        <div className="flex px-5 py-10 bg-base-200">
          <p>
            npx <span className="text-green-700">create-next-app@latest</span>
          </p>
        </div>
      </div>
      <p className="my-5">On installation, you'll see the following prompts:</p>
      <div className="border w-1/2">
        <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
        <div className="flex px-5 py-10 text-gray-700 bg-base-200">
          <ol>
            <li>1 What is your project named? my-app</li>

            <li>2 Would you like to use TypeScript? No / Yes</li>

            <li>3 Would you like to use ESLint? No / Yes</li>

            <li>4 Would you like to use Tailwind CSS? No / Yes</li>

            <li>5 Would you like to use `src/` directory? No / Yes</li>

            <li>6 Would you like to use App Router? (recommended) No / Yes</li>

            <li>
              7 Would you like to customize the default import alias? No / Yes
            </li>

            <li>8 What import alias would you like configured? @/*</li>
          </ol>
        </div>
      </div>
      <p className="my-5">
        After the prompts, create-next-app will create a folder with your
        project name
        <br />
        and install the required dependencies.
      </p>
      <div className="border w-1/2 p-5 mb-10">
        <h1 className="text-xl font-semibold">Good to know:</h1>
        <p>
          - Next.js now ships with TypeScript, ESLint, and Tailwind CSS
          configuration by default.
        </p>
        <p>
          - You can optionally use a src directory in the root of your project
          to separate your application's code from configuration files.
        </p>
      </div>
      <h1 className="text-2xl font-semibold">Manual Installation</h1>
      <p>
        To manually create a new Next.js app, install the required packages:
      </p>
      <div className="border w-1/2">
        <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
        <div className="flex px-5 py-10 bg-base-200">
          <p>
            npx{" "}
            <span className="text-green-700">
              install next@latest react@latest react-dom@latest
            </span>
          </p>
        </div>
      </div>
      <p className="my-5">
        Open your package.json file and add the following scripts:
      </p>
      <div className="border w-1/2">
        <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
        <div className="flex px-5 py-10 text-gray-700 bg-base-200">
          <ol>
            <li></li>

            <li>"scripts": </li>

            <li> "dev": "next dev",</li>

            <li>"build": "next build",</li>

            <li>"start": "next start",</li>

            <li>"lint": "next lint"</li>
          </ol>
        </div>
      </div>
      <p className="my-4">
        These scripts refer to the different stages of developing an
        application:
      </p>
      <p className="my-2">
        - dev: runs next dev to start Next.js in development mode.
      </p>
      <p className="my-2">
        - build: runs next build to build the application for production usage.
      </p>
      <p className="my-2">
        - start: runs next start to start a Next.js production server.
      </p>
      <p className="mt-2 mb-5">
        - lint: runs next lint to set up Next.js' built-in ESLint configuration.
      </p>
    </div>
  );
};

export default Install;
