import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  isActive?: boolean;
}

export function Button({
  children,
  variant = "secondary",
  isActive = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant}${isActive ? " is-active" : ""} ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
