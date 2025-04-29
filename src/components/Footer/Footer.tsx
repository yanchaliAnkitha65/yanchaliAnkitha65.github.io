import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      id="Contacts"
      className="flex justify-around bg-green-200 text-green-950 p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:yankitha65@gmail.com"
            target="_blank"
            rel="noopner noreferrer"
          >
            yankitha65@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/ankitha-y-907843264"
            target="_blank"
            rel="noopner noreferrer"
          >
            linkdlin.com/in/ankitha-y-907843264
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/[yanchaliAnkitha65]"
            target="_blank"
            rel="noopner noreferrer"
          >
            github.com/yanchaliAnkitha65
          </a>
        </li>
      </ul>
    </div>
  );
};
