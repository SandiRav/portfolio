"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/get-in-touch", label: "Get in touch" },
  ];

  return (
    <header className="z-50 mx-auto mt-4 max-w-screen-lg bg-lime-600 px-5 lg:px-0">
      <nav className="py-6">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative mt-2 block flex w-full items-center justify-between text-base text-primary-200 text-white transition-all ${
                  pathname === href ? "font-semibold underline" : "font-normal"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
