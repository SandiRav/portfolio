import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { ProgressBar } from "../components/ProgresBar";

export default function Home() {
  return (
    <main className="px-5 font-sans">
      <AnimatedSection>
        <div className="pb-16 pt-12">
          <div className="flex flex-col items-center gap-y-5 pb-14">
            <h1 className="after:bg-secondary-100 relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:content-['']">
              About
            </h1>
            <p className="text-center text-slate-900">
              His needs result from something, an escape, and he is indeed of a
              nature that is sincere and consistent.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/profile.jpg"
              alt="Portrait of Raveloarisoa Sandrinah"
              width={280}
              height={280}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="mt-4">
            <h2 className="mb-1 text-center text-xl font-bold text-gray-900">
              Web Developer
            </h2>
            <p className="py-3 italic text-gray-600">
              I'm a software developer specializing in frontend development,
              building user-friendly interfaces for web and mobile apps. I focus
              on creating clean, responsive, and accessible designs that provide
              a smooth user experience.
            </p>
          </div>
          <div>
            <ul className="mb-5 flex flex-col gap-y-5">
              <li className="flex items-center">
                <IconArrowBadgeRightFilled className="text-secondary-100" />
                <span className="ml-1 mr-2 font-semibold text-gray-900">
                  Age:
                </span>
                <Link
                  href="mailto:ainavoniarisoa@gmail.com"
                  target="_blank"
                  className="text-gray-600"
                >
                  24
                </Link>
              </li>
              <li className="flex items-center">
                <IconArrowBadgeRightFilled className="text-secondary-100" />
                <span className="ml-1 mr-2 font-semibold text-gray-900">
                  Email:
                </span>
                <span className="text-gray-600">ainavoniarisoa@gmail.com</span>
              </li>
              <li className="flex items-center">
                <IconArrowBadgeRightFilled className="text-secondary-100" />
                <span className="ml-1 mr-2 font-semibold text-gray-900">
                  Phone:
                </span>
                <span className="text-gray-600">+261384543837</span>
              </li>
              <li className="flex items-center">
                <IconArrowBadgeRightFilled className="text-secondary-100" />
                <span className="ml-1 mr-2 font-semibold text-gray-900">
                  City:
                </span>
                <span className="text-gray-600">Toamasina, Madagascar</span>
              </li>
              <li className="flex items-center">
                <IconArrowBadgeRightFilled className="text-secondary-100" />
                <span className="ml-1 mr-2 font-semibold text-gray-900">
                  Freelance:
                </span>
                <span className="text-gray-600">Available</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="py-3 text-gray-900">
              Responsibilities are chosen with purpose, balancing effort and
              reward. Anyone can achieve greatness. No hardship endures forever.
              Integrity defines actions, and true commitment repels falsehood.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="py-12">
        <div className="flex flex-col items-center gap-y-5 pb-12 pb-14">
          <h1 className="after:bg-secondary-100 relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:content-['']">
            Skills
          </h1>
          <p className="text-center text-slate-900">
            Here are the skills that power my work, from creating responsive web
            interfaces to building seamless mobile applications.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <ProgressBar percentage={100} skill="HTML" />
          <ProgressBar percentage={90} skill="CSS/SASS" />
          <ProgressBar percentage={90} skill="JavaScript" />
          <ProgressBar percentage={80} skill="React.js" />
          <ProgressBar percentage={80} skill="Tailwind CSS" />
          <ProgressBar percentage={70} skill="Typescript" />
          <ProgressBar percentage={70} skill="Next.js" />
          <ProgressBar percentage={70} skill="Astro" />
          <ProgressBar percentage={60} skill="Node.js" />
          <ProgressBar percentage={60} skill="Svelte.js" />
          <ProgressBar percentage={50} skill="React Native" />
          <ProgressBar percentage={50} skill="Flutter" />
        </div>
      </AnimatedSection>
    </main>
  );
}
