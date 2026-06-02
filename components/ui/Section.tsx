import type { HTMLAttributes } from "react";
import { cn } from "./utils";

export type SectionSpacing = "sm" | "md" | "lg";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

export function Section({ spacing = "md", className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-24", spacingClasses[spacing], className)}
      {...props}
    />
  );
}
