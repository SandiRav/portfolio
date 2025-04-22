import Image from "next/image";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Project } from "../types";

const ProjectsList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });

  const projects = await res.json();

  return (
    <div className="font-sans mt-16">
      <div className="max-w-screen-xl mx-auto px-5 z-50 mt-4 lg:px-0">
        <h1 className="text-2xl md:text-5xl text-lime-600 font-semibold">
          Projects
        </h1>
        <p className="mt-5 md:mt-6 text-base text-slate-900 md:max-w-xl">
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="my-16 flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-x-8">
          {projects.map((project: Project) => {
            return (
              <div key={project.id} className="h-full w-full flex flex-col">
                <div className="h-96">
                  <Image
                    src={project.img}
                    width={445}
                    height={300}
                    alt={project.imageAltText}
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-5">
                  <h3 className="text-xl text-lime-600 font-semibold">
                    {project.title}
                  </h3>
                  <p className="my-4 text-base text-slate-900 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-2">
                    <span className="font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-lime-600 bg-lime-50 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-x-8 mt-auto pt-2">
                    <span className="flex items-center gap-2">
                      <Link href={project.demo} target="_blank" rel="noopner">
                        <small>Demo</small>
                        <IconExternalLink
                          className="w-5 h-5 text-slate-900"
                          stroke={1.5}
                        />
                      </Link>
                    </span>
                    <span className="flex items-center gap-2">
                      <Link href={project.source} target="_blank" rel="noopner">
                        <small>Code</small>
                        <IconBrandGithub
                          className="w-5 h-5 text-slate-900"
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
  );
};

export default ProjectsList;
