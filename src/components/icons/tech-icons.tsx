import type { SVGProps } from 'react';

// Basic SVG Icon component props
interface IconProps extends SVGProps<SVGSVGElement> {}

// --- Language Icons ---

export const JavaIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" x2="6" y1="1" y2="4" />
    <line x1="10" x2="10" y1="1" y2="4" />
    <line x1="14" x2="14" y1="1" y2="4" />
  </svg>
);

export const PythonIcon = (props: IconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.1 10.7a4.5 4.5 0 0 0-4.3 0 4.5 4.5 0 0 0 0 6.1 4.5 4.5 0 0 0 6.1 0"/>
    <path d="M13.9 13.3a4.5 4.5 0 0 0 4.3 0 4.5 4.5 0 0 0 0-6.1 4.5 4.5 0 0 0-6.1 0"/>
    <circle cx="7.8" cy="13.8" r=".9" fill="currentColor"/>
    <circle cx="16.2" cy="10.2" r=".9" fill="currentColor"/>
   </svg>
);

export const PHPIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="1"/>
    <path d="M8.5 9.5 V14.5"/>
    <path d="M8.5 12 H 11.5"/>
    <path d="M11.5 9.5 V 14.5"/>
    <path d="M15.5 9.5 V 14.5"/>
    <path d="M15.5 12 C 15.5 10.5 14 9.5 12.5 9.5"/>
 </svg>
);

export const CppIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
 </svg>
);

export const JSIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M17.31 8.89c.44-.44.44-1.15 0-1.59l-3.6-3.6c-.44-.44-1.15-.44-1.59 0l-3.6 3.6c-.44.44-.44 1.15 0 1.59L12 12.47l3.71-3.58z" opacity=".3"/>
    <path d="M12 3c-.46 0-.91.18-1.25.51L7.2 7.05a1.74 1.74 0 000 2.47l3.55 3.55c.34.34.79.51 1.25.51s.91-.18 1.25-.51l3.55-3.55a1.74 1.74 0 000-2.47L13.25 3.51A1.76 1.76 0 0012 3zm0 9.47L8.41 8.89a.25.25 0 010-.35l3.6-3.6a.25.25 0 01.35 0l3.6 3.6a.25.25 0 010 .35L12 12.47zM21 12l-3.55-3.55c-.34-.34-.79-.51-1.25-.51s-.91.18-1.25.51l-3.55 3.55c-.34.34-.51.79-.51 1.25s.18.91.51 1.25l3.55 3.55c.34.34.79.51 1.25.51s.91-.18 1.25-.51l3.55-3.55c.34-.34.51-.79.51-1.25s-.18-.91-.51-1.25zm-4.8 3.71l-3.6 3.6a.25.25 0 01-.35 0l-3.6-3.6a.25.25 0 010-.35l3.6-3.6a.25.25 0 01.35 0l3.6 3.6a.25.25 0 010 .35z"/>
    <path d="M8.41 15.11l-3.6 3.6a.25.25 0 000 .35l3.6 3.6c.44.44 1.15.44 1.59 0l3.6-3.6c.44-.44.44-1.15 0-1.59L8.41 15.11z" opacity=".3"/>
    <path d="M7.2 14.45a1.74 1.74 0 00-2.47 0l-3.55 3.55c-.68.68-.68 1.8 0 2.47l3.55 3.55c.34.34.79.51 1.25.51s.91-.18 1.25-.51l3.55-3.55a1.74 1.74 0 000-2.47L7.2 14.45zm3.6 7.29l-3.6 3.6a.25.25 0 01-.35 0l-3.6-3.6a.25.25 0 010-.35l3.6-3.6a.25.25 0 01.35 0l3.6 3.6a.25.25 0 010 .35z"/>
</svg>
);

// --- Framework Icons ---

export const CodeIgniterIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Abstract flame/CI concept */}
    <path d="M8.5 14.5A3.5 3.5 0 0 0 12 18a3.5 3.5 0 0 0 3.5-3.5V11"/>
    <path d="M12 18v4"/>
    <path d="M15 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
    <path d="M12 2v5"/>
 </svg>
);

export const FastAPIIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Simplified Fast Arrow */}
    <path d="M13 17l5-5-5-5"/>
    <path d="M6 17l5-5-5-5"/>
 </svg>
);

export const ReactIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4"/>
  </svg>
);

export const NodeJSIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20.7 11.3c-.1-.5-.4-1-.8-1.3l-7.2-5.2c-.8-.5-1.8-.5-2.5 0L3 9.9c-.8.5-.8 1.7 0 2.3l7.2 5.2c.4.3.9.4 1.3.4s.9-.2 1.3-.4l7.2-5.2c.8-.6.8-1.8.1-2.3zm-8.6 5.4l-6.6-4.8 6.6-4.8 6.6 4.8-6.6 4.8zM4 20h16v-2H4v2z"/>
  </svg>
);

export const FlaskIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
   <path d="M8 3h8v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z"/>
   <path d="M7 14h10"/>
   <path d="M12 14v7"/>
   <path d="M7 21h10"/>
 </svg>
);

// --- Tool Icons ---

export const DockerIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.03 8.88l-2.8-1.4C19.1 7.4 19 7.2 19 7V4c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v3c0 .2-.04.4-.13.58l-2.8 1.4C9 8.95 8.9 9 8.78 9H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4.78c.12 0 .23.05.32.12l2.8 1.4c.1.08.13.2.13.3V20c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-.2.04-.4.13-.58l2.8-1.4c.1-.08.2-.12.32-.12H20c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-.97zM16 4h1v2h-1V4zm-5 0h1v2h-1V4zM7 4h1v2H7V4zm-3 7h1v2H4v-2zm16 0h1v2h-1v-2z"/>
  </svg>
);

export const GitIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="18" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
    <line x1="6" y1="9" x2="6" y2="21"/>
  </svg>
);

export const TravisCIIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
   <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
   <path d="M15 9l-6 6"/>
   <path d="M9 9l6 6"/>
 </svg>
);

export const GCPIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
     <path d="M12 6C8.69 6 6 8.69 6 12s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
     <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

export const VSCodeIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.5 3l-15 9 15 9L21 12l-2.5-9z"/>
    <path d="M3.5 12h12"/>
    <path d="M11 3l-7.5 6"/>
    <path d="M11 21l-7.5-6"/>
  </svg>
);

// --- Database & API Icons ---

export const PostgreSQLIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elephant head concept */}
    <path d="M10 16H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1"/>
    <path d="M15 16h2a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-1"/>
    <path d="M12 12v10"/>
    <path d="M16 22h-8"/>
    <path d="M10 12a4 4 0 0 0-4-4"/>
    <path d="M14 12a4 4 0 0 1 4-4"/>
  </svg>
);

export const MySQLIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Dolphin concept */}
    <path d="M15 15a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/>
    <path d="M9 9a5 5 0 0 1 5.2-4 6.5 6.5 0 0 1 4.8 10 5 5 0 0 1-10-1.2V9z"/>
    <path d="M12 18v3"/>
    <path d="M4 11a3 3 0 0 0 3 3h1"/>
 </svg>
);

export const RestAPIIcon = (props: IconProps) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 8V4H8"/>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 12h8"/>
    <path d="M12 16v-4"/>
    <path d="M16 12l-4 4-4-4"/>
 </svg>
);

export const KafkaIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Abstract K/Stream concept */}
    <path d="M6 3v18"/>
    <path d="M6 12l8-6"/>
    <path d="M6 12l8 6"/>
    <path d="M18 9h-4"/>
    <path d="M18 15h-4"/>
  </svg>
);

export const ElasticsearchIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Compass/Search concept */}
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <path d="M11 8 L11 14"/>
    <path d="M8 11 L14 11"/>
 </svg>
);

// Add more icons as needed following the same pattern
