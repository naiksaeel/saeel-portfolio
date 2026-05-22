// components
import SocialIconLink from "@/components/ui/SocialIconLink";

// animations
import { FadeLeft, FadeUpRight } from "@/animations";

// types
import type { IconBaseProps } from "react-icons";
import { ProfileDataType, SocialPlatformType } from "@/types/profile";

// data
import { iconMap, profileData } from "@/data/myInfo";
import { projectsConfig } from "@/data/projects";

// Images
import { HeroImage } from "@/data/images";

export type LeftSectionProps = Pick<ProfileDataType, "socials">;

const LeftSection = ({ socials }: LeftSectionProps) => {
  const { name } = profileData;

  return (
    <div className="md:w-1/2 space-y-10 relative z-10">
      {/* Image */}
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-[300px] h-[400px] md:block hidden -z-50">
        <FadeUpRight duration="1200" easing="ease-out-cubic">
          <img
            src={HeroImage}
            alt={name}
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
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight z-10 bg-gradient-to-r from-white via-slate-100 to-secondary bg-clip-text text-transparent">
          {name}
        </h1>
      </FadeLeft>

      {/* Call to Actions */}
      <FadeLeft delay="200" duration="500" easing="ease-in-out" className="flex flex-wrap gap-4 pt-2">
        <a
          href={projectsConfig.showProjectsSection ? "#projects" : "#skills"}
          onClick={(e) => {
            e.preventDefault();
            const targetId = projectsConfig.showProjectsSection ? "projects" : "skills";
            const element = document.getElementById(targetId);
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth"
              });
            }
          }}
          className="px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-yellow-400 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          View Work
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("contact");
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth"
              });
            }
          }}
          className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 font-semibold rounded-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          Let's Talk
        </a>
      </FadeLeft>
    </div>
  );
};

export default LeftSection;
