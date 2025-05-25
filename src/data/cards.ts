// libraries
import {
  FaReact,
  FaVuejs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// types
import { CardType } from "@/types/card";

export const cardData: CardType[] = [
  {
    title: "Front-End Developer",
    description:
      "Building rich, responsive user interfaces with modern frameworks and component libraries.",
    techStack: [
      "React",
      "React Native",
      "TypeScript",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
    ],
    fromColor: "#3D4168",
    toColor: "#50547A",
    icons: [FaReact, SiNextdotjs, FaVuejs, SiTailwindcss],
    // skillLevels: [{ skill: "React", level: 88 }],
  },
  {
    title: "Mobile Developer",
    description:
      "Creating performant cross-platform mobile applications with modern development tools.",
    techStack: ["React Native", "Expo", "Android", "iOS", "UI/UX"],
    fromColor: "#53405E",
    toColor: "#6A5575",
    icons: [FaReact, FaMobileAlt],

    // skillLevels: [{ skill: "React Native", level: 88 }],
  },
];
