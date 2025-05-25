import { FC, ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
};

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default SectionContainer;
