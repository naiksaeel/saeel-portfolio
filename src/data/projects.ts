import { IconType } from "react-icons";
import { FaReact, FaVuejs, FaMobileAlt, FaGlobe } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  fromColor: string;
  toColor: string;
  icons: IconType[];
  category: "frontend" | "mobile" | "fullstack";
};

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "TaskFlow Dashboard",
    description:
      "A high-performance team management dashboard featuring real-time updates, interactive Kanban boards, and detailed analytics charts.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Recharts",
    ],
    githubUrl: "https://github.com/naiksaeel/taskflow",
    demoUrl: "https://taskflow-demo.vercel.app",
    fromColor: "#2A3C5B",
    toColor: "#3B527E",
    icons: [FaReact, SiTypescript, SiRedux, SiTailwindcss],
    category: "frontend",
  },
  {
    id: 2,
    title: "EcoRoute Mobile App",
    description:
      "A cross-platform mobile application developed with React Native and Expo, offering eco-friendly navigation routes with real-time carbon tracking.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Leaflet Maps",
      "Node.js",
    ],
    githubUrl: "https://github.com/naiksaeel/ecoroute",
    fromColor: "#1B4738",
    toColor: "#2A6E57",
    icons: [FaReact, FaMobileAlt, SiTypescript],
    category: "mobile",
  },
  {
    id: 3,
    title: "ShopVibe E-Commerce",
    description:
      "A premium full-stack e-commerce experience using Next.js with glassmorphism UI, secure Stripe payments, and a serverless backend API.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
    githubUrl: "https://github.com/naiksaeel/shopvibe",
    demoUrl: "https://shopvibe.vercel.app",
    fromColor: "#4E2B54",
    toColor: "#6C3C75",
    icons: [SiNextdotjs, FaReact, SiTailwindcss, FaGlobe],
    category: "fullstack",
  },
  {
    id: 4,
    title: "DevPulse Portfolio",
    description:
      "A dynamic, customizable developer portfolio template built with Vue.js, featuring an interactive theme switching panel and clean scroll animations.",
    techStack: ["Vue.js", "Vite", "Tailwind CSS", "AOS Library", "JavaScript"],
    githubUrl: "https://github.com/naiksaeel/devpulse",
    demoUrl: "https://devpulse.vercel.app",
    fromColor: "#2C4E3F",
    toColor: "#3F705B",
    icons: [FaVuejs, SiTailwindcss, FaGlobe],
    category: "frontend",
  },
];

export const projectsConfig = {
  showProjectsSection: false,
  subheading: "— Portfolio",
  heading: "Featured Projects",
  description:
    "A selection of digital products, mobile applications, and frontend systems that I have built.",
};
