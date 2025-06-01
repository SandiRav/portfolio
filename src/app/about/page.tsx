import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Svelte.js",
    "Astro.js",
    "Node.js",
    "Express.js",
    "React Native",
    "MongoDB",
    "REST API",
    "Git",
    "Stripe API",
    "Figma",
  ];
  return (
    <main className="px-5 sm:mx-auto sm:max-w-136 lg:max-w-240 xl:max-w-screen-xl">
      <AnimatedSection>
        <div className="pb-16 pt-12 lg:pt-16">
          <div className="flex flex-col items-center gap-y-5 pb-8">
            <h1 className="relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:bg-secondary-200 after:content-['']">
              About Me
            </h1>
            <p className="text-center text-slate-900">
              Here is a bit about me—feel free to connect!
            </p>
          </div>
          <div className="lg:flex lg:gap-x-8">
            <div className="lg:w-88 shrink-0 lg:h-80">
              <Image
                src="/assets/images/profile.jpg"
                alt="Portrait of Raveloarisoa Sandrinah"
                width={280}
                height={280}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="mt-4 lg:mt-0 lg:w-2/3">
              <h2 className="mb-1 text-center text-xl font-bold text-gray-900 lg:text-left">
                Web Developer
              </h2>
              <p className="pb-4 pt-3 italic text-gray-600">
                <q>
                  Besides my passion for software development, I enjoy exploring
                  beautiful views, trying out new recipes in the kitchen, and
                  immersing myself in good music. These hobbies help me relax
                  and stay inspired.
                </q>
              </p>
              <div>
                <ul className="mb-5 flex flex-col gap-y-5">
                  <li className="flex items-center">
                    <IconArrowBadgeRightFilled className="text-secondary-200" />
                    <span className="ml-1 mr-2 font-semibold text-gray-900">
                      Email:
                    </span>
                    <span className="text-gray-600">
                      ainavoniarisoa@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center">
                    <IconArrowBadgeRightFilled className="text-secondary-200" />
                    <span className="ml-1 mr-2 font-semibold text-gray-900">
                      WhatsApp:
                    </span>
                    <span className="text-gray-600">+261384543837</span>
                  </li>
                  <li className="flex items-center">
                    <IconArrowBadgeRightFilled className="text-secondary-200" />
                    <span className="ml-1 mr-2 font-semibold text-gray-900">
                      City:
                    </span>
                    <span className="text-gray-600">Toamasina, Madagascar</span>
                  </li>
                  <li className="flex items-center">
                    <IconArrowBadgeRightFilled className="text-secondary-200" />
                    <span className="ml-1 mr-2 font-semibold text-gray-900">
                      Remote:
                    </span>
                    <span className="text-gray-600">Open</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="py-12 lg:py-16">
        <div className="flex flex-col items-center gap-y-5 pb-12 pb-14">
          <h1 className="relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:bg-secondary-200 after:content-['']">
            My Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-sm bg-slate-900 px-4 py-3 text-center text-secondary-200 transition-colors duration-300 hover:bg-slate-800 hover:font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
