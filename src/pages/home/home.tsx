import Header from "@/components/header";
import Hero from "@/components/hero";
import SkillsOverview from "@/components/skillsOverview";
import ContactAndInfoSection from "@/components/contactAndInfo";
import {
  ContactWrapper,
  HeaderWrapper,
  HeroWrapper,
  SkillsWrapper,
} from "@/components/ui/home";

const HomePage = () => (
  <>
    {/* <HeaderWrapper>
      <Header />
    </HeaderWrapper> */}
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
    <ContactWrapper>
      <ContactAndInfoSection />
    </ContactWrapper>
    <SkillsWrapper>
      <SkillsOverview />
    </SkillsWrapper>
  </>
);

export default HomePage;
