import Image from "next/image";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
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
      <div className="mt-16 font-sans">
        <div className="z-50 mx-auto mt-4 max-w-screen-lg px-5 lg:px-0">
          <h1 className="text-2xl font-semibold text-lime-600 md:text-5xl">
            Projects
          </h1>
          <p className="mt-5 text-base text-slate-900 md:mt-6 md:max-w-xl">
            With 4 years of experience as a frontend developer, I focus on
            creating intuitive, responsive, and maintainable user interfaces.
            Here are a few pages and components I have built to demonstrate my
            approach to clean design, reusable code, and modern web practices.
          </p>
          <div className="my-16 flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-x-8">
            {projects.map((project: Project) => {
              return (
                <div key={project.id} className="flex h-full w-full flex-col">
                  <div className="h-96">
                    <Image
                      src={project.img}
                      width={445}
                      height={300}
                      alt={project.imageAltText}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="mt-5 flex flex-grow flex-col">
                    <h3 className="text-xl font-semibold text-lime-600">
                      {project.title}
                    </h3>
                    <p className="my-4 flex-grow text-base text-slate-900">
                      {project.description}
                    </p>
                    <div className="mb-2">
                      <span className="font-medium">Technologies:</span>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-lime-50 px-2 py-1 text-sm text-lime-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex gap-x-8 pt-2">
                      <span className="flex items-center gap-2">
                        <Link href={project.demo} target="_blank" rel="noopner">
                          <small>Demo</small>
                          <IconExternalLink
                            className="h-5 w-5 text-slate-900"
                            stroke={1.5}
                          />
                        </Link>
                      </span>
                      <span className="flex items-center gap-2">
                        <Link
                          href={project.source}
                          target="_blank"
                          rel="noopner"
                        >
                          <small>Code</small>
                          <IconBrandGithub
                            className="h-5 w-5 text-slate-900"
                            stroke={1.5}
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsList;
