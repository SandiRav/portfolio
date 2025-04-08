"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [activePath, setActivePath] = useState("/");

  // Set active path based on current URL
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <header className="container">
      <nav>
        <ul className="flex justify-center mt-16 mt-0 gap-y-4 gap-x-8">
          <li>
            <a
              href="/"
              className={`
                      text-gray-800 text-base
                      transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200
                      ${activePath === "/" ? "font-medium" : ""}
                    `}
            >
              Home
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
            >
              Projects
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
