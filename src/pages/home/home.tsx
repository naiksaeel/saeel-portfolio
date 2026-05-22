import Header from "@/components/header";
import Hero from "@/components/hero";
import SkillsOverview from "@/components/skillsOverview";
import Projects from "@/components/projects";
import ContactAndInfoSection from "@/components/contactAndInfo";
import { projectsConfig } from "@/data/projects";
import {
  ContactWrapper,
  HeaderWrapper,
  HeroWrapper,
  SkillsWrapper,
  ProjectsWrapper,
} from "@/components/ui/home";

const HomePage = () => (
  <>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
    <SkillsWrapper>
      <SkillsOverview />
    </SkillsWrapper>
    {projectsConfig.showProjectsSection && (
      <ProjectsWrapper>
        <Projects />
      </ProjectsWrapper>
    )}
    <ContactWrapper>
      <ContactAndInfoSection />
    </ContactWrapper>
  </>
);

export default HomePage;
