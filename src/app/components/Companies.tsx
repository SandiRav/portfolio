import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="z-50 mx-auto mt-4 max-w-screen-xl px-5 md:px-0">
        <h3 className="text-sm italic text-lime-600 md:text-base">
          Worked with
        </h3>
        <ul className="grid grid-cols-2 gap-8 pb-8 md:flex md:items-baseline">
          <li>
            <Link href="https://protectourwinters.uk/">
              <Image
                src="/assets/icons/protectourwinteruk.svg"
                alt="Protect Our Winter UK"
                width={160}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.whitespectre.com/">
              <div className="flex items-baseline gap-x-4">
                <Image
                  src="/assets/icons/whitespectre-icon.svg"
                  alt="Whitespectre Icon"
                  width={40}
                  height={30}
                />
                <Image
                  src="/assets/icons/whitespectre-text.svg"
                  alt="whitespectre text"
                  width={160}
                  height={30}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://allsafe24.com/">
              <Image
                src="/assets/icons/allsafe-logo.svg"
                alt="Allsafe logo"
                width={160}
                height={60}
              />
            </Link>
          </li>
          <li>
            <Link href="https://ecogyenergy.com/">
              <Image
                src="/assets/icons/ecogy-energy-logo-01.png"
                alt="Ecogy Energy"
                width={160}
                height={60}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
