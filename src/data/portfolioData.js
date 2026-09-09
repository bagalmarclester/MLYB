export const personalInfo = {
  name: "Marc Lester Bagal",
  role: "Front-End Developer & AI Integration Builder",
  systemId: "M.Bagal",
  version: "v3.0_REACT",
  education: "B.S. in Computer Science @ University of Mindanao",
  location: "Davao City, Philippines",
  email: "bagalmarclester@gmail.com",
  github: "https://github.com/bagalmarclester",
  linkedin: "https://www.linkedin.com/in/bagalmarclester",
  resumePath: "Marc_Lester_Bagal_Resume.pdf?v=2",
  avatarPath: "/images/ProperPicture.jpg",
  headline: "Hi! I am Marc Lester.",
  shortBio:
    "Hi, I’m Marc Lester Y. Bagal. A Computer Science student at the University of Mindanao interested in machine learning and focused on building practical, user-friendly front-end interfaces.",
  fullBio:
    "I'm Marc, a Computer Science student with a strong foundation in machine learning and a growing passion for modern front-end design. While my early work focused heavily on data logic and algorithms, I discovered that building the visual, interactive layer of software is where I do my best work.\n\nDuring my internship as a front-end designer last summer, I gained hands-on experience turning wireframes and complex concepts into intuitive user interfaces. Today, I combine my analytical background with modern design principles to build fast, responsive, and accessible web experiences that look sharp and scale reliably.",
};

export const typingPhrases = [
  "Front-End Developer",
  "AI Integration Builder",
  "Computer Science @ UM",
  "Creative Systems Engineer",
];

export const metrics = [
  {
    value: "2027",
    label: "Graduation Year",
    detail: "B.S. in Computer Science @ University of Mindanao",
  },
  {
    value: "6+",
    label: "Deployments",
    detail: "Web applications, cross-platform mobile apps & predictive AI systems",
  },
  {
    value: "Active",
    label: "Opportunities",
    detail: "Available for remote, hybrid, and local engineering roles",
  },
];

export const capabilities = [
  {
    title: "Frontend Ownership",
    description:
      "Building component-driven web interfaces in Next.js/React and cross-platform mobile apps in React Native (Expo) with modular hooks, state managers, and semantic accessibility.",
  },
  {
    title: "Practical AI Integration",
    description:
      "Orchestrating Google Gemma 4 LLM, NLP workflows, and predictive models using Scikit-Learn and Python for real-world user applications.",
  },
  {
    title: "Production-Minded",
    description:
      "Contributing clean MVC views, database integrations, and team-based Git workflows across client platforms and academic research tools.",
  },
];

export const skillDomains = [
  {
    id: "languages",
    title: "Languages",
    icon: "keyboard",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "desktop_windows",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "React Native", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Figma UI", level: 70 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "settings",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "RESTful APIs", level: 80 },
      { name: "Laravel Blade", level: 70 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    id: "ml_data",
    title: "ML / Data",
    icon: "memory",
    skills: [
      { name: "Scikit-Learn", level: 70 },
      { name: "Pandas & NumPy", level: 75 },
      { name: "NLP Pipelines", level: 70 },
      { name: "Google Gemma 4 LLM", level: 65 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "build",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Vite Tooling", level: 80 },
      { name: "Expo CLI", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: "weatherwise",
    index: "01",
    type: "MOBILE_APP",
    badge: "CROSS_PLATFORM",
    title: "WeatherWise - Mobile Weather App",
    org: "Personal Project",
    orgIcon: "person",
    description:
      "Cross-platform mobile weather app built with React Native and Expo, featuring a modular architecture (hooks, context, services) and live weather API integration.",
    tags: ["React Native", "Expo", "TypeScript", "Node.js"],
    category: "web",
    image: "/images/weatherwise.png?v=2",
    link: "https://github.com/bagalmarclester/WeatherWise",
    linkLabel: "View Source",
    linkIcon: "code",
  },
  {
    id: "gemma-ai-tutor",
    index: "02",
    type: "INTELLIGENT_SYSTEM",
    badge: "FLAGSHIP",
    isFlagship: true,
    title: "Gemma-4 AI Tutor App",
    org: "Personal Project",
    orgIcon: "person",
    description:
      "An intelligent interactive tutoring platform powered by Gemma 4 LLM for personalized curricula, query responses, and contextual adaptive learning.",
    tags: ["Python", "Gemma 4 LLM", "NLP", "Prompt Eng"],
    category: "ai",
    link: "https://github.com/bagalmarclester/Gemma-4-AI-tutor-app",
    linkLabel: "View Source",
    linkIcon: "code",
  },
  {
    id: "operations-management",
    index: "03",
    type: "ENTERPRISE_OPS",
    badge: "TANAMAN DABAW",
    title: "Operations Management System",
    org: "Company: Tanaman Dabaw",
    orgIcon: "apartment",
    description:
      "Contributed front-end views and UI components in a Laravel Blade MVC architecture for Tanaman Dabaw, managing enterprise workflows, business operations, and catalog tracking.",
    tags: ["Laravel Blade", "PHP", "MySQL", "HTML5 / CSS"],
    category: "systems",
    extraCategory: "web",
    image: "/images/operations-management.png",
    link: "https://github.com/bagalmarclester/TanamanDabawOperationsManagementSystem",
    linkLabel: "View Source",
    linkIcon: "code",
  },
  {
    id: "numerical-analysis",
    index: "04",
    type: "SCIENTIFIC_COMPUTING",
    badge: "MATH_ALGO",
    title: "Numerical Analysis",
    org: "Academic Project",
    orgIcon: "school",
    description:
      "A Python computational mathematics toolkit implementing numerical analysis algorithms, root finding, matrix transformations, and error evaluation.",
    tags: ["Python", "NumPy", "Algorithms", "Computation"],
    category: "systems",
    extraCategory: "ai",
    link: "https://github.com/bagalmarclester/NumericalAnalysis",
    linkLabel: "View Source",
    linkIcon: "code",
  },
  {
    id: "event-registration",
    index: "05",
    type: "CLIENT_PLATFORM",
    badge: "RYPACI I.T SOLUTIONS",
    title: "Event Registration & Management System",
    org: "Company: Rypaci I.T Solutions",
    orgIcon: "apartment",
    description:
      "Served as front-end developer on a team-built event platform using Next.js. Engineered responsive event browsing, registration interfaces, and REST API integrations.",
    tags: ["Next.js", "React", "JavaScript", "REST APIs", "Team Collab"],
    category: "web",
    image: "/images/event-registration.png",
    link: "https://register.rypaci.com/",
    linkLabel: "View Live",
    linkIcon: "groups",
  },
  {
    id: "wine-and-student-prediction",
    index: "06",
    type: "PREDICTIVE_ML",
    badge: "DATA_SCIENCE",
    title: "Wine Quality & Student Outcome Prediction",
    org: "Academic Project",
    orgIcon: "school",
    description:
      "Supervised machine learning models predicting wine quality grades and student academic outcomes using classification algorithms, data preprocessing, and model evaluation.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Classification"],
    category: "ai",
    link: "https://github.com/bagalmarclester/StudentOutcomePrediction",
    linkLabel: "View Source",
    linkIcon: "code",
  },
  {
    id: "bus-management",
    index: "07",
    type: "ENTERPRISE_OPS",
    badge: "TRANSPORT",
    title: "Bus Management System",
    org: "Academic Project",
    orgIcon: "directions_bus",
    description:
      "A comprehensive bus scheduling and management platform built to streamline fleet operations, routing, and passenger tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "systems",
    extraCategory: "web",
    image: "/images/bus-management.png",
    link: "https://github.com/bagalmarclester",
    linkLabel: "View Source",
    linkIcon: "code",
  },
];
