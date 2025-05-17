import FadeInWhenVisible from "./animation/FadeInWhenVisible";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const Component: React.FC<{ children: any; className: string }> = ({
    children,
    className,
  }) => {
    return <div className={className}>{children}</div>;
  };

  return (
    <Component className={`${className}`}>
      <FadeInWhenVisible delay={delay} direction={direction}>
        {children}
      </FadeInWhenVisible>
    </Component>
  );
};

export default AnimatedSection;
