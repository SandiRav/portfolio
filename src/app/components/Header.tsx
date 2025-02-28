"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    console.log("showMenu::::::", showMenu);
    setShowMenu(!showMenu);
  }

  return (
    <header className="container mt-5 relative">
      <div className="lg:hidden flex justify-end">
        <Button ariaLabel="Menu" buttonType="button" onClick={toggleMenu}>
          <IconMenu2
            className="shrink-0 w-5 h-5 text-black"
            aria-hidden={true}
          />
        </Button>
      </div>

      <nav
        className={`${
          showMenu
            ? "fixed inset-0 bg-opacity-80 flex justify-center items-center z-50"
            : "hidden lg:flex justify-center absolute w-full"
        }`}
      >
        <Button ariaLabel="Close" className="lg:hidden" buttonType="button" onClick={toggleMenu}>
          <IconX className="shrink-0 w-6 h-6 text-black" aria-hidden={true} />
        </Button>
        <ul className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-32">
          <li>
            <a
              href="/"
              className="text-white lg:text-primary-200 text-2xl lg:text-base"
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-white lg:text-primary-200 text-2xl lg:text-base"
              onClick={() => setShowMenu(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/get-in-touch"
              className="text-white lg:text-primary-200 text-2xl lg:text-base"
              onClick={() => setShowMenu(false)}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
