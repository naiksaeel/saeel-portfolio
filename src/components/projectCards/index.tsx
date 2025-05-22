import { cards } from "@/data/cards";

const ProjectCards = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-8 md:px-16 py-16">
      {cards.map(({ title, projects, highlighted }, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-lg space-y-2 ${
            highlighted ? "bg-secondary text-black" : "bg-white text-black"
          }`}
        >
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-sm">{projects}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectCards;
