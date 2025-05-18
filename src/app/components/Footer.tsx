import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-300 py-10 shadow-xl">
      <div className="text-center">
        <p className="text-center text-sm text-slate-900">
          © <span>Copyright</span> <strong>Kelly</strong>{" "}
          <span>
            All Rights Reserved
            <br />
          </span>
        </p>
      </div>
      <div className="mt-5 flex justify-center gap-x-5">
        <Link
          href="https://twitter.com"
          className="flex size-8 items-center justify-center rounded-full border border-gray-700 p-2"
        >
          <IconBrandFacebookFilled className="hover:text-secondary-200 h-6 w-4 shrink-0 text-gray-700/50" />
        </Link>
        <Link
          href="https://twitter.com"
          className="flex size-8 items-center justify-center rounded-full border border-gray-700 p-2"
        >
          <IconBrandGithubFilled className="hover:text-secondary-200 h-6 w-4 shrink-0 text-gray-700/50" />
        </Link>
        <Link
          href="https://twitter.com"
          className="flex size-8 items-center justify-center rounded-full border border-gray-700 p-2"
        >
          <IconBrandLinkedinFilled className="hover:text-secondary-200 h-6 w-4 shrink-0 text-gray-700/50" />
        </Link>
      </div>
    </footer>
  );
};
