import { Section } from "components";
import { FC } from "react";
import { projects } from "lib/projects";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { DesktopProjectCard } from "./libs/ProjectCard/Desktop";
import { MobileProjectCard } from "./libs/ProjectCard/Mobile";

export const Projects: FC = () => {
  return (
    <div id="projects">
      <Section
        className="mt-16 mb-16 md:mt-24"
        title={"Projects"}
        description={
          "Here are some of my favourite projects that I enjoyed working on during my free time."
        }
      >
        <div className="px-4 mx-auto mt-10 md:hidden max-w-screen-md grid grid-cols-1 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <MobileProjectCard key={i} {...project} />
          ))}
        </div>
        <div className="hidden px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg md:flex flex-col gap-3">
          {projects.slice(0, 4).map((project, i) => (
            <DesktopProjectCard key={i} {...project} rightShift={i % 2 === 0} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <a className="inline-flex items-center px-6 py-3 dark:bg-blue-900 dark:hover:bg-blue-700 bg-blue-900 hover:bg-blue-700 text-white-900 font-medium rounded-lg transition-colors group">
              View All Projects
              <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </Section>
    </div>
  );
};
