// data
import { profileData } from "@/data/myInfo";

import LeftSection from "@/components/hero/leftSection";
import RightSection from "@/components/hero/rightSection";
import SectionContainer from "@/components/ui/sectionContainer";

const Hero = () => {
  const { bioData, designation, location, socials } = profileData;

  return (
    <SectionContainer>
      <section className="relative  text-white font-sans overflow-hidden">
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
