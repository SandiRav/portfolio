import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="container mt-5">
      <div className="lg:hidden flex justify-end">
        <button className="button" aria-label="Icon Menu">
          <IconMenu2
            aria-hidden={true}
            className="shrink-0 w-5 h-5 text-black"
          />
        </button>
      </div>
      <nav className="absolute flex justify-center">
        <ul className="flex lg:gap-x-32 gap-x-4">
          <li>
            <a href="/" className="text-primary-200">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="text-primary-200">
              Projects
            </a>
          </li>
          <li>
            <a href="/get-in-touch" className="text-primary-200">
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
