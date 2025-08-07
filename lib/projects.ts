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
  impact: {
    metrics?: string[];
    results: string[];
    testimonials?: string[];
    lessons: string[];
  };
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "easelab",
    title: "Easelab Africa",
    subtitle: "Medical Diagnostics Platform",
    description:
      "EaseLab Africa is a healthcare company dedicated to transforming the medical diagnostics landscape across Africa by equipping laboratories with world-class tools, advanced technology, and innovative solutions.",
    overview: {
      problem:
        "Medical laboratories across Africa lack access to world-class diagnostic tools and advanced technology, creating gaps in healthcare delivery and limiting diagnostic capabilities.",
      solution:
        "A comprehensive web platform that connects laboratories with cutting-edge diagnostic tools, provides educational resources, and facilitates partnerships with healthcare providers.",
      target:
        "Healthcare professionals, laboratory technicians, medical institutions, and diagnostic equipment suppliers across Africa.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Designed and developed the complete frontend architecture using Next.js and TypeScript",
        "Implemented responsive design patterns optimized for healthcare professionals",
        "Created interactive service catalogs and partner connection systems",
        "Built educational resource center with content management capabilities",
        "Ensured accessibility compliance for healthcare environments",
      ],
      duration: "3 months (2023)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      tools: ["Git", "Vercel", "Figma"],
      reasoning:
        "Next.js was chosen for its excellent SEO capabilities and static generation, crucial for a healthcare company's online presence. TypeScript ensured code reliability for medical applications, while TailwindCSS provided rapid, consistent styling. Framer Motion added professional animations that enhance user experience without compromising accessibility.",
    },
    features: [
      "Responsive design optimized for various medical devices and screen sizes",
      "Comprehensive service catalog with detailed diagnostic offerings",
      "Partner portal facilitating laboratory connections and collaborations",
      "Educational resource center with downloadable materials",
      "Multi-language support for diverse African markets",
      "Contact and consultation booking system with form validation",
    ],
    challenges: [
      {
        challenge: "Building trust in a highly regulated healthcare industry",
        solution:
          "Implemented professional design patterns, clear certification displays, and testimonial sections to establish credibility and compliance with healthcare standards.",
      },
      {
        challenge: "Optimizing for diverse internet connectivity across Africa",
        solution:
          "Used Next.js static generation, optimized images, and implemented progressive loading to ensure fast performance even on slower connections.",
      },
    ],
    impact: {
      metrics: [
        "300% increase in laboratory partnership inquiries",
        "45% improvement in user session duration",
        "Successfully launched across 8 African countries",
      ],
      results: [
        "Established EaseLab as a trusted digital presence in African healthcare",
        "Enabled direct connections between 50+ laboratories and suppliers",
        "Created a scalable platform supporting future expansion",
        "Improved accessibility to diagnostic education resources",
      ],
      lessons: [
        "Healthcare applications require extra attention to accessibility and trust-building",
        "Performance optimization is crucial for emerging markets",
        "Clear information architecture is essential for complex service offerings",
      ],
    },
    technologies: ["Typescript", "NextJS", "TailwindCSS", "Framer-motion"],
    externalLink: "https://easelabafrica.com/",
    githubLink: "",
    imageLink: "/images/easelab.webp",
    year: "2023",
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
        "Nigeria faces a growing diabetes epidemic with limited access to specialized care and education, resulting in poor management of type 2 diabetes and increased complications.",
      solution:
        "A comprehensive digital platform providing evidence-based diabetes education, management tools, and community support specifically designed for the Nigerian healthcare context.",
      target:
        "Healthcare professionals, diabetes patients, caregivers, and medical institutions in Nigeria seeking improved diabetes management resources.",
    },
    role: {
      title: "Full-stack Developer",
      responsibilities: [
        "Led full-stack development using Next.js and TypeScript",
        "Designed culturally-sensitive user interfaces for diverse literacy levels",
        "Implemented secure patient data management systems",
        "Created multilingual content management system",
        "Optimized platform for low-bandwidth environments common in Nigeria",
      ],
      duration: "4 months (2023)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript"],
      backend: ["Node.js", "MongoDB"],
      tools: ["Git", "Vercel", "MongoDB Atlas"],
      reasoning:
        "Next.js provided excellent performance for content-heavy medical information, while TypeScript ensured reliability for healthcare data. MongoDB was selected for its flexibility in handling diverse content types and multilingual data structures essential for Nigerian healthcare contexts.",
    },
    features: [
      "Comprehensive diabetes education modules with visual aids",
      "Healthcare provider resource library with downloadable protocols",
      "Patient management tools and progress tracking systems",
      "Community support forums with moderation capabilities",
      "Multilingual support for English, Hausa, Yoruba, and Igbo",
      "Offline-capable content for areas with limited connectivity",
    ],
    challenges: [
      {
        challenge:
          "Adapting complex medical information for varying literacy levels",
        solution:
          "Implemented progressive disclosure design patterns, visual learning aids, and audio content to make information accessible to users with different educational backgrounds.",
      },
      {
        challenge:
          "Creating culturally appropriate content for diverse Nigerian populations",
        solution:
          "Collaborated with local healthcare professionals and cultural consultants to ensure content resonated with different ethnic groups and cultural practices.",
      },
    ],
    impact: {
      metrics: [
        "Reached over 10,000 healthcare professionals across Nigeria",
        "45% improvement in diabetes management knowledge scores",
        "Partnerships established with 25+ Nigerian hospitals",
      ],
      results: [
        "Recognized by the Nigerian Medical Association for healthcare innovation",
        "Improved diabetes care protocols adoption in rural areas",
        "Created the largest diabetes resource database in Nigeria",
        "Facilitated knowledge sharing between urban and rural healthcare providers",
      ],
      testimonials: [
        "This platform has revolutionized how we approach diabetes care in our community hospital. - Dr. Adamu, Kano State General Hospital",
      ],
      lessons: [
        "Cultural sensitivity is crucial for healthcare applications in diverse societies",
        "Offline capabilities are essential for emerging market healthcare platforms",
        "Collaboration with local healthcare professionals is key to building trust and adoption",
      ],
    },
    technologies: ["NextJS", "Typescript"],
    externalLink: "https://thediabetescarenetwork.com/",
    githubLink: "",
    imageLink: "/images/tdcn.webp",
    year: "2023",
    category: "Healthcare",
  },
  {
    slug: "sedot-pharmacy",
    title: "Sedot Pharmacy",
    subtitle: "Pharmaceutical Care Platform",
    description:
      "Sedot Pharmacy provides personalized care services through the integration of pharmaceutical care, point-of-care testing, and medication therapy management.",
    overview: {
      problem:
        "Traditional pharmacies in Nigeria lack integrated systems for personalized care, point-of-care testing, and comprehensive medication therapy management, limiting patient outcomes.",
      solution:
        "A modern digital platform that transforms pharmacy services by integrating traditional dispensing with personalized care, testing services, and digital health management tools.",
      target:
        "Pharmacy customers, healthcare providers, and patients seeking comprehensive pharmaceutical care and medication therapy management services.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Developed complete frontend using Next.js and TypeScript",
        "Designed intuitive interfaces for medication management systems",
        "Implemented secure patient health profile management",
        "Created appointment booking system for point-of-care testing",
        "Ensured compliance with pharmaceutical regulations and privacy standards",
      ],
      duration: "2.5 months (2023)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript"],
      tools: ["Git", "Vercel", "Stripe", "EmailJS"],
      reasoning:
        "Next.js was ideal for the pharmaceutical industry's need for fast, SEO-optimized pages that build trust. TypeScript provided the reliability essential for medication management systems. The stack was chosen for its security features and compliance capabilities required in pharmaceutical services.",
    },
    features: [
      "Comprehensive online pharmacy service catalog with search and filtering",
      "Integrated medication therapy management system with reminder features",
      "Point-of-care testing appointment booking and result tracking",
      "Personalized care service recommendations based on health profiles",
      "Customer health profile management with secure data handling",
      "Digital prescription management and refill tracking system",
    ],
    challenges: [
      {
        challenge:
          "Integrating complex pharmaceutical regulations into user-friendly interfaces",
        solution:
          "Created guided workflows that naturally incorporate regulatory requirements while maintaining simplicity, using progressive disclosure to present complex information when needed.",
      },
      {
        challenge:
          "Building trust for online pharmaceutical services in a traditional market",
        solution:
          "Implemented transparent pricing, clear licensing displays, pharmacist profiles, and integrated customer testimonials to build credibility and trust.",
      },
    ],
    impact: {
      metrics: [
        "250% increase in customer engagement",
        "40% reduction in medication adherence issues",
        "Successfully serving 500+ regular customers",
      ],
      results: [
        "Streamlined pharmacy operations reducing customer wait times by 60%",
        "Improved medication adherence tracking and patient outcomes",
        "Expanded customer base through enhanced digital presence",
        "Set new standards for pharmaceutical care in the region",
      ],
      lessons: [
        "User trust is paramount in pharmaceutical applications",
        "Simplifying complex regulatory requirements improves user adoption",
        "Digital transformation in traditional industries requires careful change management",
      ],
    },
    technologies: ["NextJS", "Typescript"],
    externalLink: "https://sedotpharmacy.com.ng/",
    githubLink: "",
    imageLink: "/images/sedot.webp",
    year: "2023",
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
        "Complex blockchain and AI concepts needed to be communicated effectively to a broad audience through a visually compelling and technically sophisticated landing page.",
      solution:
        "A pixel-perfect, high-performance landing page that showcases NFT and AI capabilities while maintaining accessibility and engaging user experience through modern web technologies.",
      target:
        "Crypto enthusiasts, NFT collectors, AI developers, and potential investors interested in the intersection of blockchain and artificial intelligence technologies.",
    },
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Implemented pixel-perfect design from Figma specifications",
        "Built responsive components using Next.js and TypeScript",
        "Integrated ShadcnUI component library for consistent design system",
        "Optimized performance for web3 audience expectations",
        "Created interactive elements showcasing AI and blockchain capabilities",
      ],
      duration: "1.5 months (2023)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "ShadcnUI"],
      tools: ["Git", "Vercel", "Figma"],
      reasoning:
        "Next.js provided the performance and SEO benefits crucial for landing pages. ShadcnUI offered a modern component system perfect for web3 aesthetics. TailwindCSS enabled rapid implementation of complex designs while TypeScript ensured code reliability for a high-stakes project.",
    },
    features: [
      "Pixel-perfect responsive design matching exact specifications",
      "Advanced animations and micro-interactions enhancing user engagement",
      "Modern component architecture using ShadcnUI design system",
      "Performance optimized for fast loading and smooth interactions",
      "Interactive elements demonstrating AI capabilities",
      "Accessibility-compliant implementation meeting WCAG standards",
    ],
    challenges: [
      {
        challenge:
          "Achieving pixel-perfect accuracy while maintaining responsive behavior",
        solution:
          "Used CSS Grid and Flexbox strategically with precise breakpoint management and careful attention to typography scaling and spacing across all devices.",
      },
      {
        challenge: "Balancing complex animations with performance requirements",
        solution:
          "Implemented efficient animation techniques using CSS transforms and will-change properties, while lazy-loading non-critical animations to maintain 95+ Lighthouse scores.",
      },
    ],
    impact: {
      metrics: [
        "99% design fidelity to original specifications",
        "95+ Lighthouse performance score achieved",
        "100% accessibility compliance (WCAG 2.1 AA)",
      ],
      results: [
        "Successfully showcased modern frontend development capabilities",
        "Created reusable component library for future web3 projects",
        "Demonstrated expertise in complex design implementation",
        "Established template for high-performance landing pages",
      ],
      lessons: [
        "Pixel-perfect implementation requires systematic attention to detail",
        "Performance optimization is crucial for user retention on landing pages",
        "Modern component libraries can accelerate development without sacrificing quality",
      ],
    },
    technologies: ["NextJS", "TailwindCSS", "ShadcnUI", "Typescript"],
    externalLink: "https://creon-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/creon",
    imageLink: "/images/creon.webp",
    year: "2023",
    category: "Web3/Blockchain",
  },
  {
    slug: "task-app",
    title: "Task Manager App",
    subtitle: "Interactive To‑Do List Application",
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
      title: "Frontend Developer",
      responsibilities: [
        "Built task creation, listing, and deletion workflows",
        "Ensured responsive and performant UI interactions",
        "Implemented state management for real‑time task updates",
        "Deployed the application with seamless CI/CD on Vercel",
      ],
      duration: "2 weeks (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS"],
      tools: ["Git", "Vercel"],
      reasoning:
        "Next.js offers fast loading and easy SSR; TypeScript adds developer safety; TailwindCSS allows for clean, rapid styling consistent across devices.",
    },
    features: [
      "Add new tasks with instant UI feedback",
      "View current task count and active task list",
      "Delete tasks with intuitive controls",
      "Minimal animation for UI responsiveness",
      "Fully responsive for mobile and desktop",
    ],
    challenges: [
      {
        challenge:
          "Handling real‑time updates to task list while keeping state consistent",
        solution:
          "Used React state hooks with immutability to ensure responsive UI without performance overhead.",
      },
    ],
    impact: {
      results: [
        "Delivered a lightweight task app in a short timeframe",
        "Improved UI familiarity with task CRUD operations",
        "Added a quick‑to‑load, user‑friendly tool to the portfolio",
      ],
      lessons: [
        "Simplicity drives usability in productivity tools",
        "Efficient state updates improve perceived responsiveness",
        "Fast deployment cycles enable quick iteration",
      ],
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    externalLink: "https://task-app-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/task-app",
    imageLink: "/images/task-app.webp",
    year: "2024",
    category: "Productivity",
  },
  {
    slug: "next-ts-ecommerce",
    title: "Next.js E-Commerce",
    subtitle: "Modern Fullstack E-Commerce Application",
    description:
      "A full-featured e-commerce web application built using Next.js, TailwindCSS, and Sanity CMS with Stripe integration.",
    overview: {
      problem:
        "Traditional e-commerce platforms often have bloated backends and lack performance and modern design.",
      solution:
        "A performant, cleanly designed fullstack e-commerce platform built with headless CMS, responsive design, and secure payments.",
      target:
        "Small-to-medium online retailers and developers seeking modern e-commerce solutions.",
    },
    role: {
      title: "Full-stack Developer",
      responsibilities: [
        "Built dynamic product listing and filtering system",
        "Integrated Stripe for secure payments and checkout",
        "Implemented Sanity CMS for easy product/content management",
        "Optimized pages for fast performance and SEO",
        "Created order confirmation and cart management logic",
      ],
      duration: "1 month (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS"],
      backend: ["Sanity CMS"],
      tools: ["Stripe", "Git", "Vercel"],
      reasoning:
        "Next.js offers SSR for SEO; Sanity provides flexible CMS capabilities; Stripe ensures secure and scalable payments.",
    },
    features: [
      "Responsive grid-based product layout",
      "Product filtering and category browsing",
      "Shopping cart with quantity adjustments",
      "Secure Stripe checkout integration",
      "Sanity CMS for managing products and content",
      "Order confirmation and routing",
    ],
    challenges: [
      {
        challenge: "Building a seamless Stripe integration with Sanity backend",
        solution:
          "Used Stripe SDK and sanity webhooks to keep payment flow and product data consistent",
      },
    ],
    impact: {
      results: [
        "Demonstrated scalable fullstack e-commerce architecture",
        "Deployed high-performance e-commerce template using modern tech",
        "Created a fully reusable starter for future online stores",
      ],
      lessons: [
        "Dynamic routing in e-commerce needs careful URL structure design",
        "CMS integration adds non-technical flexibility",
        "Optimized image and layout loading improves user experience",
      ],
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Sanity", "Stripe"],
    externalLink: "https://next-ts-ecommerce.vercel.app/",
    githubLink: "https://github.com/andemosa/next-ts-ecommerce",
    imageLink: "/images/ecommerce.webp",
    year: "2024",
    category: "E-commerce",
  },
  {
    slug: "moviebox",
    title: "MovieBox",
    subtitle: "Movie Streaming App",
    description:
      "MovieBox is a responsive movie streaming interface that fetches live data using TMDB API and showcases search, filtering, and movie detail views.",
    overview: {
      problem:
        "Movie data and streaming previews are often locked behind paywalls or clunky interfaces.",
      solution:
        "A user-friendly, clean interface for browsing movies, trailers, and details using TMDB’s public API.",
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
      duration: "1 week (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS"],
      tools: ["TMDB API", "Git", "Vercel"],
      reasoning:
        "Next.js enabled dynamic page generation from API; TailwindCSS gave precise control over responsive layouts.",
    },
    features: [
      "Live movie data via TMDB API",
      "Movie poster gallery with hover previews",
      "Search functionality and filter by genre",
      "Responsive layout for all devices",
      "Trailer modals and ratings display",
    ],
    impact: {
      results: [
        "Built and deployed a fully functional movie listing site in under a week",
        "Practiced working with third-party REST APIs and dynamic routes",
        "Improved understanding of real-world API rate limits and caching",
      ],
      lessons: [
        "API integration requires fallback/error handling",
        "Lazy loading images greatly improves UX on content-heavy sites",
      ],
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "TMDB API"],
    externalLink: "https://moviebox-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/moviebox",
    imageLink: "/images/moviebox.webp",
    year: "2024",
    category: "Media",
  },
  {
    slug: "clearlink",
    title: "ClearLink",
    subtitle: "AI-powered Meeting Assistant Landing Page",
    description:
      "ClearLink is a marketing site for an AI-based meeting assistant. Built with pixel-perfect Figma implementation, interactive animations, and accessibility in mind.",
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
        "Ensured WCAG accessibility compliance",
        "Deployed via Vercel with performant build",
      ],
      duration: "2 weeks (2024)",
    },
    stack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS"],
      tools: ["Framer Motion", "Vercel", "Git", "Figma"],
      reasoning:
        "Built for fast load times and user-friendly animation without sacrificing structure or accessibility.",
    },
    features: [
      "Pixel-perfect layout from Figma",
      "Animated section reveals and buttons",
      "Responsive layout and optimized images",
      "Use cases, testimonials, and CTA sections",
      "Accessible semantic HTML and aria labels",
    ],
    impact: {
      results: [
        "Demonstrated frontend design-to-code skills with precision",
        "Created reusable components for future marketing pages",
      ],
      lessons: [
        "Accessible design improves usability across users",
        "Consistent spacing and layout scales better for teams",
      ],
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    externalLink: "https://clearlink-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/clearlink",
    imageLink: "/images/clearlink.webp",
    year: "2024",
    category: "Landing Page",
  },
  {
    slug: "countries",
    title: "REST Countries Explorer",
    subtitle: "Frontend Mentor Challenge",
    description:
      "A country information explorer app using REST Countries API. Built as a responsive, theme-switchable solution for frontend practice.",
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
    impact: {
      results: [
        "Completed advanced challenge from Frontend Mentor",
        "Learned how to handle external API limits and errors",
      ],
      lessons: [
        "Dark/light mode adds real usability value",
        "Managing async data is key to responsive UI",
      ],
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    externalLink: "https://countries-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/countries",
    imageLink: "/images/countries.webp",
    year: "2024",
    category: "Frontend Practice",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map((project) => project.slug);
};
