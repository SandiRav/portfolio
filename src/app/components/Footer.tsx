import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-300 py-10 shadow-xl">
      <div className="mt-5 flex justify-center gap-x-5">
        <Link
          href="https://github.com/SandiRav"
          target="_blank"
          className="flex size-8 items-center justify-center rounded-full border border-gray-700 p-6"
        >
          <IconBrandGithubFilled className="size-6 shrink-0 text-gray-700/50 hover:text-secondary-200" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ary-r-54a20a324/"
          target="_blank"
          className="flex size-8 items-center justify-center rounded-full border border-gray-700 p-6"
        >
          <IconBrandLinkedinFilled className="size-6 shrink-0 text-gray-700/50 hover:text-secondary-200" />
        </Link>
      </div>
    </footer>
  );
};
