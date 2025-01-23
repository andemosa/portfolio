import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import { Footer, Header } from "components";

const Custom404Page = () => {
  return (
    <>
      <Head>
        <title>Anderson Osayerie</title>
      </Head>
      <motion.main
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          damping: 5,
          mass: 1,
        }}
        className="flex flex-col h-full flex-1"
      >
        <Header className="relative" />
        <div className="h-full flex-1 flex flex-col items-center justify-center bg-lightTheme dark:bg-darkTheme text-black-900 dark:text-white-900 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <motion.div
              whileHover="hover"
              initial="initial"
              variants={{
                initial: {
                  rotate: 0,
                  scale: 1,
                },
                hover: {
                  rotate: -15,
                  scale: 1.2,
                },
              }}
            >
              <FrownIcon className="mx-auto h-12 w-12 text-primary" />
            </motion.div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Oops, page not found!
            </h1>
            <p className="mt-4">
              The page you're looking for doesn't seem to exist. Let's get you
              back on track.
            </p>
            <div className="mt-6">
              <Link href="/">
                <a href="/" className="text-sm font-medium hover:underline">
                  Go to Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </motion.main>
    </>
  );
};

export default Custom404Page;

const FrownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
};
