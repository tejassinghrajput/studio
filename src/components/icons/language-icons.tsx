
import type { SVGProps } from 'react';

// Basic SVG Icon component props
interface IconProps extends SVGProps<SVGSVGElement> {}

export const JavaIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Simplified Java coffee cup concept */}
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" x2="6" y1="1" y2="4" />
    <line x1="10" x2="10" y1="1" y2="4" />
    <line x1="14" x2="14" y1="1" y2="4" />
  </svg>
);

export const PythonIcon = (props: IconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Simplified Python snake logo concept */}
    <path d="M10.1 10.7a4.5 4.5 0 0 0-4.3 0 4.5 4.5 0 0 0 0 6.1 4.5 4.5 0 0 0 6.1 0"/>
    <path d="M13.9 13.3a4.5 4.5 0 0 0 4.3 0 4.5 4.5 0 0 0 0-6.1 4.5 4.5 0 0 0-6.1 0"/>
    <circle cx="7.8" cy="13.8" r=".9" fill="currentColor"/>
    <circle cx="16.2" cy="10.2" r=".9" fill="currentColor"/>
   </svg>
);

export const PHPIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Abstract PHP letters */}
    <ellipse cx="12" cy="12" rx="10" ry="5"/>
    <path d="M8 12h8"/>
    <path d="M11 9v6"/>
    <path d="M14 9v6"/>
    <path d="M8 9 C 8 7 10 7 10 9"/>
  </svg>
);

export const CppIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
   {/* C++ logo concept */}
   <path d="M10.6 14.9a4.5 4.5 0 1 0 0-5.8"/>
   <path d="M13.4 14.9a4.5 4.5 0 1 0 0-5.8"/>
   <path d="M16 12h3"/>
   <path d="M17.5 10.5v3"/>
   <path d="M12 12h3"/>
   <path d="M13.5 10.5v3"/>
 </svg>
);

export const SQLIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Database cylinder */}
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
 </svg>
);

export const JSIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Simplified JS letters in a box */}
    <path d="M2 2h20v20H2z"/>
    <path d="M12 16v-4a2 2 0 0 1 2-2h1"/>
    <path d="M17 8v8"/>
    <path d="M7 16v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/>
    <path d="M7 12h4"/>
 </svg>
);
