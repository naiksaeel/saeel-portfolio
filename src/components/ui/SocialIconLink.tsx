import clsx from "clsx";
import React from "react";

type SocialIconLinkProps = {
  url: string;
  icon: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
};

const SocialIconLink = ({
  url,
  icon,
  target = "_blank",
  rel,
  className,
}: SocialIconLinkProps) => {
  if (!url) return null;

  return (
    <a
      href={url}
      target={target}
      rel={rel}
      className={clsx("hover:opacity-80", className)}
    >
      {icon}
    </a>
  );
};

export default SocialIconLink;
