import Header from "@/components/header";
import Hero from "@/components/hero";
import SkillsOverview from "@/components/skillsOverview";
import ContactAndInfoSection from "@/components/contactAndInfo";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ContactAndInfoSection />
      <SkillsOverview />
    </>
  );
};

export default HomePage;
