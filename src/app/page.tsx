import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-[url('/assets/images/bg-image.png')] bg-cover bg-right font-sans md:bg-center">
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Arisoa Sandrinah</h1>
          <p className="text-md mb-8 mt-2 text-gray-600">
            I'm a software developer from Madagascar
          </p>
          <Link
            href="/about"
            className="rounded-custom-50 text-semibold bg-secondary-100 px-10 py-3 text-sm uppercase text-white"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  );
}
