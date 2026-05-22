import { useState, useEffect, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavOption from "@/components/ui/NavOption";
import SectionContainer from "@/components/ui/sectionContainer";
import { projectsConfig } from "@/data/projects";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Skills", id: "skills" },
      ...(projectsConfig.showProjectsSection
        ? [{ label: "Projects", id: "projects" }]
        : []),
      { label: "Contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // 1. Header background styling on scroll
      setIsScrolled(window.scrollY > 20);

      // 2. Active section detection using viewport-relative bounding rect
      const scrollPosition = window.scrollY;
      const isAtBottom =
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
      } else {
        const threshold = 120; // sticky header height (80px) + offset offset for active section check
        for (const item of navItems) {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Element is active if its top edge is at or above the threshold
            // and its bottom edge is below the threshold
            if (rect.top <= threshold && rect.bottom > threshold) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-primary/80 backdrop-blur-md py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      )}
    >
      <SectionContainer>
        <div className="flex justify-between items-center px-8 text-white relative">
          {/* Logo / Branding */}
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
          >
            <span className="text-base font-black tracking-wide text-white group-hover:text-secondary transition-colors duration-300">
              SN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavOption
                key={item.id}
                label={item.label}
                isActive={activeSection === item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollToSection(e, item.id)}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={clsx(
            "fixed inset-x-0 top-[60px] bg-primary/95 border-b border-white/5 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out transform origin-top z-40",
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col px-8 py-6 space-y-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollToSection(e, item.id)}
                className={clsx(
                  "text-lg font-bold transition-colors py-2 border-b border-white/5",
                  activeSection === item.id
                    ? "text-secondary"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </SectionContainer>
    </header>
  );
};

export default Header;
