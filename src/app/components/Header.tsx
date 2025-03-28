"use client";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import Button from "./Button";
import { useState, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Set active path based on current URL
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // Add blur class to the main content when menu is open
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    if (showMenu) {
      mainContent.classList.add("blur-sm", "pointer-events-none");
    } else {
      mainContent.classList.remove("blur-sm", "pointer-events-none");
    }
  }, [showMenu]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="container">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>

        <div className="md:hidden z-50">
          <Button
            ariaLabel={showMenu ? "Close menu" : "Open menu"}
            buttonType="button"
            onClick={toggleMenu}
            className="transition-transform hover:scale-105 active:scale-95 z-50"
          >
            {showMenu ? (
              <IconX
                className="shrink-0 w-6 h-6 text-black"
                aria-hidden={true}
              />
            ) : (
              <IconMenu2
                className="shrink-0 w-6 h-6 text-black"
                aria-hidden={true}
              />
            )}
          </Button>
        </div>

        <div
          className={`
            fixed md:relative inset-0 bg-white/70 h-full w-full
            flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out md:opacity-100 md:visible
            ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <div className="bg-white transform transition-all duration-300 ease-in-out px-4 rounded-lg shadow-lg md:shadow-none w-full h-full">
            <nav>
              <ul className="flex flex-col md:flex-row md:justify-end mt-16 md:mt-0 gap-y-4 md:gap-x-8 divide-y divide-gray-300 md:divide-none">
                <li>
                  <a
                    href="/"
                    className={`
                      text-gray-800 text-base
                      transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200
                      ${activePath === "/" ? "font-medium" : ""}
                    `}
                    onClick={() => setShowMenu(false)}
                  >
                    Home
                    <IconArrowRight className="w-5 h-5 shrink-0 text-primary-200 md:hidden" />
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className={`
                      text-gray-800 text-base
                      transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200
                      ${activePath === "/projects" ? "font-medium" : ""}
                    `}
                    onClick={() => setShowMenu(false)}
                  >
                    Projects
                    <IconArrowRight className="w-5 h-5 shrink-0 text-primary-200 md:hidden" />
                  </a>
                </li>
                <li>
                  <a
                    href="/get-in-touch"
                    className={`
                      text-gray-800 text-base
                      transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200
                      ${activePath === "/get-in-touch" ? "font-medium" : ""}
                    `}
                    onClick={() => setShowMenu(false)}
                  >
                    Get in touch
                    <IconArrowRight className="w-5 h-5 shrink-0 text-primary-200 md:hidden" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
