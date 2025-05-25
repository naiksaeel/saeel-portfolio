// components
import SocialIconLink from "@/components/ui/SocialIconLink";

// animations
import { FadeLeft, FadeUpRight } from "@/components/animation";

// types
import type { IconBaseProps } from "react-icons";
import { ProfileDataType, SocialPlatformType } from "@/types/profile";

// data
import { iconMap } from "@/data/myInfo";

// Images
import { HeroImage } from "@/data/images";

export type LeftSectionProps = Pick<ProfileDataType, "socials">;

const LeftSection = ({ socials }: LeftSectionProps) => {
  return (
    <div className="md:w-1/2 space-y-10 relative z-10">
      {/* Image */}
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-[300px] h-[400px] md:block hidden -z-50">
        <FadeUpRight duration="1200" easing="ease-out-cubic">
          <img
            src={HeroImage}
            alt="Saeel Naik"
            className="w-full h-full object-cover rounded-xl bg-primary"
          />
        </FadeUpRight>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 text-xl text-white pt-6">
        {socials.map(({ id, platform, url }, index) => {
          const key = platform.toLowerCase() as SocialPlatformType;
          const Icon = iconMap[key] as React.ComponentType<IconBaseProps>;
          if (!Icon) return null;

          return (
            <FadeLeft
              delay={index * 100}
              duration="600"
              easing="ease-in-out"
              key={id}
            >
              <SocialIconLink key={id} url={url} icon={<Icon size={20} />} />
            </FadeLeft>
          );
        })}
      </div>

      {/* Name */}
      <FadeLeft delay="100" duration="400" easing="ease-in-out">
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight z-10">
          Saeel Naik
        </h1>
      </FadeLeft>
    </div>
  );
};

export default LeftSection;
