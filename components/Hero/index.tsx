import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { HandWave } from "./libs/HandWave";
import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="/images/me.webp"
        alt="A beautiful face"
        className="overflow-hidden rounded-full w-28 h-28 md:w-32 md:h-32 mt-8"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 1,
          delay: 2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
          Hi, I'm Anderson!
        </h1>
        <HandWave className="text-4xl md:text-5xl" />
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        Web developer and Technical writer <br />
        Previously&nbsp;
        <HeroLink title="Hackernoon" href="https://hackernoon.com/" /> and&nbsp;
        <HeroLink title="Dantown" href="https://godantown.com/" />
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/andemosa"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/anderson-osayerie/"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaXTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://x.com/andemosa"
          className="mr-4"
        />
        <MediaIcon
          icon={
            <FaPaperclip className="w-6 h-6 md:w-7 md:h-7 animate-bounce hover:animate-spin" />
          }
          href="https://docs.google.com/document/d/1HcUOZAxPPBkehKD238K5vjT4gAqxujt3poSGac174Rg/edit?usp=sharing"
        />
      </div>
      <div className="mt-10">
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I am an experienced Web Developer with a proven track record of
          crafting and creating products for global companies.
        </p>
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I love collaborating in teams to create aesthetic and scalable web
          solutions.
        </p>
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I build mostly in Javascript & Typescript with a strong proficiency in
          technologies like React, Nextjs, Nodejs, MongoDB, and SQL databases,
          though I'm always excited to try out new technologies.
        </p>
        <p className="mb-4 text-base md:text-xl dark:text-white-700 text-black-700">
          I also love writing and have a knack for making complex concepts clear
          and concise.
        </p>
      </div>
    </Container>
  );
};
