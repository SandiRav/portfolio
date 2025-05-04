import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const introParagraphs = [
    "I'm a passionate developer focused on creating clean, user-centric solutions through code. With a strong foundation in frontend technologies, I enjoy crafting smooth, accessible, and responsive interfaces.",
    "Driven by curiosity and creativity, I thrive on problem-solving and continuously learning to improve my work and deliver quality digital experiences.",
    "Whether it's building sleek portfolios or complex web apps, I aim to make the web a better place — one line of code at a time.",
  ];

  return (
    <main className="z-50 mx-auto mt-16 mt-4 max-w-screen-lg px-5 font-sans lg:px-0">
      <section className="mt-32 items-center md:flex md:flex-row-reverse">
        <div className="flex justify-center md:basis-1/2">
          <div className="h-64 w-64 md:h-96 md:w-96">
            <Image
              src="/assets/images/profile.jpg"
              alt="Portrait of Raveloarisoa Sandrinah"
              width={280}
              height={280}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center px-4 md:mt-0 md:basis-1/2 md:items-start">
          <h1 className="text-center text-2xl font-extrabold text-lime-600 md:text-left md:text-5xl">
            Raveloarisoa Sandrinah
          </h1>
          <div className="mt-6 max-w-md space-y-4 text-sm md:text-base">
            {introParagraphs.map((text, index) => (
              <p className="text-base text-slate-900" key={index}>
                {text}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/get-in-touch"
              className="hover:bg-primary-300 inline-block rounded-md bg-lime-600 px-10 py-4 font-semibold text-white shadow-lg transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
