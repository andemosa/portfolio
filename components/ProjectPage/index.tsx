import { Container, MediaIcon, Header } from "components";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaArrowLeft, FaCheck } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Project } from "lib/projects";

interface ProjectPageProps {
  project: Project;
}

export const ProjectPage: FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-lightTheme dark:bg-darkTheme transition-colors">
      <Header />
      <Container className="pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/projects">
            <a className="inline-flex items-center text-black-700 dark:text-white-700 hover:text-black-900 dark:hover:text-white-900 transition-colors">
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </a>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0 lg:w-6/12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-900 dark:text-white-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-black-700 dark:text-white-700 mb-6">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-blue-700 bg-opacity-20 dark:bg-blue-900 dark:bg-opacity-30 text-blue-900 dark:text-blue-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.githubLink && (
                  <MediaIcon
                    icon={<FaGithub className="w-6 h-6" />}
                    href={project.githubLink}
                  />
                )}
                <MediaIcon
                  icon={<FiExternalLink className="w-6 h-6" />}
                  href={project.externalLink}
                />
              </div>
            </div>
            
            <div className="lg:w-5/12">
              <motion.img
                src={project.imageLink}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-16"
        >
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
              Project Overview
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-3">
                  The Problem
                </h3>
                <p className="text-lg text-black-700 dark:text-white-700 leading-relaxed mb-6">
                  {project.overview.problem}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-3">
                  The Solution
                </h3>
                <p className="text-lg text-black-700 dark:text-white-700 leading-relaxed mb-6">
                  {project.overview.solution}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-3">
                  Target Audience
                </h3>
                <p className="text-lg text-black-700 dark:text-white-700 leading-relaxed">
                  {project.overview.target}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
              Your Role
            </h2>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900">
                  {project.role.title}
                </h3>
                <span className="text-lg text-black-700 dark:text-white-700">
                  {project.role.duration}
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {project.role.responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <FaCheck className="w-4 h-4 text-blue-700 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg text-black-700 dark:text-white-700">{responsibility}</p>
                </motion.li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
              Stack Used
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                  Technologies
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-black-900 dark:text-white-900 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-blue-700 bg-opacity-10 dark:bg-blue-900 dark:bg-opacity-20 text-blue-900 dark:text-blue-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.stack.backend && (
                    <div>
                      <h4 className="font-medium text-black-900 dark:text-white-900 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.backend.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-sm bg-blue-700 bg-opacity-10 dark:bg-blue-900 dark:bg-opacity-20 text-blue-900 dark:text-blue-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-black-900 dark:text-white-900 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-sm bg-gray-700 bg-opacity-10 dark:bg-white-300 dark:bg-opacity-10 text-gray-700 dark:text-white-700 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                  Why This Stack?
                </h3>
                <p className="text-lg text-black-700 dark:text-white-700 leading-relaxed">
                  {project.stack.reasoning}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-blue-700 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <p className="text-lg text-black-700 dark:text-white-700">{feature}</p>
                </motion.li>
              ))}
            </ul>
          </section>

          {project.challenges && project.challenges.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
                Challenges & Solutions
              </h2>
              <div className="space-y-8">
                {project.challenges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                    className="border-l-4 border-blue-700 pl-6"
                  >
                    <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-3">
                      Challenge: {item.challenge}
                    </h3>
                    <p className="text-lg text-black-700 dark:text-white-700 leading-relaxed">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 dark:text-white-900 mb-6">
              Impact
            </h2>
            <div className="grid gap-8">
              {project.impact.metrics && project.impact.metrics.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                    Key Metrics
                  </h3>
                  <ul className="space-y-3">
                    {project.impact.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        <p className="text-lg text-black-700 dark:text-white-700">{metric}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                  Results
                </h3>
                <ul className="space-y-3">
                  {project.impact.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <p className="text-lg text-black-700 dark:text-white-700">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {project.impact.testimonials && project.impact.testimonials.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                    Testimonials
                  </h3>
                  <div className="space-y-4">
                    {project.impact.testimonials.map((testimonial, index) => (
                      <blockquote key={index} className="border-l-4 border-blue-700 pl-6 italic text-lg text-black-700 dark:text-white-700">
                        "{testimonial}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-black-900 dark:text-white-900 mb-4">
                  Lessons Learned
                </h3>
                <ul className="space-y-3">
                  {project.impact.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-gray-700 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <p className="text-lg text-black-700 dark:text-white-700">{lesson}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 p-8 bg-gray-900 bg-opacity-5 dark:bg-white-300 dark:bg-opacity-5 rounded-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black-900 dark:text-white-900 mb-6 text-center">
            Links
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black-900 dark:bg-white-900 text-white-900 dark:text-black-900 font-medium rounded-lg hover:opacity-80 transition-opacity"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            )}
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 hover:bg-blue-700 bg-blue-900 text-white-900 font-medium rounded-lg transition-colors"
            >
              <FiExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black-900 dark:text-white-900 mb-4">
            Interested in working together?
          </h3>
          <p className="text-lg text-black-700 dark:text-white-700 mb-6">
            Let's discuss how we can bring your ideas to life.
          </p>
          <Link href="/#contact">
            <a className="inline-flex items-center px-6 py-3 hover:bg-blue-700 bg-blue-900 text-white-900 font-medium rounded-lg transition-colors">
              Get in Touch
            </a>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}; 