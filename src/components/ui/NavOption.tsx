import ActiveNavIndicator from "@/components/ui/activeNavIndicator";
import { NavOptionProps } from "@/types/header";

type ExtendedNavOptionProps = NavOptionProps & {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavOption = ({ label, isActive, href = "#", onClick }: ExtendedNavOptionProps) => (
  <a
    href={href}
    onClick={onClick}
    className="relative group text-gray-400 hover:text-white transition-colors text-base md:text-lg font-bold capitalize tracking-wide"
  >
    {label}
    <ActiveNavIndicator isActive={isActive} />
  </a>
);

export default NavOption;
