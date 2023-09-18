import React from "react";

const PythonDocs = () => {
  return (
    <div>
      <h2 className="text-4xl  font-medium text-center">
        Python Documentation
      </h2>
      <div className="bg-emerald-100 px-5 lg:px-20 mx-auto my-5 lg:my-10 py-5 lg:py-20">
        <h1 className="text-2xl">Learn Python</h1>
        <p className="py-5">Python is a popular programming language.</p>
        <p className="mb-5">
          Python can be used on a server to create web applications.
        </p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">Learning by Examples</h1>
      <p className="px-5 ">
        With our "Try it Yourself" editor, you can edit Python code and view the
        result.
      </p>
      <div className="px-10 lg:px-20 bg-gray-100 my-10  py-5 mx-auto">
        <h1 className="text-2xl mb-3">Example</h1>
        <p className="text-black bg-white px-3 py-3">print("Hello, World!")</p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">Python File Handling</h1>
      <p className="px-5 mb-5">
        In our File Handling section you will learn how to open, read, write,
        and delete files.
      </p>
      <hr />
      <h1 className="text-2xl px-5 my-5">What is Python?</h1>
      <p className="my-5 px-5">
        Python is a popular programming language. It was created by Guido van
        Rossum, and released in 1991.
      </p>
      <p className="px-5">It is used for:</p>
      <ul className="my-5 px-5">
        <li>web development (server-side),</li>
        <li className="my-3">software development,</li>
        <li>mathematics,</li>
        <li className="my-3">system scripting.</li>
      </ul>
      <h1 className="text-2xl px-5 mt-5 mb-3">What can Python do?</h1>
      <ul className="mb-5 px-5">
        <li>Python can be used on a server to create web applications.</li>
        <li className="my-3">
          Python can be used alongside software to create workflows.
        </li>
        <li>
          Python can connect to database systems. It can also read and modify
          files.
        </li>

        <li className="my-3">
          Python can be used to handle big data and perform complex mathematics.
        </li>
        <li>
          Python can be used for rapid prototyping, or for production-ready
          software development.
        </li>
      </ul>
      <h1 className="text-2xl px-5 mt-5 mb-3">Good to know</h1>
      <ul className="mb-5 px-5">
        <li>
          The most recent major version of Python is Python 3, which we shall be
          using in this tutorial. However, Python 2, although not being updated
          with anything other than security updates, is still quite popular.
        </li>
        <li className="my-3">
          In this tutorial Python will be written in a text editor. It is
          possible to write Python in an Integrated Development Environment,
          such as Thonny, Pycharm, Netbeans or Eclipse which are particularly
          useful when managing larger collections of Python files.
        </li>
      </ul>
      <h1 className="text-2xl px-5 mt-5 mb-3">
        Python Syntax compared to other programming languages
      </h1>
      <ul className="mb-5 px-5">
        <li>
          Python was designed for readability, and has some similarities to the
          English language with influence from mathematics.
        </li>
        <li className="my-3">
          Python uses new lines to complete a command, as opposed to other
          programming languages which often use semicolons or parentheses.
        </li>
        <li>
          Python relies on indentation, using whitespace, to define scope; such
          as the scope of loops, functions and classes. Other programming
          languages often use curly-brackets for this purpose.
        </li>
      </ul>
      <div className="px-10 lg:px-20 bg-gray-100 my-10  py-5 mx-auto">
        <h1 className="text-2xl mb-3">Example</h1>
        <p className="text-black bg-white px-3 py-3">print("Hello, World!")</p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">Python Install</h1>
      <p className="px-5 ">
        Many PCs and Macs will have python already installed.
      </p>
      <p className="px-5 py-3">
        To check if you have python installed on a Windows PC, search in the
        start bar for Python or run the following on the Command Line (cmd.exe):
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">
          C:\Users\Your Name python --version
        </p>
      </div>
      <p className="px-5 py-3">
        To check if you have python installed on a Windows PC, search in the
        start bar for Python or run the following on the Command Line (cmd.exe):
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">python --version</p>
      </div>
      <h1 className="text-2xl my-5 px-5 font-medium">Python Quickstart</h1>
      <p className="px-5 ">
        Python is an interpreted programming language, this means that as a
        developer you write Python (.py) files in a text editor and then put
        those files into the python interpreter to be executed.
      </p>
      <p className="px-5 py-3">
        The way to run a python file is like this on the command line:
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">
          C:\Users\Your Namepython helloworld.py
        </p>
      </div>
      <p className="px-5 ">
        Where "helloworld.py" is the name of your python file.
      </p>
      <p className="px-5 py-3">
        Let's write our first Python file, called helloworld.py, which can be
        done in any text editor.
      </p>
      <div className="px-5 bg-gray-100 my-5  py-5 mx-auto">
        <p className="bg-black text-white px-3 py-3">Hello, World!</p>
      </div>
      <p className="my-3">
        Congratulations, you have written and executed your first Python
        program.
      </p>
    </div>
  );
};

export default PythonDocs;
