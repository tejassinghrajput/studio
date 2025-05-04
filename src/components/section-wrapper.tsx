import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 w-full", className)} // Ensure section takes full width
      {...props}
    >
      {/* Use max-w-7xl for a common max-width, remove mx-auto if full-bleed is needed */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> {/* Consistent container, padding, and max-width */}
        {children}
      </div>
    </section>
  );
}
