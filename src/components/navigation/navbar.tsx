"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/theme-switcher";

type NavItem = {
  href: string; // Now represents the actual route path
  label: string;
};

// Updated navItems to point to actual routes
const navItems: NavItem[] = [
  { href: "/", label: "Home" }, // Home page displays all sections
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname(); // Use pathname for active link detection
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Removed scrollToSection function as we now use Next.js routing

  // Handle scroll to update navbar background
  React.useEffect(() => {
    const handleScroll = () => {
       // Check if window is defined (avoid SSR errors)
       if (typeof window !== 'undefined') {
          setIsScrolled(window.scrollY > 10);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full", // Ensure nav takes full width
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-md"
          : "bg-transparent border-b border-transparent"
      )}
      initial="visible"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between max-w-7xl"> {/* Consistent max-width */}
        {/* Logo/Brand - Link to Home */}
        <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent transition-colors hover-glow p-1 rounded-md cursor-pointer">
          <Code className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Tejas K. Singh</span>
          <span className="sm:hidden">TKS</span> {/* Short name for smaller screens */}
        </Link>

        {/* Desktop Navigation & Theme Switcher */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild // Use asChild to allow Link to wrap Button styles
              className={cn(
                "text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                 pathname === item.href && "text-accent font-semibold bg-accent/10" // Compare with current pathname
              )}
            >
              <Link href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
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
            <SheetContent side="right" className="w-[280px] bg-card border-l border-border p-6 flex flex-col">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

               {/* Header inside the sheet */}
               <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                  <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground" onClick={() => setIsOpen(false)}>
                      <Code className="h-6 w-6 text-accent" />
                      Tejas K. Singh
                  </Link>
               </div>

               <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    asChild // Use asChild for Link
                    className={cn(
                      "w-full justify-start text-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                      pathname === item.href && "text-accent font-semibold bg-accent/10" // Compare with current pathname
                    )}
                  >
                     <Link href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
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
