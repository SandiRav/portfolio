import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import AnimatedSection from "../components/AnimatedSection";

const ProjectsList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });

  const projects = await res.json();

  return (
    <AnimatedSection>
      <main className="px-5 py-16 font-sans sm:mx-auto sm:max-w-136 lg:max-w-240 xl:max-w-screen-xl">
        <div className="flex flex-col items-center gap-y-5 pb-14">
          <h1 className="relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:bg-secondary-200 after:content-['']">
            Projects
          </h1>
          <p className="text-center text-slate-900 lg:max-w-3xl">
            Here are a few pages and components I have built to demonstrate my
            approach to clean design, reusable code, and modern web practices.
          </p>
        </div>
        <div className="flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-3">
          {projects.map((project: Project) => {
            return (
              <Link
                href={project.demo}
                key={project.id}
                target="_blank"
                className="hover:shadow-custom-hover bg-white p-5 shadow-custom transition duration-300 ease-in-out hover:scale-105"
              >
                <AnimatedSection>
                  <div className="flex h-full w-full flex-col">
                    <div className="h-96">
                      <Image
                        src={project.img}
                        width={445}
                        height={300}
                        alt={project.imageAltText}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-5 flex flex-grow flex-col">
                      <h3 className="text-center text-2xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="my-4 text-center text-sm text-gray-900">
                        {project.description}
                      </p>
                      <div className="mt-1 flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-secondary-100 px-2 py-1 text-sm text-secondary-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </Link>
            );
          })}
        </div>
      </main>
    </AnimatedSection>
  );
};

export default ProjectsList;
