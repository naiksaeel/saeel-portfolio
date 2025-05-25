import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ProfileDataType, SocialPlatformType } from "@/types/profile";

export const iconMap: Partial<Record<SocialPlatformType, React.ElementType>> = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  github: FaGithub,
};

export const profileData: ProfileDataType = {
  designation: "Software Developer",
  location: "Goa, India",
  bioData: [
    "I’m a passionate Software Developer skilled in React, Redux, TypeScript, Next.js, Vue.js, and a wide range of modern technologies. I focus on building scalable, high-performance web applications that deliver great user experiences and drive business success.",
    "Working in fast-paced, collaborative environments, I’m committed to writing clean, maintainable code and staying updated with industry trends. Known for strong problem-solving and teamwork skills, I contribute effectively to projects that meet both user needs and business goals.",
  ],
  emailId: "saeelnaik51@gmail.com",
  yearsOfExp: 3,
  // technologies: 4,
  socials: [
    {
      id: 1,
      platform: "linkedin",
      url: "https://www.linkedin.com/in/saeelnaik/",
    },

    {
      id: 2,
      platform: "github",
      url: "https://github.com/naiksaeel",
    },
  ],
};

export const contactSection = {
  heading: "Let’s Talk Code, Ideas, and Everything In Between",
  paragraph:
    "I’m passionate about software development and always open to exchanging knowledge, insights, or having great discussions about the evolving tech landscape.",
};

export const extras = {
  quote:
    "Technology evolves fast, but what stays timeless is the ability to think creatively, adapt quickly, and build with both purpose and passion.",
  quoteSummary:
    "While tools and trends change rapidly, it's the enduring mindset of creativity, adaptability, and purposeful building that defines impactful developers.",
};
