import { ReactNode, FC } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const HeaderWrapper: FC<WrapperProps> = ({ children }) => (
  <div className="bg-primary">{children}</div>
);

export const HeroWrapper: FC<WrapperProps> = ({ children }) => (
  <div className="bg-primary">{children}</div>
);

export const ContactWrapper: FC<WrapperProps> = ({ children }) => (
  <div className="bg-darkbg">{children}</div>
);

export const SkillsWrapper: FC<WrapperProps> = ({ children }) => (
  <div className="bg-primary">{children}</div>
);
