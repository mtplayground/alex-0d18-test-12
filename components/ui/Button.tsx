import type { ButtonHTMLAttributes } from "react";
import { cn } from "./utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleOptions;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-brand-700 bg-brand-700 text-white hover:border-brand-800 hover:bg-brand-800",
  secondary:
    "border-border bg-surface text-foreground hover:border-brand-200 hover:bg-muted",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-muted hover:text-brand-800",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName({ variant, size, fullWidth, className })}
      type={type}
      {...props}
    />
  );
}
