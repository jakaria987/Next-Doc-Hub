import React from "react";

const CDocs = () => {
  return (
    <div>
      <h2 className="text-4xl  font-medium text-center">C Documentation</h2>
      <div className="bg-white shadow-lg px-5 lg:px-20 mx-auto my-5 lg:my-10 py-5 lg:py-20">
        <h1 className="text-2xl">Learn C</h1>
        <p className="py-5">
          C is a general-purpose programming language, developed in 1972, and
          still quite popular.
        </p>
        <p className="mb-5">
          C is very powerful; it has been used to develop operating systems,
          databases, applications, etc.
        </p>
      </div>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">
        Examples in Each Chapter
      </h1>
      <p className="px-5 ">
        Our "Try it Yourself" editor makes it easy to learn C. You can edit code
        and view the result in your browser:
      </p>
      <div className="px-10 lg:px-20 bg-gray-100 my-5  py-5 mx-auto">
        <h1 className="text-2xl">Example</h1>
        <div className="mockup-code">
          <pre data-prefix="#include <stdio.h>"></pre>
          <pre data-prefix="int main() {"></pre>
          <pre data-prefix="  printf(Hello World!);"></pre>
          <pre data-prefix="return 0;"></pre>
          <pre data-prefix="}"></pre>
        </div>
      </div>
      <hr />
      <div className="my-10 py-5 lg:py-8 px-5 bg-orange-200">
        <p>Click on the "Try it Yourself" button to see how it works.</p>
        <p className="mt-3 ">
          We recommend reading this tutorial, in the sequence listed in the left
          menu.
        </p>
      </div>
      <hr />
      <h1 className="text-2xl px-5 mt-10 mb-5">Why Learn C?</h1>
      <ul className="mb-5 px-5">
        <li>
          It is one of the most popular programming language in the world.
        </li>
        <li className="my-3">
          If you know C, you will have no problem learning other popular
          programming languages such as Java, Python, C++, C#, etc, as the
          syntax is similar.
        </li>
        <li>
          C is very fast, compared to other programming languages, like Java and
          Python.
        </li>

        <li className="my-3">
          C is very versatile; it can be used in both applications and
          technologies
        </li>
      </ul>
      <hr />
      <h1 className="text-2xl px-5 mt-10 mb-5">Difference between C and C++</h1>
      <ul className="mb-5 px-5">
        <li>
          C++ was developed as an extension of C, and both languages have almost
          the same syntax
        </li>
        <li className="my-3">
          The main difference between C and C++ is that C++ support classes and
          objects, while C does not.
        </li>
      </ul>
      <hr />
      <h1 className="text-2xl my-5 px-5 font-medium">
        Learning C At ProgNexus
      </h1>
      <p className="px-5 ">
        When learning C at W3Schools.com, you can use our "Try it Yourself"
        tool, which shows both the code and the result. This will make it easier
        for you to understand every part as we move forward:
      </p>
      <div className="px-10 lg:px-20 bg-gray-100 my-5  py-5 mx-auto">
        <h1 className="text-2xl">myfirstprogram.c</h1>
        <h2 className="text-xl my-3">Code:</h2>
        <div className="mockup-code">
          <pre data-prefix="#include <stdio.h>"></pre>
          <pre data-prefix="int main() {"></pre>
          <pre data-prefix="  printf(Hello World!);"></pre>
          <pre data-prefix="return 0;"></pre>
          <pre data-prefix="}"></pre>
        </div>
        <h2 className="text-xl my-3">Result:</h2>
        <p className="bg-black text-white px-3 py-3">Hello World!</p>
      </div>
      <hr />
      <h1 className="text-2xl px-5 mt-5">Example explained</h1>
      <p className="my-5 px-5">
        Line 1: #include "stdio.h" is a header file library that lets us work
        with input and output functions, such as printf() (used in line 4).
        Header files add functionality to C programs.
      </p>

      <div className="my-8 py-5 lg:py-8 px-5 bg-orange-200">
        <p>
          Don't worry if you don't understand how #include "stdio.h" works. Just
          think of it as something that (almost) always appears in your program.
        </p>
      </div>
      <p className="px-5">
        Line 2: A blank line. C ignores white space. But we use it to make the
        code more readable.
      </p>
      <p className="my-3 px-5">
        Line 2: A blank line. C ignores white space. But we use it to make the
        code more readable.
      </p>
      <p className="px-5">
        Line 4: printf() is a function used to output/print text to the screen.
        In our example it will output "Hello World!".
      </p>
      <div className="my-8 py-5 lg:py-8 px-5 bg-orange-200">
        <p>Note that: Every C statement ends with a semicolon ;</p>
        <p className="mt-3">
          Remember: The compiler ignores white spaces. However, multiple lines
          makes the code more readable.
        </p>
      </div>
      <p className="px-5">Line 5: return 0 ends the main() function.</p>
      <p className="my-3 px-5">
        Line 6: Do not forget to add the closing curly bracket to actually end
        the main function.
      </p>
    </div>
  );
};

export default CDocs;
