import React, { memo } from "react";
import FadeInWhenVisible from "./animation/FadeInWhenVisible";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: string;
  className?: string;
  disableAnimation?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  disableAnimation = false,
}) => {
  if (disableAnimation) {
    return <section className={className}>{children}</section>;
  }

  return (
    <section className={className}>
      <FadeInWhenVisible delay={delay} direction={direction}>
        {children}
      </FadeInWhenVisible>
    </section>
  );
};

export default memo(AnimatedSection);
