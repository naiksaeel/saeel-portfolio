// types
import { ProfileDataType } from "@/types/profile";

// animations
import { SlideLeft } from "@/animations";

type RightSectionProps = Pick<
  ProfileDataType,
  "designation" | "location" | "bioData"
>;

const RightSection = ({
  designation,
  location,
  bioData,
}: RightSectionProps) => {
  return (
    <div className="md:w-1/2 space-y-6 relative z-20">
      <div className="relative z-10  md:text-left">
        <SlideLeft>
          <p className="text-lg tracking-widest text-gray-400 my-1">
            — Introduction
          </p>
        </SlideLeft>
        <SlideLeft>
          <h2 className="text-2xl font-bold text-white max-w-md mb-6">
            {designation} · {location}
          </h2>
        </SlideLeft>
        {bioData.map((para, idx) => (
          <SlideLeft
            delay={idx * 200}
            key={idx}
            duration="600"
            easing="ease-in-out"
          >
            <p className="text-gray-400 text-sm max-w-md mt-2">{para}</p>
          </SlideLeft>
        ))}
      </div>
    </div>
  );
};
export default RightSection;
