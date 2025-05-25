export type SocialPlatformType =
  | "linkedin"
  | "instagram"
  | "twitter"
  | "github";

export type SocialLinkType = {
  id: number;
  platform: SocialPlatformType;
  url: string;
};

export type ProfileDataType = {
  designation: string;
  location: string;
  bioData: string;
  emailId: string;
  yearsOfExp: number;
  technologies: number;
  socials: SocialLinkType[];
};
