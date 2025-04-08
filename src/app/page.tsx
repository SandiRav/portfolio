import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans mt-20 container">
      <section className="mt-32 md:flex md:flex-row-reverse">
        <div className="md:basis-1/2">
          <div className="h-64 w-64 mx-auto md:w-96 md:h-96">
            <Image
              src="/assets/images/profile.jpg"
              alt="Profile picture"
              width={250}
              height={250}
              className="h-full w-full rounded-full"
            />
          </div>
        </div>
        <div className="mb-24 flex flex-col justify-center items-center md:items-start md:basis-1/2">
          <h1 className="text-lg md:text-5xl text-center md:text-left font-extrabold mt-4">
            Raveloarisoa Sandrinah
          </h1>
          <div className="mx-auto md:max-w-full md:m-0 basis-1/2">
            <p className="text-sm mt-4">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="text-sm mt-4">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="text-sm mt-4">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div className="mt-8 md:mt-16">
              <a
                href="/contact"
                className="self-start py-5 px-16 bg-primary-200 text-base text-white font-bold"
              >
                Let's get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
