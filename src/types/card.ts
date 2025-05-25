// types
import { IconType } from "react-icons";
import { AOSAnimation } from "@/types/common";

export type Link = {
  label: string;
  url: string;
};

export type SkillLevel = {
  skill: string;
  level: number; // 0 to 100
};

export type CardType = {
  title: string;
  description: string;
  techStack: string[];
  fromColor: string;
  toColor: string;
  icons?: IconType[]; // plural icons array now
  experience?: string;
  links?: { label: string; url: string }[];
  skillLevels?: { skill: string; level: number }[];
};
export type CardProps = CardType & {
  className?: string;
  dataAOS?: AOSAnimation;
};
