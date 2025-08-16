export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: {
    problem: string;
    solution: string;
    target: string;
  };
  role: {
    title: string;
    responsibilities: string[];
    duration: string;
  };
  stack: {
    frontend: string[];
    backend?: string[];
    tools: string[];
    reasoning: string;
  };
  features: string[];
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  impact?: {
    metrics?: string[];
    results: string[];
    testimonials?: string[];
    lessons: string[];
  };
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
  gallery?: string[];
  year?: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "easelab",
    title: "Easelab Africa",
    subtitle: "Healthcare Diagnostics Platform",
    description:
      "EaseLab Africa is a healthcare company dedicated to transforming the medical diagnostics landscape across Africa by equipping laboratories with world-class tools, advanced technology, and innovative solutions.",
    overview: {
      problem:
        "Medical laboratories across Africa struggle with limited access to quality diagnostic tools and technology. Many labs are using outdated equipment, which affects the accuracy of test results and ultimately impacts patient care. The lack of a centralized platform for connecting labs with suppliers and educational resources was making it difficult for healthcare professionals to stay updated with the latest diagnostic technologies.",
      solution:
        "I worked with a team that built a comprehensive web platform that serves as a bridge between laboratories, users and diagnostic technology suppliers. The site showcases EaseLab's services, provides educational resources for healthcare professionals, and facilitates connections between labs, users and suppliers. It's designed to be the go-to resource for anyone looking to upgrade their diagnostic capabilities in Africa.",
      target:
        "The platform serves healthcare professionals, laboratory technicians, medical institutions, patients and diagnostic equipment suppliers across Africa who are looking to improve their diagnostic capabilities and stay connected with the latest medical technology.",
    },
    role: {
      title: "Fullstack Developer",
      responsibilities: [
        "Ensured a fully responsive, modern, and optimized experience according to the provided Figma design.",
        "Mentored a junior developer during the project.",
        "Ensured the site meets accessibility standards.",
      ],
      duration: "3 months (2025)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      tools: ["Git", "Vercel", "Figma"],
      reasoning:
        "I chose Next.js for its excellent SEO capabilities and static generation - crucial for a healthcare company that needs to rank well in search results. TypeScript was essential for building reliable code that healthcare professionals can trust. TailwindCSS let me move fast while maintaining consistent, professional styling. I added Framer Motion for subtle animations that make the site feel modern without being distracting.",
    },
    features: [
      "Responsive design that works perfectly on tablets, phones, and desktop computers",
      "Comprehensive service catalog with detailed information about diagnostic offerings",
      "Educational resource center with downloadable guides and materials",
      "Contact and consultation booking system with form validation",
    ],
    technologies: ["Typescript", "NextJS", "TailwindCSS", "Framer-motion"],
    externalLink: "https://easelabafrica.com/",
    githubLink: "",
    imageLink: "/images/easelab/easelab.webp",
    gallery: [
      "/images/easelab/easelab.webp",
      "/images/easelab/about.webp",
      "/images/easelab/careers.webp",
      "/images/easelab/empower.webp",
    ],
    year: "2025",
    category: "Healthcare",
  },
  {
    slug: "diabetes-care-network",
    title: "Diabetes Care Network",
    subtitle: "Healthcare Management Platform",
    description:
      "The Diabetes Care Network (TDCN) is dedicated to bridging the knowledge gap in the management of type 2 diabetes in Nigeria.",
    overview: {
      problem:
        "Nigeria is facing a growing diabetes crisis, but there's a huge gap in diabetes education and management resources. Many healthcare providers don't have access to the latest diabetes care protocols, and patients often struggle to find reliable information about managing their condition. The existing resources were either too technical for most people or not culturally relevant to the Nigerian context.",
      solution:
        "My team created a comprehensive digital platform that provides evidence-based diabetes education specifically designed for the Nigerian healthcare system. The site includes educational modules for healthcare professionals, patient management tools, and community support features. I made sure the content is accessible to people with different literacy levels and includes local cultural considerations.",
      target:
        "The platform serves healthcare professionals, diabetes patients, caregivers, and medical institutions across Nigeria who need better resources for diabetes management and education.",
    },
    role: {
      title: "Full-stack Developer",
      responsibilities: [
        "Led the full-stack development using Next.js and TypeScript",
        "Designed user interfaces that work for people with different literacy levels",
        "Created a content management system that supports diabetes care education",
      ],
      duration: "4 months (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript"],
      tools: ["Git", "Vercel", "MongoDB Atlas"],
      reasoning:
        "I went with Next.js for its excellent performance with content-heavy medical information. TypeScript was crucial for building reliable systems that handle sensitive healthcare data. MongoDB gave me the flexibility to handle diverse content types.",
    },
    features: [
      "Comprehensive diabetes education modules with visual aids and simple language",
      "Patient management tools for tracking progress and medication adherence",
      "Responsive design that works perfectly on tablets, phones, and desktop computers",
    ],
    technologies: ["NextJS", "Typescript"],
    externalLink: "https://thediabetescarenetwork.com/",
    githubLink: "",
    imageLink: "/images/tdcn/tdcn.webp",
    gallery: [
      "/images/tdcn/tdcn.webp",
      "/images/tdcn/blog.webp",
      "/images/tdcn/programs.webp",
      "/images/tdcn/testimonials.webp",
    ],
    year: "2024",
    category: "Healthcare",
  },
  {
    slug: "sedot-pharmacy",
    title: "Sedot Pharmacy",
    subtitle: "Pharmaceutical Care Platform",
    description:
      "Sedot Pharmacy provide personalized care services through the integration of pharmaceutical care, point-of-care testing, and medication therapy management.",
    overview: {
      problem:
        "Traditional pharmacies in Nigeria are still very basic - they just dispense medications. But modern healthcare needs more than that. Patients need personalized care, medication therapy management, and access to point-of-care testing. The existing pharmacy experience was fragmented and didn't provide the comprehensive care that patients deserve.",
      solution:
        "I built a modern digital platform that transforms how pharmacies operate. It integrates traditional dispensing services with personalized care, testing services, and digital health management tools. The platform makes it easy for customers to access comprehensive pharmaceutical care and for the pharmacy to provide better, more personalized services.",
      target:
        "The platform serves pharmacy customers, healthcare providers, and patients who want more than just basic medication dispensing - they want comprehensive pharmaceutical care and medication therapy management.",
    },
    role: {
      title: "Fullstack Developer",
      responsibilities: [
        "Developed the complete application using Next.js and TypeScript",
        "Designed intuitive interfaces for medication management and health tracking",
        "Built secure systems for managing patient health profiles",
        "Created a consultation system for telemedicine booking with health professional",
      ],
      duration: "2.5 months (2025)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript"],
      tools: ["Git", "Netlify", "Paystack"],
      reasoning:
        "I chose Next.js for the pharmaceutical industry's need for fast, SEO-optimized pages that build trust. TypeScript was essential for building reliable medication management systems. The stack prioritizes security and compliance features that are required in pharmaceutical services.",
    },
    features: [
      "Comprehensive online pharmacy service catalog with search and filtering",
      "Point-of-care testing appointment booking and result tracking",
      "Telemedicine consultation with health professional",
      "Personalized care recommendations based on individual health profiles",
      "Secure customer health profile management system",
      "Digital prescription management and refill tracking",
    ],
    technologies: ["NextJS", "Typescript"],
    externalLink: "https://sedotpharmacy.com.ng/",
    githubLink: "",
    imageLink: "/images/sedot/sedot.webp",
    gallery: [
      "/images/sedot/sedot.webp",
      "/images/sedot/services.webp",
      "/images/sedot/shop.webp",
      "/images/sedot/lab-booking.webp",
    ],
    year: "2025",
    category: "Healthcare",
  },
  {
    slug: "creon",
    title: "Creon",
    subtitle: "NFT & AI Landing Page",
    description:
      "This is a pixel-perfect integration of a landing page for Creon, an NFT, AI web project",
    overview: {
      problem:
        "The client needed a landing page that could effectively communicate complex blockchain and AI concepts to a broad audience. The design was highly detailed and sophisticated, requiring pixel-perfect implementation while maintaining excellent performance and accessibility. The challenge was to create something visually stunning that could also convert visitors into interested users.",
      solution:
        "I built a pixel-perfect, high-performance landing page that showcases NFT and AI capabilities through modern web technologies. The design emphasizes visual impact while maintaining accessibility and user experience. I focused on creating smooth animations and interactions that demonstrate the project's technical sophistication.",
      target:
        "The landing page targets crypto enthusiasts, NFT collectors, AI developers, and potential investors who are interested in the intersection of blockchain and artificial intelligence technologies.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Implemented pixel-perfect design from detailed Figma specifications",
        "Built responsive components using Next.js and TypeScript",
        "Integrated ShadcnUI component library for consistent design system",
        "Optimized performance for web3 audience expectations",
        "Created interactive elements that showcase AI and blockchain capabilities",
      ],
      duration: "0.5 months (2023)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "ShadcnUI"],
      tools: ["Git", "Vercel", "Figma"],
      reasoning:
        "I chose Next.js for the performance and SEO benefits crucial for landing pages. ShadcnUI provided a modern component system perfect for web3 aesthetics. TailwindCSS enabled rapid implementation of complex designs while TypeScript ensured code reliability for a high-stakes project.",
    },
    features: [
      "Pixel-perfect responsive design matching exact specifications",
      "Advanced animations and micro-interactions that enhance user engagement",
      "Modern component architecture using ShadcnUI design system",
      "Performance optimized for fast loading and smooth interactions",
      "Interactive elements demonstrating AI capabilities",
    ],
    technologies: ["NextJS", "TailwindCSS", "ShadcnUI", "Typescript"],
    externalLink: "https://creon-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/creon",
    imageLink: "/images/creon/creon.webp",
    gallery: [
      "/images/creon/creon.webp",
      "/images/creon/profit.webp",
      "/images/creon/creon.webp",
    ],
    year: "2023",
    category: "Web3/Blockchain",
  },
  {
    slug: "countries",
    title: "REST Countries Explorer",
    subtitle: "Frontend Mentor Challenge",
    description:
      "A country information explorer app using REST Countries API. Built as a responsive, theme-switchable solution for frontend mentor practice.",
    overview: {
      problem:
        "Static country data sources limit usability and aren’t interactive for users who want quick information.",
      solution:
        "A searchable, theme-toggle interface for country info using live data with dark/light UI support.",
      target:
        "Frontend developers, learners, and curious users exploring countries and their details.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Fetched and displayed live country data using REST API",
        "Implemented search, region filter, and detail pages",
        "Added dark/light theme switcher with localStorage support",
        "Built fully responsive layout using TailwindCSS",
      ],
      duration: "1 week (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS"],
      tools: ["REST Countries API", "Vercel"],
      reasoning:
        "Used modern frontend stack for performance and maintainability while practicing UI logic and state management.",
    },
    features: [
      "Country list with flag, population, region, and capital",
      "Detail pages with currencies, borders, and subregion",
      "Search by name and filter by region",
      "Dark/light theme toggle",
      "Responsive design for mobile/tablet/desktop",
    ],
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    externalLink: "https://countries-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/countries",
    imageLink: "/images/countries/region.webp",
    gallery: [
      "/images/countries/details.webp",
      "/images/countries/search.webp",
      "/images/countries/region.webp",
      "/images/countries/mobile.webp",
    ],
    year: "2024",
    category: "Frontend Practice",
  },
  {
    slug: "task-app",
    title: "Task Manager App",
    subtitle: "Interactive To-Do List Application",
    description:
      "A lightweight, interactive task management app built to help users add and manage to‑dos quickly, with real‑time updates and intuitive controls.",
    overview: {
      problem:
        "Users often struggle to organize simple daily tasks through clunky or over‑engineered apps.",
      solution:
        "A minimal and responsive task app offering a clean UI to add, view, and delete tasks instantly.",
      target:
        "Anyone looking for a fast, distraction‑free to‑do tool for daily productivity.",
    },
    role: {
      title: "Fullstack Developer",
      responsibilities: [
        "Built task creation, listing, and deletion workflows on both the frontend and backend",
        "Ensured responsive and performant UI interactions",
        "Implemented state management for real‑time task updates",
        "Deployed the application with seamless CI/CD on Vercel and Render",
      ],
      duration: "2 weeks (2023)",
    },
    stack: {
      frontend: ["React.js", "Vite", "TypeScript", "TailwindCSS"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      tools: ["Git", "Vercel"],
      reasoning:
        "React.js offers fast loading; TypeScript adds developer safety; TailwindCSS allows for clean, rapid styling consistent across devices.",
    },
    features: [
      "Add new tasks with instant UI feedback",
      "View current tasks and active task list",
      "Delete tasks with intuitive controls",
      "Minimal animation for UI responsiveness",
      "Fully responsive for mobile and desktop",
    ],
    technologies: [
      "React.js",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    externalLink: "https://task-app-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/task-app",
    imageLink: "/images/task-app/task-app.webp",
    gallery: [
      "/images/task-app/task-app.webp",
      "/images/task-app/list.webp",
      "/images/task-app/show.webp",
      "/images/task-app/update.webp",
      "/images/task-app/mobile.webp",
    ],
    year: "2023",
    category: "Productivity",
  },
  {
    slug: "moviebox",
    title: "MovieBox",
    subtitle: "Movie Listing App",
    description:
      "MovieBox is a responsive movie-listing interface that fetches live data using TMDB API and showcases search, filtering, and movie detail views.",
    overview: {
      problem:
        "Movie data and streaming previews are often locked behind paywalls or clunky interfaces.",
      solution:
        "A user-friendly, clean interface for browsing movies, and details using TMDB’s public API.",
      target:
        "Movie lovers, developers, and designers looking for inspiration from modern streaming UI.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Built responsive layout using TailwindCSS",
        "Integrated TMDB API for live movie listings",
        "Created modal-based preview system",
        "Implemented search and genre filtering",
        "Built dynamic routing for movie detail pages",
      ],
      duration: "1 week (2023)",
    },
    stack: {
      frontend: ["React.js", "Vite", "TypeScript", "TailwindCSS"],
      tools: ["TMDB API", "Git", "Vercel"],
      reasoning:
        "Built for fast load times; TailwindCSS gave precise control over responsive layouts.",
    },
    features: [
      "Live movie data via TMDB API",
      "Movie poster gallery with hover previews",
      "Search functionality and filter by genre",
      "Responsive layout for all devices",
    ],
    technologies: ["React.js", "Vite", "TypeScript", "TailwindCSS", "TMDB API"],
    externalLink: "https://moviebox-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/moviebox",
    imageLink: "/images/moviebox/moviebox.webp",
    gallery: [
      "/images/moviebox/moviebox.webp",
      "/images/moviebox/featured.webp",
      "/images/moviebox/search.webp",
      "/images/moviebox/mobile.webp",
    ],
    year: "2023",
    category: "Media",
  },
  {
    slug: "clearlink",
    title: "ClearLink",
    subtitle: "AI Meeting Assistant Landing Page",
    description:
      "ClearLink is a marketing site for an AI-based meeting assistant. Built with pixel-perfect Figma implementation, responsive design, and accessibility in mind.",
    overview: {
      problem:
        "AI tools often lack clear and engaging marketing landing pages that communicate benefits effectively.",
      solution:
        "A modern, professional marketing site with sleek UI, animations, testimonials, and feature highlights.",
      target:
        "Teams and organizations seeking AI-powered communication and scheduling tools.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Translated Figma design into production-ready site",
        "Implemented TailwindCSS utility-first responsive styling",
        "Used Framer Motion for entry animations",
        "Deployed via Vercel with performant build",
      ],
      duration: "2 weeks (2024)",
    },
    stack: {
      frontend: ["React.js", "Vite", "TypeScript", "TailwindCSS", "ShadcnUI"],
      tools: ["Framer Motion", "Vercel", "Git", "Figma"],
      reasoning:
        "Built for fast load times and user-friendly animation without sacrificing structure or accessibility.",
    },
    features: [
      "Pixel-perfect layout from Figma",
      "Responsive layout and optimized images",
      "Use cases, testimonials, and CTA sections",
      "Accessible semantic HTML and aria labels",
    ],
    technologies: [
      "React.js",
      "ShadcnUI",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    externalLink: "https://clearlink-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/clearlink",
    imageLink: "/images/clearlink/clearlink.webp",
    gallery: [
      "/images/clearlink/clearlink.webp",
      "/images/clearlink/clear.webp",
      "/images/clearlink/clearlink_mobile.webp",
      "/images/clearlink/clear_mobile.webp",
    ],
    year: "2024",
    category: "AI",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map((project) => project.slug);
};
