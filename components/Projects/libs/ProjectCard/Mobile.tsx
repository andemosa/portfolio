import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
  slug: string;
  category: string;
}

export const MobileProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  externalLink,
  githubLink,
  imageLink,
  slug,
  category,
}: Props) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-40 rounded-xl overflow-hidden shadow-lg border border-gray-700 border-opacity-20 dark:border-white-300 dark:border-opacity-20 w-full max-w-md mx-auto"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageLink}
          alt={title}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-blue-700 text-white rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-900 from-0% via-transparent via-50% to-transparent opacity-40"></div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-bold text-xl text-black-900 dark:text-white-900 mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm font-medium text-black-700 dark:text-white-700 line-clamp-1">
            {subtitle}
          </p>
        </div>

        <p className="text-sm text-black-700 dark:text-white-700 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-700 bg-opacity-15 dark:bg-blue-900 dark:bg-opacity-25 text-blue-900 dark:text-blue-700 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-700 bg-opacity-15 dark:bg-white-300 dark:bg-opacity-15 text-gray-700 dark:text-white-700 rounded">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link href={`/projects/${slug}`}>
            <a className="inline-flex items-center text-blue-700 hover:text-blue-900 dark:text-blue-700 dark:hover:text-blue-900 transition-colors font-medium text-sm group">
              View Details
              <FiArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Link>

          <div className="flex items-center gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-black-700 dark:text-white-700 hover:text-black-900 dark:hover:text-white-900 hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-white-300 dark:hover:bg-opacity-10 transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-black-700 dark:text-white-700 hover:text-black-900 dark:hover:text-white-900 hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-white-300 dark:hover:bg-opacity-10 transition-all"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
