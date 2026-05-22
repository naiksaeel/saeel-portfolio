import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData, projectsConfig } from "@/data/projects";
import { FadeUp } from "@/animations";
import SectionContainer from "@/components/ui/sectionContainer";
import clsx from "clsx";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "mobile" | "fullstack">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const categories: { label: string; value: typeof filter }[] = [
    { label: "All Work", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "Full-Stack", value: "fullstack" },
  ];

  return (
    <SectionContainer>
      <section id="projects" className="text-white font-sans px-8 md:px-12 py-20 min-h-96">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <FadeUp>
            <p className="text-lg tracking-widest text-gray-400 my-1">{projectsConfig.subheading}</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-4xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {projectsConfig.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-gray-400 max-w-xl mt-4 text-sm md:text-base">
              {projectsConfig.description}
            </p>
          </FadeUp>
        </div>

        {/* Filter Controls */}
        <FadeUp delay={250} className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border border-white/5",
                filter === category.value
                  ? "bg-secondary text-primary shadow-lg shadow-secondary/20 scale-105"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {category.label}
            </button>
          ))}
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <FadeUp
              key={project.id}
              delay={idx * 100}
              className="h-full"
            >
              <div
                className="group relative flex flex-col justify-between p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl text-white border border-white/5 h-full overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.fromColor}, ${project.toColor})`,
                }}
              >
                {/* Visual glow overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Title & Technology Icons */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      {project.icons.map((Icon, iconIdx) => (
                        <Icon key={iconIdx} size={18} />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-white/10 text-xs text-white/90 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex gap-4 items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                        title="View Source Code"
                      >
                        <FaGithub size={16} />
                        <span>Source</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
};

export default Projects;
