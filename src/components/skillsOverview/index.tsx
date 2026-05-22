// components
import Card from "@/components/card";
import SectionContainer from "@/components/ui/sectionContainer";

// animations
import { FadeUp } from "@/animations";

// data
import { cardData } from "@/data/cards";

const ProjectCards = () => {
  return (
    <SectionContainer>
      <section id="skills" className="text-white font-sans py-20">
        <div className="px-8 md:px-12 min-h-[24rem] max-w-screen-sm md:max-w-full mx-auto">
          {/* Section Header */}
          <div className="text-center md:text-left mb-12">
            <FadeUp>
              <p className="text-lg tracking-widest text-gray-400 my-1">— Skills</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-4xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Areas of Expertise
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {cardData.map((card, idx) => (
              <div key={idx} className="max-w-xl mx-auto w-full h-full">
                <FadeUp className="h-full">
                  <Card {...card} className="h-full" dataAOS="fade-up" />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default ProjectCards;
