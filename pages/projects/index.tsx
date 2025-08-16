import { Header } from "components";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { projects } from "lib/projects";
import { DesktopProjectCard } from "components/Projects/libs/ProjectCard/Desktop";
import { MobileProjectCard } from "components/Projects/libs/ProjectCard/Mobile";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>All Projects - Anderson Osayerie</title>
        <meta
          name="description"
          content="Explore all projects by Anderson Osayerie - Full-stack developer and technical writer"
        />
        <meta property="og:title" content="All Projects - Anderson Osayerie" />
        <meta
          property="og:description"
          content="Explore all projects by Anderson Osayerie - Full-stack developer and technical writer"
        />
      </Head>

      <div className="min-h-screen bg-lightTheme dark:bg-darkTheme transition-colors">
        <Header />
        <div className="pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-900 dark:text-white-900 mb-6">
              All Projects
            </h1>
            <p className="text-xl md:text-2xl text-black-700 dark:text-white-700 max-w-3xl mx-auto">
              A comprehensive showcase of my work as a full-stack developer and
              technical writer, spanning healthcare, web3, and modern web
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="px-4 mx-auto mt-10 md:hidden max-w-screen-md grid grid-cols-1 gap-6">
              {projects.map((project, i) => (
                <MobileProjectCard key={i} {...project} />
              ))}
            </div>
            <div className="hidden px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg md:flex flex-col gap-3">
              {projects.map((project, i) => (
                <DesktopProjectCard
                  key={i}
                  {...project}
                  rightShift={i % 2 === 0}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black-900 dark:text-white-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-lg text-black-700 dark:text-white-700 mb-6">
              Let's collaborate to bring your ideas to life with modern web
              technologies.
            </p>
            <Link href="/#contact">
              <a className="inline-flex items-center px-6 py-3 hover:bg-blue-700 bg-blue-900 text-white-900 font-medium rounded-lg transition-colors">
                Get in Touch
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
