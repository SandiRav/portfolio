import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h3 className="text-sm mb-5">Worked with</h3>
        <ul className="grid grid-cols-2 gap-6 md:flex">
          <li>
            <a href="https://protectourwinters.uk/"></a>
            <div className="border border-slate-200 py-5 px-9 w-full">
              <Image
                src="/assets/icons/protectourwinteruk.svg"
                alt="Protect Our Winter UK"
                width={80}
                height={50}
              />
            </div>
          </li>
          <li className=''>
            <a href="https://www.whitespectre.com/">
              <div className="border border-slate-200 py-5 px-9 w-full flex gap-x-6">
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
            </a>
          </li>
          <li>
            <a href="/whitespectre">
              <div className="border border-slate-200 py-5 px-9 w-full">
                <Image
                  src="/assets/icons/protectourwinteruk.svg"
                  alt="Protect Our Winter UK"
                  width={80}
                  height={50}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="/whitespectre">
              <div className="border border-slate-200 py-5 px-9 w-full">
                <Image
                  src="/assets/icons/protectourwinteruk.svg"
                  alt="Protect Our Winter UK"
                  width={80}
                  height={50}
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
