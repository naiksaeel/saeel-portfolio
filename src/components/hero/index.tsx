// data
import { profileData } from "@/data/myInfo";

import LeftSection from "@/components/hero/leftSection";
import RightSection from "@/components/hero/rightSection";
import SectionContainer from "@/components/ui/sectionContainer";

const Hero = () => {
  const { bioData, designation, location, socials } = profileData;

  return (
    <SectionContainer>
      <section id="home" className="relative text-white font-sans overflow-hidden pt-24 pb-12">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none -z-10" />

        <div className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 min-h-96">
          {/* Left: Name & Socials */}
          <LeftSection socials={socials} />

          {/* Right: Introduction */}
          <RightSection
            designation={designation}
            location={location}
            bioData={bioData}
          />
        </div>
      </section>
    </SectionContainer>
  );
};

export default Hero;
