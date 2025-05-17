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
    return <section className={className}>{children}</section>;
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
