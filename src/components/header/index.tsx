import NavOption from "@/components/ui/NavOption";
import SectionContainer from "@/components/ui/sectionContainer";

const Header = () => {
  return (
    <SectionContainer>
      <header className=" flex justify-between items-center px-8 py-6 text-white ">
        <div className="min-w-1"></div>
        <nav className="space-x-6 text-sm uppercase tracking-wider">
          <NavOption label="About" />
          <NavOption label="Contact" />
        </nav>
      </header>
    </SectionContainer>
  );
};

export default Header;
