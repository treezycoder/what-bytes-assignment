import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconClassName?: string;
  icon?: ReactNode;
  text?: string;
  onClick?: () => void;
  variant?: "default" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  icon,
  iconClassName = "",
  text = "",
  onClick,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "flex gap-2 items-center justify-center transition-all rounded-md text-sm p-3 font-semibold active:scale-105";

  const variants = {
    default: "bg-blue-500 hover:bg-blue-700 text-white",
    ghost:
      "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      {...props}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children ? children : <span>{text}</span>}
      {icon && <span className={`${iconClassName}`}>{icon}</span>}
    </button>
  );
};

export default Button;
