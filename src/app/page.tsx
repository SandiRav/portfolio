import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const introParagraphs = [
    "I'm a passionate developer focused on creating clean, user-centric solutions through code. With a strong foundation in frontend technologies, I enjoy crafting smooth, accessible, and responsive interfaces.",
    "Driven by curiosity and creativity, I thrive on problem-solving and continuously learning to improve my work and deliver quality digital experiences.",
    "Whether it’s building sleek portfolios or complex web apps, I aim to make the web a better place — one line of code at a time.",
  ];

  return (
    <main className="font-sans mt-20 container">
      <section className="mt-32 md:flex md:flex-row-reverse items-center">
        {/* Profile Image */}
        <div className="md:basis-1/2 flex justify-center">
          <div className="h-64 w-64 md:h-96 md:w-96">
            <Image
              src="/assets/images/profile.jpg"
              alt="Portrait of Raveloarisoa Sandrinah"
              width={280}
              height={280}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:basis-1/2 flex flex-col justify-center items-center md:items-start px-4 mt-12 md:mt-0">
          <h1 className="text-2xl md:text-5xl text-lime-600 font-extrabold text-center md:text-left">
            Raveloarisoa Sandrinah
          </h1>
          <div className="mt-6 space-y-4 text-sm md:text-base max-w-md">
            {introParagraphs.map((text, index) => (
              <p className="text-base text-slate-900" key={index}>
                {text}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block py-4 px-10 bg-lime-600 text-white font-semibold rounded-md transition-all hover:bg-primary-300 shadow-lg"
            >
              Let's get started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
