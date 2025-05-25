import { useEffect } from "react";
import AOS from "aos";

export const useAOS = (duration = 800, once = true) => {
  useEffect(() => {
    AOS.init({ duration, once });
  }, [duration, once]);
};
