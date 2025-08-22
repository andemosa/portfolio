import Link from "next/link";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { MediaIcon } from "components";
import { useHover } from "lib";

import styles from "./styles.module.css";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
  slug: string;
  rightShift?: boolean;
}

export const DesktopProjectCard = ({
  title,
  subtitle,
  description,
  externalLink,
  githubLink,
  technologies,
  imageLink,
  slug,
  rightShift,
}: Props) => {
  const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

  return (
    <div className={clsx(styles.container)} style={{ zIndex: 1 }}>
      <div className="px-6 py-6 md:p-0">
        <div className={clsx(rightShift && "md:text-right")}>
          <a
            href={externalLink}
            className="text-xl font-bold md:text-2xl dark:text-white-900 text-black-900"
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          <p className="text-base font-medium md:text-xl dark:text-white-700 text-black-700">
            {subtitle}
          </p>
        </div>
        <p
          className={clsx(
            styles.description,
            rightShift && "md:ml-auto md:text-right"
          )}
        >
          {description}
        </p>
        <div
          className={clsx(
            "flex md:mb-4 mb-2 w-[40%] flex-wrap",
            rightShift && "md:justify-end ml-auto"
          )}
        >
          {technologies.map((tech, i) => (
            <p
              className={clsx(
                "text-base dark:text-white-700 text-black-700 whitespace-nowrap",
                i !== technologies.length - 1 && "mr-5 md:mr-8"
              )}
              key={tech}
            >
              {tech}
            </p>
          ))}
        </div>
        <div
          className={clsx(
            "flex items-center gap-6",
            rightShift && "md:justify-end"
          )}
        >
          <Link href={`/projects/${slug}`} passHref>
            <a className="inline-flex items-center hover:text-blue-700 text-blue-900 dark:text-blue-700 dark:hover:text-blue-900 transition-colors font-medium relative group">
              View Details
              <FiArrowRight className="w-4 h-4 ml-1" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 dark:bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </Link>
          {githubLink ? (
            <MediaIcon
              icon={<FaGithub className="w-6 h-6" />}
              href={githubLink}
            />
          ) : null}
          <MediaIcon
            icon={
              <FiExternalLink className="w-6 h-6 text-black-900 dark:text-white-900" />
            }
            href={externalLink}
          />
        </div>
      </div>
      <motion.div
        className={clsx(
          "absolute md:right-0 md:w-7/12 md:-top-6 top-0 h-full rounded-lg",
          rightShift && "md:left-0"
        )}
        style={{ zIndex: -1 }}
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: -5,
          },
        }}
        animate={isHovered ? "hovered" : "initial"}
        initial="initial"
      >
        <img
          className="object-cover w-full h-full rounded-lg opacity-30 md:h-auto dark:opacity-40 md:opacity-100 md:dark:opacity-80 overflow-hidden"
          src={imageLink}
          alt={title}
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          }}
        />
      </motion.div>
      <a
        ref={hoverRef}
        target="_blank"
        className={clsx(
          "absolute top-0 h-full rounded-lg md:right-0 md:w-7/12 hidden md:block",
          rightShift && "md:left-0"
        )}
        href={externalLink}
        rel="noreferrer"
      />
    </div>
  );
};
