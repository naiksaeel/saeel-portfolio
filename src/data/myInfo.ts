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
