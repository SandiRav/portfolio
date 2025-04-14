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
    <header className="container">
      <nav>
        <ul className="flex justify-center mt-16 gap-y-4 gap-x-8 flex-wrap">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-gray-800 text-base transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200 ${
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
