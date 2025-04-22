import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function Button({
  className,
  children,
  wide = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(classes.button, wide && classes.button_wide, className)}
      {...props}
    >
      {children}
    </button>
  );
}
