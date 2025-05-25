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
  location: "Goa,India",
  bioData:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla provident obcaecati ullam deleniti reprehenderit amet delectus aspernatur accusantium? Voluptas nisi quidem laboriosam perferendis vero atque facilis, qui in minima nam",
  emailId: "saeelnaik51@gmail.com",
  yearsOfExp: 3,
  technologies: 4,
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
    "I'm passionate about front-end technologies and always open to exchanging knowledge, insights, or just having a good discussion about the evolving dev landscape",
};

export const extras = {
  quote:
    "Technology evolves fast, but what stays timeless is the ability to think creatively, adapt quickly, and build with both purpose and passion.",
  quoteSummary:
    "While tools and trends change rapidly, it's the enduring mindset of creativity, adaptability, and purposeful building that defines impactful developers.",
};
