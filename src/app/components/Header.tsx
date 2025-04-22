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
    <header className="max-w-screen-xl mx-auto px-5 z-50 mt-4 lg:px-0 bg-lime-600">
      <nav className="py-6">
        <ul className="flex justify-center gap-y-4 gap-x-8 flex-wrap">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-white text-base transition-all relative mt-2 block w-full flex items-center justify-between text-primary-200 ${
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
