import Link from "next/link";
import React from "react";

const Install = () => {
  return (
    <div className="">
      <div className="px-5 lg:pl-10 mt-16 mb-10">
        <h1 className="text-3xl font-semibold">Installation</h1>
        <p className="mt-8">System Requirements:</p>
        <a href="https://nodejs.org/en" className="text-blue-500 mt-5">
          - Node.js 16.14 <span className="text-black ">or later.</span>
        </a>
        <p className="mt-2 ">
          - macOS, Windows (including WSL), and Linux are supported.
        </p>
        <div class="border-b-2 w-full lg:w-1/2 my-8 border-gray-200 ..."></div>
        <h1 className="text-2xl font-semibold">Automatic Installation</h1>
        <p className="mb-5">
          We recommend starting a new Next.js app using create-next-app, which
          sets up
          <br />
          everything automatically for you. To create a project, run:
        </p>
        <div className="border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
          <div className="flex px-5 py-10 bg-base-200">
            <p>
              npx <span className="text-green-700">create-next-app@latest</span>
            </p>
          </div>
        </div>
        <p className="my-5">
          On installation, you'll see the following prompts:
        </p>
        <div className="border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">Terminal</div>
          <div className="flex px-5 py-10 text-gray-700 bg-base-200">
            <ol>
              <li>1 What is your project named? my-app</li>

              <li>2 Would you like to use TypeScript? No / Yes</li>

              <li>3 Would you like to use ESLint? No / Yes</li>

              <li>4 Would you like to use Tailwind CSS? No / Yes</li>

              <li>5 Would you like to use `src/` directory? No / Yes</li>

              <li>
                6 Would you like to use App Router? (recommended) No / Yes
              </li>

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
        <div className="border w-full lg:w-1/2 p-5 mb-10">
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
        <div class="border-b-2 w-full lg:w-1/2 my-5 border-gray-200 ..."></div>
        <h1 className="text-2xl font-semibold">Manual Installation</h1>
        <p className="my-4">
          To manually create a new Next.js app, install the required packages:
        </p>
        <div className="border w-full lg:w-1/2">
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
        <div className="border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">
            package.json
          </div>
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
          - build: runs next build to build the application for production
          usage.
        </p>
        <p className="my-2">
          - start: runs next start to start a Next.js production server.
        </p>
        <p className="mt-2 ">
          - lint: runs next lint to set up Next.js' built-in ESLint
          configuration.
        </p>
        <p className="my-5">
          Create a root layout inside app/layout.tsx with the required tags:
        </p>
        <div className=" mockup-code border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">
            app/layout.tsx
          </div>
          <div className="flex px-5 py-10 text-gray-700 bg-base-200">
            <ol>
              <li>
                {" "}
                <pre data-prefix="1 {">
                  <code>
                    export default function RootLayout
                    <pre data-prefix="({"></pre>
                  </code>
                </pre>
              </li>
              <li>
                <pre data-prefix="2 {">
                  <code> children,</code>
                </pre>
              </li>
              <li>
                <pre data-prefix="3 }:{">
                  <code></code>
                </pre>
              </li>
              <li>
                <pre data-prefix="4 return ("></pre>
              </li>
              <li>
                <pre
                  data-prefix="5 <html lang='en'>"
                  className="text-green-700"
                ></pre>
              </li>
              <li>
                <pre data-prefix="6  <body>{children}</body>"></pre>
              </li>
              <li>
                <pre data-prefix="7  </html>"></pre>
              </li>
              <li>
                <pre data-prefix="8  )"></pre>
              </li>
              <li>
                <pre data-prefix="9  }"></pre>
              </li>
            </ol>
          </div>
        </div>
        <p className="my-5">
          Finally, create a home page app/page.tsx with some initial content:
        </p>
        <div className="mockup-code border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">
            app/page.tsx
          </div>
          <div className="flex px-5 py-10 text-gray-700 bg-base-200">
            <ol>
              <li>
                <pre data-prefix="1 export default function page (){"></pre>
              </li>
              <li>
                <pre data-prefix="2  return <h1>Hello, Next.js!</h1>"></pre>
              </li>
              <li>
                <pre data-prefix="3 }"></pre>
              </li>
            </ol>
          </div>
        </div>
        <div className="border w-full lg:w-1/2 p-5 my-8">
          <h1 className="text-xl font-semibold">Good to know:</h1>
          <p>
            -If you forget to create layout.tsx, Next.js will automatically
            create this file when running the development server with next dev.
          </p>
        </div>
        <p className="my-5">
          Next, add an _app.tsx file inside pages/ to define the global layout.
          <br />
          Learn more about the custom App file.
        </p>
        <div className="mockup-code border w-full lg:w-1/2">
          <div className="border px-5 text-gray-400 bg-gray-100">
            app/page.tsx
          </div>
          <div className="flex px-5 py-10 text-gray-700 bg-base-200">
            <ol>
              <li>
                <pre data-prefix="1 import type { AppProps } from 'next/app'"></pre>
              </li>
              <li>
                <pre data-prefix="2  "></pre>
              </li>
              <li>
                <pre data-prefix="3 export default function App({ Component, pageProps }: AppProps) {"></pre>
              </li>
              <li>
                <pre data-prefix="4 return <Component {...pageProps} />"></pre>
              </li>
              <li>
                <pre data-prefix="5 }  "></pre>
              </li>
            </ol>
          </div>
        </div>
        <p className="my-5">Learn more about using the Pages Router.</p>
        <div className="border w-full lg:w-1/2 p-5 my-5">
          <h1 className="text-xl font-semibold">Good to know:</h1>
          <p>
            Although you can use both routers in the same project, routes in app
            will be prioritized over pages. We recommend using only one router
            in your new project to avoid confusion.
          </p>
        </div>
        <h1 className="text-xl font-semibold">The public folder (optional)</h1>
        <p className="my-2">
          Create a public folder to store static assets such as images, fonts,
          etc.
          <br />
          Files inside public directory can then be referenced by your code
          starting from the base URL (/).
        </p>
        <div class="border-b-2 w-full lg:w-1/2 my-10 border-gray-200 ..."></div>
        <h1 className="text-xl font-semibold my-5">
          Run the Development Server
        </h1>
        <ol className="text-lg">
          <li>1. Run npm run dev to start the development server.</li>
          <li>2. Visit http://localhost:3000 to view your application.</li>
          <li>
            3. Edit app/layout.tsx (or pages/index.tsx) file and save it to
            <br />
            see the updated result in your browser.
          </li>
        </ol>
        <h1 className="text-2xl font-semibold mt-10">Next Steps</h1>
        <p className="my-2">
          Learn about the files and folders in your Next.js project.
        </p>
        <div className="shadow-lg bg-white w-full md:w-1/2 lg:w-1/5 p-5 border my-10">
          <Link href="/ProjectStructure">
            <h1 className="text-lg font-semibold">Project Structure</h1>
            <p className="my-2 text-gray-500">
              A list of folders and files
              <br />
              conventions in a Next.js Project
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Install;
