import React from "react";

const HTMLDocs = () => {
  return (
    <div>
      <h2 className="text-4xl font-medium text-center">HTML Documentation</h2>
      <div className="bg-white shadow-lg px-5 lg:px-20 mx-auto my-5 lg:my-10 py-5 lg:py-20">
        <p>HTML is the standard markup language for Web pages.</p>
        <p className="py-5">With HTML you can create your own Website.</p>
        <p>HTML is easy to learn - You will enjoy it!</p>
      </div>
      <h1 className="text-2xl my-10 px-5 font-medium">
        Easy Learning with HTML "Try it Yourself"
      </h1>
      <div className="px-20 bg-gray-100 py-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code">
          <pre data-prefix="<!DOCTYPE html>"></pre>
          <pre data-prefix="<html>"></pre>
          <pre data-prefix=" <head>"></pre>
          <pre data-prefix="<title>Page Title</title>"></pre>
          <pre data-prefix="</head>"></pre>
          <pre data-prefix="<body>"></pre>
          <pre data-prefix="<h1>My First Heading</h1>"></pre>
          <pre data-prefix="<p>My first paragraph.</p>"></pre>
          <pre data-prefix="</body>"></pre>
          <pre data-prefix="</html>"></pre>
        </div>
      </div>
      <h1 className="text-2xl px-5 mt-10 mb-5">Example Explained</h1>
      <ul className="mb-5 px-5">
        <li>
          The "DOCTYPE" html declaration defines that this document is an HTML5
          document
        </li>
        <li className="my-3">
          The "html" element is the root element of an HTML page
        </li>
        <li>
          The "head" element contains meta information about the HTML page
        </li>
        <li className="my-3">
          The "title" element specifies a title for the HTML page (which is
          shown in the browser's title bar or in the page's tab)
        </li>
        <li>
          The "body" element defines the document's body, and is a container for
          all the visible contents, such as headings, paragraphs, images,
          hyperlinks, tables, lists, etc.
        </li>
        <li className="my-3">The "h1" element defines a large heading</li>
        <li>The "p" element defines a paragraph</li>
      </ul>
      <hr />
      <h1 className="text-3xl my-5 px-5">What is an HTML Element?</h1>
      <p className="px-5">
        An HTML element is defined by a start tag, some content, and an end tag:
      </p>
      <p className="my-5 px-5">--tagname Content goes here... tagname--</p>
      <p className="px-5">
        The HTML element is everything from the start tag to the end tag:
      </p>
      <p className="mt-5 px-5">h1 My First Heading h1</p>
      <p className="my-5 px-5">p My first paragraph. p</p>
      <hr />
      <h1 className="text-2xl my-5 px-5">The "DOCTYPE" Declaration</h1>
      <p className="px-5">
        The "DOCTYPE" declaration represents the document type, and helps
        browsers to display web pages correctly.
      </p>
      <p className="my-5 px-5">
        It must only appear once, at the top of the page (before any HTML tags).
      </p>
      <p className="px-5">The "DOCTYPE" declaration is not case sensitive.</p>
      <p className="my-5 px-5">The "DOCTYPE" declaration for HTML5 is:</p>
      <hr />
      <h1 className="text-2xl px-5 font-medium my-5">
        How to View HTML Source
      </h1>
      <p className="px-5">
        Have you ever seen a Web page and wondered "Hey! How did they do that?"
      </p>
      <h1 className="text-xl px-5 my-5">View HTML Source Code:</h1>
      <p className="px-5">
        Right-click in an HTML page and select "View Page Source" (in Chrome) or
        "View Source" (in Edge), or similar in other browsers. This will open a
        window containing the HTML source code of the page.
      </p>
      <h1 className="text-xl my-5 px-5">Inspect an HTML Element:</h1>
      <p className="mb-5 px-5">
        Right-click on an element (or a blank area), and choose "Inspect" or
        "Inspect Element" to see what elements are made up of (you will see both
        the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in
        the Elements or Styles panel that opens.
      </p>
      <hr />
      <h1 className="text-2xl px-5 font-medium my-5">HTML History</h1>
      <p className="mb-5 px-5">
        Since the early days of the World Wide Web, there have been many
        versions of HTML:
      </p>
      <div className="overflow-x-auto  border border-black w-full lg:w-4/5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Year</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1989</td>
              <td> Tim Berners-Lee invented www</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>1991</th>
              <td> Tim Berners-Lee invented HTML</td>
            </tr>
            <tr>
              <th>1993</th>
              <td> Dave Raggett drafted HTML+</td>
            </tr>
            <tr>
              <th>1995</th>
              <td> HTML Working Group defined HTML 2.0</td>
            </tr>
            <tr>
              <th>1997</th>
              <td> W3C Recommendation: HTML 3.2</td>
            </tr>
            <tr>
              <th>1999</th>
              <td>W3C Recommendation: HTML 4.01</td>
            </tr>
            <tr>
              <th>2000</th>
              <td> W3C Recommendation: HTML 1.0</td>
            </tr>
            <tr>
              <th>2008</th>
              <td> WHATWG HTML5 First Public Draft</td>
            </tr>
            <tr>
              <th>2012</th>
              <td> WHATWG HTML5 Living Standard</td>
            </tr>
            <tr>
              <th>2014</th>
              <td> W3C Recommendation: HTML5</td>
            </tr>
            <tr>
              <th>2016</th>
              <td> W3C Candidate Recommendation: HTML 5.1</td>
            </tr>
            <tr>
              <th>2017</th>
              <td> W3C Recommendation: HTML5.1 2nd Edition</td>
            </tr>
            <tr>
              <th>2017</th>
              <td> W3C Recommendation: HTML5.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HTMLDocs;
