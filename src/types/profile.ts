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
  socials: SocialLinkType[];
};
