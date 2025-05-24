import { ProfileDataType } from "@/types/profile";

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
      <div className="relative z-10 text-right md:text-left">
        <p className="text-lg tracking-widest text-gray-400 my-1">
          — Introduction
        </p>
        <h2 className="text-2xl font-bold text-white max-w-md">
          {designation}, based in {location}.
        </h2>
        <p className="text-gray-400 text-sm max-w-md mt-2">{bioData}</p>
      </div>
    </div>
  );
};
export default RightSection;
