
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
      initial="visible" // Start visible on initial load
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-foreground hover:text-accent transition-colors hover-glow p-1 rounded-md">
          <Code className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Tejas K. Singh</span>
           <span className="sm:hidden">TKS</span> {/* Short name for smaller screens */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                pathname === item.href && "text-accent font-semibold bg-accent/10"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card border-l border-border p-6 flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                   <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground" onClick={() => setIsOpen(false)}>
                      <Code className="h-6 w-6 text-accent" />
                      Tejas K. Singh
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground">
                     <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                 </div>

                 {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors px-3 py-2",
                        pathname === item.href && "text-accent font-semibold bg-accent/10"
                      )}
                      onClick={() => setIsOpen(false)} // Close sheet on link click
                    >
                      <Link href={item.href}>{item.label}</Link>
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
