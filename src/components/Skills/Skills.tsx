// src/components/Skills.js
import React from "react";

export const Skills = () => {
  return (
    <section className="py-8 bg-green-100" id="Skills">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-950 mb-8">
          Skills
        </h2>

        {/* Programming Languages */}
        <div>
          <h3 className="text-2xl font-semibold text-green-950 mb-4">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">C</h4>
            </div>
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">C++</h4>
            </div>
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Python</h4>
            </div>
          </div>
        </div>

        {/* Web Development Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-green-950 mb-4">
            Web Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Frontend</h4>
            </div>
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Backend</h4>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-green-950 mb-4">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Communication</h4>
            </div>
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Presentation</h4>
            </div>
            <div className="bg-green-950 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-green-100 font-semibold">Problem Solving</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
