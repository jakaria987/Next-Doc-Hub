import React from "react";

const ReactDocs = () => {
  return (
    <div>
      <h2
        className="text-4xl font-medium px-
      3 text-center"
      >
        React Documentation
      </h2>
      <div className="bg-rose-50 px-5 lg:px-16 py-5 lg:py-16 mx-auto my-5 lg:my-10">
        <p>React is a JavaScript library for building user interfaces.</p>
        <p className="py-5">React is used to build single-page applications.</p>
        <p className="mb-3">
          React allows us to create reusable UI components.
        </p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">Why Study JavaScript?</h1>
      <p className="px-5 ">
        Our "Show React" tool makes it easy to demonstrate React. It shows both
        the code and the result.
      </p>
      <div className="px-10 lg:px-20 bg-gray-100 mt-5  py-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code">
          <pre data-prefix="import React from 'react';"></pre>
          <pre data-prefix="import ReactDOM from 'react-dom/client';"></pre>
          <pre data-prefix="function Hello(props) {"></pre>
          <pre data-prefix="return <h1>Hello World!</h1>;"></pre>
          <pre data-prefix="}"></pre>
          <pre
            data-prefix="const container = document.getElementById(root);
"
          ></pre>
          <pre data-prefix="const root = ReactDOM.createRoot(container);"></pre>
          <pre data-prefix="root.render(<Hello />);"></pre>
        </div>
      </div>
      <h1 className="text-2xl my-5 px-5 font-medium">Create React App</h1>
      <p className="px-5 ">
        To learn and test React, you should set up a React Environment on your
        computer.
      </p>
      <p className="px-5 py-5">This tutorial uses the create-react-app.</p>
      <p className="px-5 ">
        The create-react-app tool is an officially supported way to create React
        applications.
      </p>
      <p className="px-5 py-5">Node.js is required to use create-react-app.</p>
      <p className="px-5 ">
        Open your terminal in the directory you would like to create your
        application.
      </p>
      <p className="px-5 py-5">
        Run this command to create a React application named my-react-app:
      </p>

      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">
          npx create-react-app my-react-app
        </p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">
        Run the React Application
      </h1>
      <p className="px-5 ">
        Run this command to move to the my-react-app directory:
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">cd my-react-app</p>
      </div>
      <p className="px-5 ">
        Run this command to execute the React application my-react-app:
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">npm start</p>
      </div>
      <p className="px-5 mb-5">
        A new browser window will pop up with your newly created React App! If
        not, open your browser and type localhost:3000 in the address bar.
      </p>
      <hr />
      <h2 className="text-2xl my-5 px-5 ">What You Should Already Know</h2>
      <p className="px-5 ">
        Before starting with React.JS, you should have intermediate experience
        in:
      </p>
      <ul className=" px-5  mt-3 mx-auto py-5 ">
        <li>HTML</li>
        <li className="pt-3">CSS</li>
        <li>JavaScript</li>
      </ul>

      <p className="mb-5 px-5 ">
        You should also have some experience with the new JavaScript features
        introduced in ECMAScript 6 (ES6), you will learn about them in the React
        ES6 chapter.
      </p>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">React.JS History</h1>
      <p className="px-5 ">
        Current version of React.JS is V18.0.0 (April 2022).
      </p>
      <p className="px-5 py-5">
        Initial Release to the Public (V0.3.0) was in July 2013.
      </p>
      <p className="px-5 ">
        React.JS was first used in 2011 for Facebook's Newsfeed feature.
      </p>
      <p className="px-5 py-5">
        Facebook Software Engineer, Jordan Walke, created it.
      </p>
      <p className="px-5 ">
        Current version of create-react-app is v5.0.1 (April 2022).
      </p>
      <p className="px-5 py-5">
        create-react-app includes built tools such as webpack, Babel, and
        ESLint.
      </p>
      <hr />
      <h1 className="text-2xl my-5 px-5 ">Upgrade to React 18</h1>
      <p className="px-5 ">
        Upgrading an existing React application to version 18 only requires two
        steps.
      </p>
      <h1 className="text-xl my-5 px-5 font-medium">
        Step 1: Install React 18
      </h1>
      <p className="px-5 ">
        To install the latest version, from your project folder run the
        following from the terminal:
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">
          npm i react@latest react-dom@latest
        </p>
      </div>
      <hr />
      <h1 className="text-xl my-5 px-5 font-medium">
        Step 2: Use the new root API
      </h1>
      <p className="px-5 ">
        In order to take advantage of React 18's concurrent features you'll need
        to use the new root API for client rendering
      </p>
      <div className="px-10 lg:px-20 bg-gray-100 mt-5  py-5 mx-auto">
        <div className="mockup-code">
          <pre data-prefix="// Before"></pre>
          <pre data-prefix="import ReactDOM from 'react-dom';"></pre>
          <pre data-prefix="ReactDOM.render(<App />, document.getElementById('root'));"></pre>
          <pre data-prefix="// After"></pre>
          <pre data-prefix="import ReactDOM from 'react-dom/client';"></pre>
          <pre data-prefix="const root = ReactDOM.createRoot(document.getElementById('root'));"></pre>
          <pre data-prefix="root.render(<App />);"></pre>
        </div>
      </div>
    </div>
  );
};

export default ReactDocs;
