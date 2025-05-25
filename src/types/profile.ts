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

export type bioDataType = {
  para1: string;
  para2: string;
};
export type ProfileDataType = {
  name: string;
  designation: string;
  location: string;
  bioData: string[];
  emailId?: string;
  yearsOfExp: number;
  technologies?: number;
  socials: SocialLinkType[];
};
