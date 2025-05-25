//data
import { profileData, extras } from "@/data/myInfo";

// animations
import { FadeUp } from "@/components/animation";

const InfoSection = () => {
  const { yearsOfExp, technologies } = profileData;
  const { quote, quoteSummary } = extras;

  return (
    <div>
      <FadeUp>
        <p className="text-xl font-semibold mb-6">{quote}</p>
      </FadeUp>
      <FadeUp>
        <p className="text-gray-400 text-sm max-w-md my-2">{quoteSummary}</p>
      </FadeUp>
      <div className="flex gap-12  my-6 ">
        {/* Years of Experience */}
        {yearsOfExp && (
          <FadeUp>
            <div className="flex items-center gap-2 ">
              <p className="text-3xl font-bold text-secondary">{yearsOfExp}+</p>
              <p className="text-gray-400 max-w-16 text-xs">
                Years of Experience
              </p>
            </div>
          </FadeUp>
        )}

        {/* Technologies */}
        {technologies && (
          <FadeUp>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-bold text-secondary">
                {technologies}
              </p>
              <p className="text-gray-400 max-w-16 text-xs mb-1">
                Technologies
              </p>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
