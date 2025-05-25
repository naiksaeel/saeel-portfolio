// components
import Card from "@/components/card";

// data
import { cardData } from "@/data/cards";

const ProjectCards = () => {
  return (
    <div>
      <section className="bg-primary text-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 min-h-[24rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {cardData.map((card, idx) => (
              <div key={idx} className="max-w-xl mx-auto w-full h-full">
                <Card {...card} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCards;
