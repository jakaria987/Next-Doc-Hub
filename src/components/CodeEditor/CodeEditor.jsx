"use client";

import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  
    const html = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
    `;
  
    iframe.contentDocument.open();
    iframe.contentDocument.write(html);
    iframe.contentDocument.close();
  
    // Update the sandbox attribute to allow scripts and same-origin requests.
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
  
    const result = iframe.contentDocument.body.innerHTML;
    setOutput(result);
  
    document.body.removeChild(iframe);
  };
  

  return (
    <div className="flex flex-col items-center text-center animate-slide-in">
      <div className="mb-4 max-w-screen-xl w-full rounded-xl text-left">
        <h2 className="text-black font-bold text-2xl text-center">HTML</h2>
        <textarea
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          className="w-full h-40 px-4 py-2 border-2 border-gray-200 rounded-lg"
        ></textarea>
      </div>
      <div className="mb-4 max-w-screen-xl w-full rounded-xl text-left">
        <h2 className="text-black font-bold text-2xl text-center">CSS</h2>
        <textarea
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          className="w-full h-40 px-4 py-2 border-2 border-gray-200 rounded-lg"
        ></textarea>
      </div>
      <div className="mb-4 max-w-screen-xl w-full rounded-xl text-left">
        <h2 className="text-black font-bold text-2xl text-center">JS</h2>
        <textarea
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          className="w-full h-40 px-4 py-2 border-2 border-gray-200 rounded-lg"
        ></textarea>
      </div>
      <button
        onClick={runCode}
        className="bg-blue-200 hover:bg-slate-500 text-black hover:text-white font-bold py-5 my-4 px-12 rounded-full mb-4 transition-all duration-300 text-2xl"
      >
        Run
      </button>
      <div className="w-full max-w-screen-xl">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4 text-center">
          <h2 className="text-black font-bold text-2xl">Output</h2>
          <iframe
            title="output"
            srcDoc={output}
            sandbox="allow-scripts"
            frameBorder="0"
            className="w-full h-40 border-2 border-gray-200 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;


