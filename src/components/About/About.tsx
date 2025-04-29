import React from "react";
import Image from "../../assets/Image.png";
import { IoArrowForward } from "react-icons/io5";

export const About = () => {
  return (
    <div
      id="About"
      className="text-green-100 font-serif md:flex overflow-hidden text-center md:flex-wrap md:justify-center bg-green shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row ">
          <img
            src={Image} // Image path relative to public folder
            alt="Project Screenshot"
            className="rounded-lg shadow-lg p-5"
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal items-center">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in building responsive and dynamic user
                  interfaces using HTML, CSS, JavaScript, and React.js, creating
                  seamless, scalable, and maintainable web applications. I’m
                  passionate about combining clean code with creative design to
                  deliver modern, interactive user experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in building robust and scalable server-
                  applications using Node.js, Express.js, and JavaScript,
                  ensuring efficient and secure backend operations. With
                  expertise in MongoDB, I design and manage dynamic databases
                  that power modern web applications with high performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Programming Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a strong foundation in C and C++, which has helped me
                  build efficient, optimized solutions and develop a deep
                  understanding of core programming concepts.I also have basic
                  knowledge of Python and use it to create simple applications,
                  automate small tasks, and solve basic problems with clean
                  code.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
