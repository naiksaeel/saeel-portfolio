// types
import { AOSAnimation } from "@/types/common";
import React, { ReactNode, HTMLAttributes } from "react";
import { easingOptions } from "aos";

interface AnimationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  animation?: AOSAnimation;
  delay?: string | number;
  duration?: string | number;
  easing?: easingOptions;
}

const FadeUp: React.FC<AnimationProps> = ({
  children,
  delay,
  duration,
  easing = "ease-in-out",
  className,
  ...rest
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-easing={easing}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

const FadeOut: React.FC<AnimationProps> = ({
  children,
  className,
  delay,
  duration,
  easing = "ease-in-out",
  ...rest
}) => {
  return (
    <div data-aos="fade-out" className={className} {...rest}>
      {children}
    </div>
  );
};

const FadeLeft: React.FC<AnimationProps> = ({
  children,
  className,
  delay,
  duration,
  easing = "ease-in-out",
  ...rest
}) => {
  return (
    <div data-aos="fade-left" className={className} {...rest}>
      {children}
    </div>
  );
};

const FadeUpRight: React.FC<AnimationProps> = ({
  children,
  className,
  delay,
  duration,
  easing = "ease-in-out",
  ...rest
}) => {
  return (
    <div data-aos="fade-up-right" className={className} {...rest}>
      {children}
    </div>
  );
};

const SlideLeft: React.FC<AnimationProps> = ({
  children,
  className,
  delay,
  duration,
  easing = "ease-in-out",
  ...rest
}) => {
  return (
    <div data-aos="slide-left" className={className} {...rest}>
      {children}
    </div>
  );
};

const CustomEffect: React.FC<AnimationProps> = ({
  children,
  className,
  animation,
  delay,
  duration,
  easing = "ease-in-out",
  ...rest
}) => {
  return (
    <div data-aos={animation} className={className} {...rest}>
      {children}
    </div>
  );
};

export { FadeOut, FadeUp, FadeLeft, FadeUpRight, SlideLeft, CustomEffect };
