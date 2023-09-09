"use client"
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const CodeEditor = () => {
    const htmlEditorRef = useRef(null);
    const cssEditorRef = useRef(null);
    const jsEditorRef = useRef(null);
    const outputRef = useRef(null);

    const handleRunCode = () => {
        const htmlCode = monaco.editor.getModels()[0].getValue();
        const cssCode = monaco.editor.getModels()[1].getValue();
        const jsCode = monaco.editor.getModels()[2].getValue();
        const iframeDocument = outputRef.current.contentDocument;

        // Combine HTML, CSS, and JavaScript
        const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

        iframeDocument.open();
        iframeDocument.write(combinedCode);
        iframeDocument.close();
    };

    useEffect(() => {
        // Ensure this code only runs in the browser context
        if (typeof window !== 'undefined') {
            // Initialize Monaco editors for HTML, CSS, and JavaScript
            if (htmlEditorRef.current) {
                monaco.editor.create(htmlEditorRef.current, {
                    value: '<!-- Write your HTML code here -->',
                    language: 'html',
                });
            }

            if (cssEditorRef.current) {
                monaco.editor.create(cssEditorRef.current, {
                    value: '/* Write your CSS code here */',
                    language: 'css',
                });
            }

            if (jsEditorRef.current) {
                monaco.editor.create(jsEditorRef.current, {
                    value: '// Write your JavaScript code here',
                    language: 'javascript',
                });
            }
        }
    }, []);

    return (
        <div className='py-10'>
            <div className="flex flex-col-2 items-center justify-around space-y-4 ml-36">
                <div className="w-full max-w-md">
                    <div className="border rounded-md shadow-md">
                        <div className="bg-gray-800 text-white px-4 py-2">
                            Code Editor
                        </div>
                        <div className="bg-white p-4">
                            <div className="h-64" ref={htmlEditorRef}></div>
                            <div className="h-64" ref={cssEditorRef}></div>
                            <div className="h-64" ref={jsEditorRef}></div>
                        </div>
                    </div>
                </div>
                <iframe
                    title="Output"
                    className="border h-[800px] w-full max-w-md"
                    ref={outputRef}
                ></iframe>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-[400px] mt-5"
                onClick={handleRunCode}
            >
                Run Code
            </button>
        </div>
    );
};

export default CodeEditor;