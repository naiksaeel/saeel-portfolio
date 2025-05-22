import ActiveNavIndicator from "@/components/ui/activeNavIndicator";
import { NavOptionProps } from "@/types/header";

const NavOption = ({ label, isActive }: NavOptionProps) => (
  <a
    href="#"
    className="relative group text-gray-400 hover:text-white transition-colors text-xl font-bold capitalize"
  >
    {label}
    <ActiveNavIndicator isActive={isActive} />
  </a>
);

export default NavOption;
