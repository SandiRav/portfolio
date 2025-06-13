"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-[url('/assets/images/bg-image.png')] bg-cover bg-left px-5">
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900">Arisoa Sandrinah</h1>
          <p className="text-md mb-8 mt-2 text-center text-slate-900">
            Hi, I am a frontend developer from Madagascar with over 3 years of
            experience. I focus on building clear, responsive user interfaces
            using React. I enjoy working on clean, practical solutions that make
            websites easy to use. Feel free to{" "}
            <a href="/contact" className="text-secondary-200 underline">
              get in touch
            </a>{" "}
            if you would like to work together.
          </p>
          <Link
            href="/projects"
            className="text-semibold rounded-custom-50 bg-secondary-200 px-10 py-3 text-sm uppercase text-white"
          >
            Work
          </Link>
        </div>
      </div>
    </main>
  );
}
