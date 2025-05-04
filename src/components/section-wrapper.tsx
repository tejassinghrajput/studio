import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)} // Consistent vertical padding
      {...props}
    >
      <div className="container mx-auto px-4"> {/* Consistent container and horizontal padding */}
        {children}
      </div>
    </section>
  );
}
