import { Container, MediaIcon } from "components";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'
import { SiHackernoon, SiHashnode } from "react-icons/si";

export const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="flex my-8 justify-center">
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
            icon={<FaMedium className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://medium.com/@Osayerieanderson"
            className="mr-4"
          />
          <MediaIcon
            icon={<SiHackernoon className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://hackernoon.com/u/andemosa"
            className="mr-4"
          />
          <MediaIcon
            icon={<SiHashnode className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://andemosa.hashnode.dev/"
            className="mr-4"
          />
        </div>
      </footer>
    </Container>
  );
};
