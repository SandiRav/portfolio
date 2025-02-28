"use client";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  children,
  ariaLabel,
  buttonType,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className}`}
      aria-label={ariaLabel}
      type={buttonType}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
