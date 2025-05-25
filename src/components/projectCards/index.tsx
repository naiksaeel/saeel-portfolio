import { cards } from "@/data/cards";

const ProjectCards = () => {
  return (
    // <section className="grid md:grid-cols-3 gap-6 px-8 md:px-16 py-16">
    //   {cards.map(({ title, projects, highlighted }, index) => (
    //     <div
    //       key={index}
    //       className={`p-6 rounded-2xl shadow-lg space-y-2 ${
    //         highlighted ? "bg-secondary text-black" : "bg-white text-black"
    //       }`}
    //     >
    //       <h4 className="text-xl font-bold">{title}</h4>
    //       <p className="text-sm">{projects}</p>
    //     </div>
    //   ))}
    // </section>
    <section className="bg-[#0E101A] py-10 px-6 font-[Poppins,sans-serif]">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Front-End */}
        <div className="bg-[#FFC12D] text-[#0E101A] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Front-End Developer.</h3>
          <p className="font-medium">
            React, React Native,
            <br />
            TypeScript, Vue
          </p>
        </div>

        {/* Back-End */}
        <div className="bg-[#191B28] text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Back-End Developer.</h3>
        </div>

        {/* Mobile */}
        <div className="bg-[#191B28] text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Mobile Developer.</h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
