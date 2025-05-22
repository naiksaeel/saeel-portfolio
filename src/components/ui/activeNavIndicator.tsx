import { ActiveNavIndicatorProps } from "@/types/header";
import clsx from "clsx";

const ActiveNavIndicator = ({ isActive }: ActiveNavIndicatorProps) => {
  return (
    <span
      className={clsx(
        "block h-1 w-1 p-1 rounded-full bg-secondary absolute left-1/2 -translate-x-1/2 mt-1 transition-transform",
        isActive ? "scale-100" : "scale-0 group-hover:scale-100"
      )}
    />
  );
};

export default ActiveNavIndicator;
