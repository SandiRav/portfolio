"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.header
        className="relative z-10 bg-primary-300 shadow-md"
        initial="initial"
        animate="animate"
        variants={navbarVariants}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-semibold ${
                  pathname === link.path
                    ? "font-semibold text-secondary-200"
                    : "text-gray-600 hover:text-secondary-200"
                } transition-colors duration-300`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-secondary-200"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="text-3xl font-light tracking-tight text-gray-900 md:order-first"
          >
            SANDY
          </Link>

          <div className="flex gap-x-5">
            <div className="flex items-center justify-center gap-x-5">
              <Link
                href="https://github.com/SandiRav"
                target="_blank"
                className="rounded-full border border-gray-700 p-2"
              >
                <IconBrandGithubFilled className="size-6 shrink-0 text-gray-700/50 hover:text-secondary-200" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ary-r-54a20a324/"
                target="_blank"
                className="rounded-full border border-gray-700 p-2"
              >
                <IconBrandLinkedinFilled className="size-6 shrink-0 text-gray-700/50 hover:text-secondary-200" />
              </Link>
            </div>

            <button
              className="focus:outline-none md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Toggle menu"
            >
              <IconMenu2
                stroke={1}
                className="size-8 shrink-0 text-gray-700/50"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 z-40 flex flex-col justify-center gap-y-6 bg-black/70 p-5 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              {/* Mobile Navigation Menu */}
              <button
                className="self-end focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <IconX stroke={2} className="size-8 text-white" />
              </button>
              <motion.div
                className="z-50 h-[90vh] w-full overflow-auto rounded-lg bg-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col px-5 py-8">
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`text-lg font-semibold ${
                          pathname === link.path
                            ? "font-semibold text-secondary-200"
                            : "text-gray-600 hover:text-secondary-200"
                        } transition-colors duration-300`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
