// src/components/Projects.js
import React from "react";

export const Projects = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects.",
      // link: "https://your-portfolio-link.com",
    },
    {
      name: "User-Management System",
      description:
        "I have a basic understanding of building and managing User Management Systems, including features like CRUD operations, authentication, and role-based access control.",
      // link: "https://github.com/your-github/task-manager",
    },
    {
      name: "Chatbot for disabled people",
      description:
        "This is designed for deaf dumb and visual impaired. It provides accessible communication with features like speech-to-text, text-to-speech, and sign language recognition. This chatbot utilizes cutting-edge technology for individuals facing communication challenges.",
      // link: "https://github.com/your-github/e-commerce",
    },
  ];

  return (
    <section className="py-8 bg-green-950 " id="Projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-green-100 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                {project.name}
              </h3>
              <p className="text-green-800 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {/* View Project */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
