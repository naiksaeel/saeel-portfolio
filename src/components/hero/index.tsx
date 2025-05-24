// data
import { profileData } from "@/data/myInfo";

import LeftSection from "@/components/hero/leftSection";
import RightSection from "@/components/hero/rightSection";

const Hero = () => {
  const { bioData, designation, location, socials } = profileData;

  return (
    <section className="relative bg-primary text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 min-h-96">
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
  );
};

export default Hero;
