import React, { useState } from "react";
import { RiCloseLine, RiMenuUnfold2Fill } from "@remixicon/react";

export const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <div className="flex flex-wrap justify-between md:items-center text-green-100 font-serif px-10  pt-0 md:px-20">
      <span className="text-3xl font-bold font-serif py-11 tracking-wide animate-pulse">
        Portfolio
      </span>
      <ul
        className={`${menu ? "block" : "hidden"}
            mx-15 py-2 mt-0 font-semibold md:mt-5 bg-pink px-2 rounded-xl bg-opacity-50
            md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <li className="text-md font-serif transition-shadow duration-200 hover:animate-bounce p-1 py-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md font-serif transition-shadow duration-200 hover:animate-bounce p-1 py-1 md:p-0">
          <a href="#Skills">Skills</a>
        </li>
        <li className="text-md font-serif transition-shadow duration-200 hover:animate-bounce p-1 py-1 md:p-0">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-md font-serif transition-shadow duration-200 hover:animate-bounce p-1 py-1 md:p-0">
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
      {showMenu ? (
        <RiMenuUnfold2Fill
          size={30}
          className="md:hidden absolute right-10 top-12 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </div>
  );
};
