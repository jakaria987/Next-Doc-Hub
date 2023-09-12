import React from "react";

const JavaScriptDocs = () => {
  return (
    <div>
      <h2 className="text-4xl  font-medium text-center">
        JavaScript Documentation
      </h2>
      <div className="bg-white shadow-lg px-5 lg:px-20 mx-auto my-5 lg:my-10 py-5 lg:py-20">
        <p>JavaScript is the world's most popular programming language.</p>
        <p className="py-5">
          JavaScript is the programming language of the Web.
        </p>
        <p className="mb-5">JavaScript is easy to learn.</p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">Why Study JavaScript?</h1>
      <p className="px-5 ">
        JavaScript is one of the 3 languages all web developers must lea
      </p>
      <ol className="my-5 px-5">
        <li>1. HTML to define the content of web pages</li>
        <li className="py-5">2. CSS to specify the layout of web pages</li>
        <li>3. JavaScript to program the behavior of web pages</li>
      </ol>
      <hr />
      <ul className="bg-indigo-200 px-5 lg:px-20 mt-3 mx-auto py-5 lg:py-10">
        <p className="py-5 text-lg font-medium">
          This tutorial covers every version of JavaScript:
        </p>
        <li>The Original JavaScript ES1 ES2 ES3 (1997-1999)</li>
        <li className="py-5">The First Main Revision ES5 (2009)</li>
        <li>The Second Revision ES6 (2015)</li>
        <li className="py-5">
          All Yearly Additions (2016, 2017, 2018, 2019, 2020)
        </li>
      </ul>

      <hr />
      <div className="px-10 lg:px-20 bg-gray-100 mt-8  py-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code">
          <pre data-prefix="<!DOCTYPE html>"></pre>
          <pre data-prefix="<html>"></pre>
          <pre data-prefix=" <head>"></pre>
          <pre data-prefix="<script>"></pre>
          <pre data-prefix="function myFunction() {"></pre>
          <pre
            data-prefix="document.getElementById(demo).innerHTML = Paragraph changed.;
"
          ></pre>
          <pre data-prefix="}"></pre>
          <pre data-prefix="</script>"></pre>
          <pre data-prefix=" </head>"></pre>
          <pre data-prefix="<body>"></pre>
          <pre data-prefix="<h2>Demo JavaScript in Head</h2>"></pre>
          <pre data-prefix="<p> id=demo >A Paragraph </p>"></pre>
          <pre data-prefix="<button type=button onclick=myFunction()>Try it</button>"></pre>
          <pre data-prefix="</body>"></pre>
          <pre data-prefix="</html>"></pre>
        </div>
      </div>
      <h1 className="text-2xl my-5  px-5">Example</h1>
      <p className=" px-5">Scripts can also be placed in external files:</p>
      <div className="px-10 lg:px-20 mt-5 bg-gray-100 py-5 mx-auto">
        <h1 className="text-2xl">Example file: myScript.js</h1>
        <div className="mockup-code">
          <pre data-prefix="function myFunction() {"></pre>
          <pre data-prefix="  document.getElementById(demo).innerHTML = Paragraph changed.;"></pre>
          <pre data-prefix=" }"></pre>
        </div>
      </div>
      <div className="bg-white shadow-lg px-5 lg:px-16 mx-auto my-5 lg:my-10 py-5 lg:py-16">
        <p>
          External scripts are practical when the same code is used in many
          different web pages
        </p>
        <p className="py-5">JavaScript files have the file extension .js.</p>
        <p className="mb-5 ">
          To use an external script, put the name of the script file in the src
          (source) attribute of a "script" tag:
        </p>
      </div>
      <h2 className="text-2xl  px-5 my-5">External JavaScript Advantages</h2>
      <p className=" px-5">
        Placing scripts in external files has some advantages:
      </p>
      <ul className=" px-5  mt-3 mx-auto py-5 lg:py-10">
        <li>It separates HTML and code</li>
        <li className="py-5">
          It makes HTML and JavaScript easier to read and maintain
        </li>
        <li>Cached JavaScript files can speed up page loads</li>
      </ul>
      <p className="mb-5  px-5">
        To add several script files to one page - use several script tags:
      </p>
      <hr />
      <h2 className="text-2xl  px-5 my-5">External References</h2>
      <p className=" px-5">
        An external script can be referenced in 3 different ways:
      </p>
      <ul className=" px-5  mt-3 mx-auto py-5 lg:py-10">
        <li>With a full URL (a full web address)</li>
        <li className="py-5">With a file path (like /js/)</li>
        <li>Without any path</li>
      </ul>
      <p className="mb-5  px-5">
        An external script can be referenced in 3 different ways:
      </p>
      <hr />
      <div className="px-10 lg:px-20 bg-gray-100 mt-5  py-5 mx-auto">
        <h1 className="text-2xl my-5">JavaScript Syntax</h1>
        <div className="mockup-code">
          <pre data-prefix="// How to create variables:"></pre>
          <pre data-prefix="var x;"></pre>
          <pre data-prefix=" let y;"></pre>
          <pre data-prefix="// How to use variables:"></pre>
          <pre data-prefix="x = 5;"></pre>
          <pre data-prefix="y = 6;"></pre>{" "}
          <pre data-prefix="let z = x + y;"></pre>{" "}
        </div>
      </div>
      <hr />
      <h2 className="text-2xl  px-5 my-5">JavaScript Values</h2>
      <p className=" px-5">
        The JavaScript syntax defines two types of values:
      </p>
      <ul className=" px-5   mx-auto py-5">
        <li>Fixed values</li>
        <li className="pt-3">Variable values</li>
      </ul>
      <p className=" px-5"> Fixed values are called Literals.</p>
      <p className="mb-5 px-5">Variable values are called Variables.</p>
    </div>
  );
};

export default JavaScriptDocs;
