import React from "react";

const CSSDocs = () => {
  return (
    <div>
      <h2 className="text-4xl font-medium text-center">CSS Documentation</h2>
      <div className="bg-indigo-200 px-5 lg:px-20 mx-auto my-5 lg:my-10 py-8 lg:py-20">
        <p>CSS is the language we use to style an HTML document.</p>
        <p className="py-5">
          CSS describes how HTML elements should be displayed.
        </p>
        <p>This tutorial will teach you CSS from basic to advanced.</p>
      </div>

      <h1 className="text-2xl my-5 px-5 font-medium">
        Easy Learning with HTML "Try it Yourself"
      </h1>
      <p className="px-5">
        This CSS tutorial contains hundreds of CSS examples.
      </p>
      <p className="mb-5 px-5">
        With our online editor, you can edit the CSS, and click on a button to
        view the result.
      </p>
      <div className="px-20 bg-gray-100 py-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code">
          <pre data-prefix="body {"></pre>
          <pre data-prefix="  background-color: lightblue;"></pre>
          <pre data-prefix=" }"></pre>
          <pre data-prefix="h1 {"></pre>
          <pre data-prefix="color: white;"></pre>
          <pre data-prefix="  text-align: center;"></pre>
          <pre data-prefix="}"></pre>
          <pre data-prefix="p {"></pre>
          <pre data-prefix=" font-family: verdana;"></pre>
          <pre data-prefix="font-size: 20px;"></pre>
          <pre data-prefix=" }"></pre>
        </div>
      </div>
      <h1 className="text-2xl px-5 font-medium my-5">What is CSS?</h1>
      <ul className="mb-5 px-5">
        <li>CSS stands for Cascading Style Sheets</li>
        <li className="my-3 ">
          The "html" element is the root element of an HTML page
        </li>
        <li>
          CSS describes how HTML elements are to be displayed on screen, paper,
          or in other media
        </li>

        <li className="my-3">
          CSS saves a lot of work. It can control the layout of multiple web
          pages all at once
        </li>
        <li>External stylesheets are stored in CSS files</li>
      </ul>
      <hr />
      <h1 className="text-2xl font-medium px-5 my-5">Why use CSS?</h1>
      <p className="mb-5 px-5">
        CSS is used to define styles for your web pages, including the design,
        <br />
        layout and variations in display for different devices and screen sizes.
      </p>
      <hr />
      <h1 className="text-2xl px-5 font-medium my-5">
        CSS Solved a Big Problem
      </h1>
      <p className="px-5">
        HTML was NEVER intended to contain tags for formatting a web page!
      </p>
      <p className="my-5 px-5">
        HTML was created to describe the content of a web page, like:
      </p>
      <p className="px-5">"h1" This is a heading "h1"</p>
      <p className="my-5 px-5">"P" This is a paragraph. "p"</p>
      <p className="px-5">
        When tags like "font", and color attributes were added to the HTML 3.2
        specification, it started a nightmare for web developers. Development of
        large websites, where fonts and color information were added to every
        single page, became a long and expensive process.
      </p>
      <p className="my-5 px-5">
        To solve this problem, the World Wide Web Consortium (W3C) created CSS.
      </p>
      <p className="mb-5 px-5">
        CSS removed the style formatting from the HTML page!
      </p>
      <hr />
      <h2 className="text-2xl my-5 px-5 font-medium">CSS Syntax</h2>

      <p className="px-5">
        CSS is the language we use to style an HTML document.
      </p>
      <p className="py-5 px-5">
        CSS describes how HTML elements should be displayed.
      </p>
      <p className="mb-5 px-5">
        This tutorial will teach you CSS from basic to advanced.
      </p>

      <div className="px-20 bg-gray-100 py-5 my-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code my-5">
          <pre data-prefix="p {"></pre>
          <pre data-prefix="color: red;"></pre>
          <pre data-prefix="text-align: center;"></pre>
          <pre data-prefix=" }"></pre>
        </div>
      </div>
      <h1 className="text-2xl my-5 px-5">Example Explained</h1>
      <ul className="mb-5 px-5">
        <li>
          p is a selector in CSS (it points to the HTML element you want to
          style: p).
        </li>
        <li className="my-5">
          color is a property, and red is the property value
        </li>
        <li>text-align is a property, and center is the property value</li>
      </ul>
      <hr />
      <h1 className="text-2xl my-5 px-5">All CSS Simple Selectors</h1>
      <div className="overflow-x-auto mb-5 border border-black w-full lg:w-4/5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Selector</th>
              <th>Example </th>
              <th>Example description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>#id</td>
              <td> #firstname</td>
              <td> Selects the element with id="firstname"</td>
            </tr>

            <tr>
              <td>.class</td>
              <td> .intro</td>
              <td> Selects all elements with class="intro"</td>
            </tr>
            <tr>
              <td>element.class</td>
              <td> p .intro</td>
              <td> Selects only p elements with class="intro"</td>
            </tr>
            <tr>
              <td>
                <p>
                  *
                  <br />_
                </p>
              </td>
              <td>*</td>
              <td> Selects all elements</td>
            </tr>
            <tr>
              <td>element</td>
              <td> p </td>
              <td> Selects only p elements</td>
            </tr>
            <tr>
              <td>element,element,..</td>
              <td> div, p </td>
              <td> Selects all div elements and all p elements</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <h1 className="px-5 text-2xl font-medium my-5">
        CSS Saves a Lot of Work!
      </h1>
      <p className="px-5">
        The style definitions are normally saved in external .css files
      </p>
      <p className="my-5 px-5">
        With an external stylesheet file, you can change the look of an entire
        website by changing just one file!
      </p>
    </div>
  );
};

export default CSSDocs;
