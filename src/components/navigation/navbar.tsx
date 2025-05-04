"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Code } from "lucide-react"; // X is no longer needed here for the button, but keep if used elsewhere

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/theme-switcher"; // Import ThemeSwitcher

type NavItem = {
  href: string; // Now represents the section ID
  label: string;
};

// Updated navItems to point to section IDs
const navItems: NavItem[] = [
  { href: "#home", label: "Home" }, // Assuming Hero section has id="home"
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname(); // Still useful if you have other non-section pages later
  const [activeSection, setActiveSection] = React.useState("#home");
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1)); // Remove #
    if (element) {
      const offset = 80; // Adjust offset for fixed navbar height (approx 5rem)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu on link click
  };

  // Handle scroll to update active link and navbar background
  React.useEffect(() => {
    const handleScroll = () => {
       // Check if window is defined (avoid SSR errors)
       if (typeof window !== 'undefined') {
          setIsScrolled(window.scrollY > 10);

          let currentSection = "#home"; // Default to home
          const sections = navItems.map(item => document.getElementById(item.href.substring(1)));

          sections.forEach((section) => {
            if (section) {
              const sectionTop = section.offsetTop - 150; // Adjust offset as needed
              if (window.scrollY >= sectionTop) {
                currentSection = `#${section.id}`;
              }
            }
          });
          setActiveSection(currentSection);
       }
    };

     // Check if window is defined before adding event listener
     if (typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
     }
  }, []);


  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-md"
          : "bg-transparent border-b border-transparent"
      )}
      initial="visible"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo/Brand - Link to top of page */}
        <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent transition-colors hover-glow p-1 rounded-md cursor-pointer">
          <Code className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Tejas K. Singh</span>
          <span className="sm:hidden">TKS</span> {/* Short name for smaller screens */}
        </button>

        {/* Desktop Navigation & Theme Switcher */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                 activeSection === item.href && "text-accent font-semibold bg-accent/10"
              )}
            >
              {item.label}
            </Button>
          ))}
          <ThemeSwitcher /> {/* Add ThemeSwitcher here */}
        </div>

        {/* Mobile Navigation Trigger & Theme Switcher */}
        <div className="md:hidden flex items-center gap-2"> {/* Use flex container */}
          <ThemeSwitcher /> {/* Add ThemeSwitcher for mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            {/* SheetContent handles its own close button */}
            <SheetContent side="right" className="w-[280px] bg-card border-l border-border p-6 flex flex-col">
               {/* The default SheetContent includes a close button, so no need for an extra one */}
               {/* SheetTitle provides accessible title */}
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

               {/* Header inside the sheet */}
               <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                  <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2 text-lg font-bold text-foreground" >
                      <Code className="h-6 w-6 text-accent" />
                      Tejas K. Singh
                  </button>
                  {/* REMOVED explicit close button */}
                  {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground">
                    <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                   </Button> */}
               </div>

               <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full justify-start text-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                      activeSection === item.href && "text-accent font-semibold bg-accent/10"
                    )}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
