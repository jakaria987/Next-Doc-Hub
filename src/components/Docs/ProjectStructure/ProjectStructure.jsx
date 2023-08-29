import React from "react";

const Project = () => {
  return (
    <div className="px-5 lg:pl-16 mt-16 mb-10">
      <h1 className="text-3xl font-semibold">Next.js Project Structure</h1>
      <p className="my-3">
        This page provides an overview of the file and folder structure of a
        Next.js project.
        <br />
        It covers top-level files and folders, configuration files, and routing
        <br />
        conventions within the app and pages directories
      </p>
      <div class="border-b-2 w-full lg:w-1/2 my-10 border-gray-200 ..."></div>
      <h1 className="text-2xl font-semibold">Top-level folders</h1>
      <div className="overflow-x-auto my-5 w-full lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">app</td>
              <td>App Router</td>
            </tr>
            <tr>
              <td className="text-blue-600">public</td>
              <td>Pages Router</td>
            </tr>
            <tr>
              <td className="text-blue-600">pages</td>
              <td>Static assets to be served</td>
            </tr>
            <tr>
              <td className="text-blue-600">src</td>
              <td> Optional application source folder</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-b-2 w-full lg:w-1/2 my-10 border-gray-200 ..."></div>
      <h1 className="text-2xl font-semibold">Top-level files</h1>
      <div className="overflow-x-auto my-5 w-full  lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>Next.js</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">next.config.js </td>
              <td>Configuration file for Next.js</td>
            </tr>
            <tr>
              <td className="text-blue-600">package.json</td>
              <td> Project dependencies and scripts</td>
            </tr>
            <tr>
              <td className="text-blue-600">instrumentation.ts</td>
              <td>OpenTelemetry and Instrumentation file</td>
            </tr>
            <tr>
              <td className="text-blue-600">middleware.ts</td>
              <td> Next.js request middleware</td>
            </tr>
            <tr>
              <td className="text-blue-600">.env</td>
              <td> Environment variables</td>
            </tr>
            <tr>
              <td className="text-blue-600">.env.local</td>
              <td> Local environment variables</td>
            </tr>
            <tr>
              <td className="text-blue-600">env.production</td>
              <td> Production environment variables</td>
            </tr>
            <tr>
              <td className="text-blue-600">.env.development</td>
              <td>Development environment variables</td>
            </tr>
            <tr>
              <td className="text-blue-600">.eslintrc.json</td>
              <td> Configuration file for ESLint</td>
            </tr>
            <tr>
              <td>.gitignore</td>
              <td> Git files and folders to ignore</td>
            </tr>
            <tr>
              <td>.next-env.d.ts</td>
              <td> TypeScript declaration file for Next.js</td>
            </tr>
            <tr>
              <td>postcss.config.js</td>
              <td> Configuration file for Tailwind CSS</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-b-2 w-full lg:w-1/2 my-10 border-gray-200 ..."></div>
      <h1 className="text-2xl font-semibold">app Routing Conventions</h1>
      <h2 className="text-xl font-semibold my-5">Routing Files</h2>
      <div className="overflow-x-auto my-5 w-full lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">layout </td>
              <td>.js .jsx .tsx</td>
              <td>Layout </td>
            </tr>
            <tr>
              <td className="text-blue-600">page</td>
              <td> .js .jsx .tsx</td>
              <td>Page</td>
            </tr>
            <tr>
              <td className="text-blue-600">loading</td>
              <td> .js .jsx .tsx</td>
              <td>loading UI</td>
            </tr>
            <tr>
              <td className="text-blue-600">not-found</td>
              <td> .js .jsx .tsx</td>
              <td>Not-found UI</td>
            </tr>
            <tr>
              <td className="text-blue-600">error</td>
              <td> .js .jsx .tsx</td>
              <td>Error UI</td>
            </tr>
            <tr>
              <td className="text-blue-600">global-error</td>
              <td> .js .jsx .tsx</td>
              <td>Global-error UI</td>
            </tr>
            <tr>
              <td className="text-blue-600">route</td>
              <td> .js .jsx </td>
              <td> API endpoint</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold my-3"> Nested Routes</h2>
      <div className="overflow-x-auto my-5 w-full lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">folder</td>
              <td> Route segment</td>
            </tr>
            <tr>
              <td className="text-blue-600">folder/ folder</td>
              <td> Nested route segment</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-semibold my-5">
        Parallel and Intercepted Routes
      </h2>
      <div className="overflow-x-auto my-5 w-full  lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">@folder</td>
              <td> Named slot</td>
            </tr>
            <tr>
              <td className="text-blue-600">(.)folder</td>
              <td> Intercept same level</td>
            </tr>
            <tr>
              <td className="text-blue-600">(..)folder</td>
              <td> Intercept one level above</td>
            </tr>
            <tr>
              <td className="text-blue-600">(..) (..)folder</td>
              <td> Intercept two levels above</td>
            </tr>
            <tr>
              <td className="text-blue-600">(...)folder</td>
              <td> Intercept from root</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-b-2 w-full lg:w-1/2 my-10 border-gray-200 ..."></div>
      <h1 className="text-2xl font-semibold">pages Routing Conventions</h1>
      <h2 className="text-xl font-semibold my-5">Special Files</h2>
      <div className="overflow-x-auto my-5 w-full  lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">-app </td>
              <td>.js .jsx .tsx</td>
              <td> Custom App </td>
            </tr>
            <tr>
              <td className="text-blue-600">-document</td>
              <td> .js .jsx .tsx</td>
              <td> Custom Document</td>
            </tr>
            <tr>
              <td className="text-blue-600">-error</td>
              <td> .js .jsx .tsx</td>
              <td> Custom Error Page</td>
            </tr>
            <tr>
              <td className="text-blue-600">404</td>
              <td> .js .jsx .tsx</td>
              <td>404 Error Page</td>
            </tr>
            <tr>
              <td className="text-blue-600">500</td>
              <td> .js .jsx .tsx</td>
              <td>500 Error Page</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto my-5 w-full  lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead></thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">app</td>
              <td>App Router</td>
            </tr>
            <tr>
              <td className="text-blue-600">public</td>
              <td>Pages Router</td>
            </tr>
            <tr>
              <td className="text-blue-600">pages</td>
              <td>Static assets to be served</td>
            </tr>
            <tr>
              <td className="text-blue-600">src</td>
              <td> Optional application source folder</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="text-xl font-semibold">Routes</h1>
      <div className="overflow-x-auto my-5 w-full lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>Folder Convention</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">index </td>
              <td> .js .jsx .tsx</td>
              <td>Home page</td>
            </tr>
            <tr>
              <td className="text-blue-600">folder/index</td>
              <td> .js .jsx .tsx</td>
              <td> Nested page</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto  w-full lg:w-2/5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>File Convention</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-blue-600">index </td>
              <td> .js .jsx .tsx</td>
              <td>Home page</td>
            </tr>
            <tr>
              <td className="text-blue-600">file</td>
              <td> .js .jsx .tsx</td>
              <td> Nested page</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
