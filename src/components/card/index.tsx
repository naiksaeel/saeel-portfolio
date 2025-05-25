// libraries
import clsx from "clsx";

// types
import { CardProps } from "@/types/card";

const Card = ({
  title,
  description,
  techStack,
  fromColor,
  toColor,
  icons,
  skillLevels,
  className,
}: CardProps) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col p-8 pb-16 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl text-white",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
      }}
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-white/10 text-sm text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Skill Levels */}
      {skillLevels && (
        <div className="mt-6 space-y-3">
          {skillLevels.map(({ skill, level }, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>{skill}</span>
                <span>{level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Absolute-positioned icons */}
      {icons && (
        <div className="absolute bottom-6 right-6 flex space-x-3 text-white/50">
          {icons.map((IconComponent, idx) => (
            <IconComponent key={idx} size={20} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
