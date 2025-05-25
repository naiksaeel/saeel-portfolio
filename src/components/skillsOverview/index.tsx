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
      <section className="text-white font-sans">
        <div className="px-8 md:px-12 py-16  min-h-[24rem] max-w-screen-sm md:max-w-full mx-auto">
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
