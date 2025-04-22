import Image from "next/image";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export interface Project {
  title: string;
  id: string;
  description: string;
  img: string;
  tags: string[];
  demo: string;
  source: string;
  imageAltText: string;
}

export interface Projects {
  project: Project[];
}

const ProjectsList = () => {
  const projects = [
    {
      title: "Birthday App",
      id: "1",
      description:
        "I built this project from scratch using ES6 and ES2020. It renders a list of people with their birthdays and their profile photos just right next to their names. In this application, users are able to search particular people both by their names and their birthday months. They can also add new people to the list, delete people from the list, and edit both people's names and birthdays. In terms of technology, I used HTML5, CSS, and vanilla JavaScript to build the entire application.",
      img: "/assets/images/birthday-screenshot.png",
      tags: ["HTML", "Vanilla JavaScript"],
      demo: "http://birthday-app.sandy.onja.org/",
      source: "https://github.com/Voninkazo/VanillaJS-Birthday-app",
      imageAltText: "image description",
    },
    {
      title: "Countrye Quiz",
      id: "2",
      description:
        "I created this quiz from scratch using React and CSS. It allows users to select a country given either a flag, or a capital or even a region.When users answer correctly, they will move on to a next question, otherwise they will be redirected to the results to see their scores and then start over again. This application is replicated from a figma design.",
      img: "/assets/images/country-quiz-img.png",
      tags: ["HTML", "React"],
      demo: "http://country-quiz.sandy.onja.org/",
      source: "https://github.com/Voninkazo/country-quiz",
      imageAltText: "image description",
    },
    {
      title: "Photograph",
      id: "3",
      description:
        "I developed this page from scratch using semantic HTML, CSS3 and SASS to create a responsive webpage following BEM notation. I also used some Javascript functionalities to make images slide. It has a navigation menu that works nicely on mobile. Building this project helped me understand the real benefits of using BEM to write class names and write less CSS using SASS as a css preprocessor.",
      img: "/assets/images/photograph.jpg",
      tags: ["HTML", "SASS", "JavaScript"],
      demo: "http://photograph.sandy.onja.org/",
      source: "https://github.com/Voninkazo/front-end-finals",
      imageAltText: "image description",
    },
    {
      title: "GoAlert Open Source",
      id: "4",
      description:
        "Working on this project introduced me to the use of Go language to make faster projects and understandable code. I also got to understand some benefits of using docker to automate the development, deployment and running of applications inside isolated containers. It creates containers that allow developers to bundle up an application with all of the parts it needs, such as libraries and other dependencies, and ship it as one package. If you would like to see the live app, you can click on the demo and then enter the username as **_admin_** and the password as **_admin/123_**",
      img: "/assets/images/goalert.png",
      tags: ["Go", "Javascript", "Typescript", "Docker", "Makefile"],
      demo: "https://goalert.silboapp.com/alerts",
      source: "https://github.com/target/goalert/issues",
      imageAltText: "image description",
    },
  ];
  return (
    <div className="font-sans mt-20">
      <div className="container">
        <h1 className="text-center text-2xl md:text-5xl text-lime-600 font-semibold">
          Projects
        </h1>
        <p className="mt-5 md:mt-6 text-base text-slate-900 md:max-w-xl md:mx-auto">
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
