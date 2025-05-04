import type { SVGProps } from 'react';
import {
  LucideProps,
  Database,
  Braces,
  Code,
  Cloud,
  Cog,
  GitBranch,
  Cpu,
  Server,
  Terminal,
  Network,
  GitCommit,
  ExternalLink,
  Globe,
  Package,
  TestTube,
  Laptop,
  DatabaseZap,
  Flame,
  Wind,
  Atom,
  Bolt,
  FlaskConical,
  Ship,
  Monitor,
  DatabaseBackup,
  DatabaseIcon,
  CloudCog,
  Workflow,
  Link,
  Zap,
  Search,
  Palette, // Added for PHP
} from 'lucide-react';

// Reusable Icon Props
interface IconProps extends LucideProps {
    className?: string; // Ensure className can be passed
}

// --- Language Icons ---

export const JavaIcon = (props: IconProps) => ( // Red/Orange Flame
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#javaGradient)" stroke="#E57373" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
     <defs>
      <linearGradient id="javaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF8A65', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#E64A19', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M14.5 13.14a8.08 8.08 0 0 1 -2.5 5.86a2.47 2.47 0 0 0 -2.39 2.39c0 1.31 1.54 2.47 2.39 2.39A8.08 8.08 0 0 1 18 15.5a2.47 2.47 0 0 0 2.39 -2.4c0 -1.3 -1.54 -2.46 -2.39 -2.38z"/>
    <path d="M12 3c-2.49 4.44 -1.62 9.69 2 12.14c2.75 1.84 6.16 1.36 8 -1.14"/>
    <path d="M10.5 8.86c-2.75 1.84 -3.62 5.19 -1.5 8.14"/>
    <path d="M6.5 13.86c-2.75 1.84 -3.62 5.19 -1.5 8.14"/>
 </svg>
);

export const PythonIcon = (props: IconProps) => ( // Blue/Yellow Snake
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.8 17.8C7 17.8 4 14.8 4 11s3-6.8 6.8-6.8h5.4M13.2 6.2C17 6.2 20 9.2 20 13s-3 6.8-6.8 6.8H7.8" stroke="#42A5F5"/>
    <circle cx="7.8" cy="11" r="2" fill="#FFCA28"/>
    <circle cx="16.2" cy="13" r="2" fill="#29B6F6"/>
  </svg>
);

// Using Lucide Palette for PHP's common purple/blue association
export const PHPIcon = (props: IconProps) => <Palette {...props} className={cn("text-[#8892BF]", props.className)} />;

export const CppIcon = (props: IconProps) => ( // Blue Braces
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#64B5F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/>
    <path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>
  </svg>
);

export const SQLIcon = (props: IconProps) => ( // Standard DB icon, gray/blue
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#90A4AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#CFD8DC"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
 </svg>
);

export const JSIcon = (props: IconProps) => ( // Yellow Square with JS
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#F7DF1E" {...props}>
   <path d="M0 0h32v32H0z"/>
   <path d="M22.034 21.689c.555 0 .95-.157 1.188-.471a.938.938 0 00.289-.761 1.23 1.23 0 00-.289-.864c-.238-.289-.68-.46-1.323-.516l-1.611-.145c-.75-.072-1.323-.18-1.719-.324-.396-.145-.594-.396-.594-.756 0-.384.205-.68.612-.888.407-.205.96-.309 1.661-.309.738 0 1.309.115 1.71.342.403.227.605.564.605 1.011h2.705c-.048-.84-.324-1.542-.828-2.106-.504-.564-1.215-.846-2.133-.846-1.01 0-1.802.26-2.379.78-.576.52-.864 1.182-.864 1.987 0 .552.145 1.011.432 1.377.288.366.762.647 1.421.846l1.542.18c.981.115 1.667.283 2.057.504.39.221.585.546.585.975 0 .636-.318 1.095-.954 1.377-.636.283-1.514.424-2.635.424-.981 0-1.779-.157-2.394-.471-.615-.315-.923-.79-.923-1.427h-2.729c.048.939.366 1.72.954 2.344.588.624 1.385.936 2.394.936 1.039 0 1.883-.249 2.532-.747.649-.498.975-1.122.975-1.872 0-.6-.162-1.095-.486-1.485-.324-.389-.84-.68-1.548-.875zM12.876 24h-2.911V12.159h2.911V24z" fill="#000"/>
 </svg>
);

// --- Framework Icons ---

export const CodeIgniterIcon = (props: IconProps) => ( // Flame Icon Red/Orange
   <JavaIcon {...props} /> // Reuse Java's icon for simplicity
);

export const FastAPIIcon = (props: IconProps) => ( // Teal/Green Wind
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4DB6AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.7 7.7a5 5 0 1 1-7.1 7.1"/>
    <path d="M17 17a5 5 0 0 1-7.1-7"/>
    <path d="M17 17a5 5 0 0 0-7.1-7"/>
    <path d="M7 7a5 5 0 0 1 7.1 7"/>
 </svg>
);


export const ReactIcon = (props: IconProps) => ( // Light Blue Atom
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2"/>
    <path d="M19.07 4.93a10 10 0 0 0-14.14 0"/>
    <path d="M4.93 19.07a10 10 0 0 0 14.14 0"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)"/>
 </svg>
);

export const NodeJSIcon = (props: IconProps) => ( // Green Hexagon
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8CC84B" stroke="#68A063" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
  <path d="M12 2 L19 6 L19 18 L12 22 L5 18 L5 6 Z M9.8 8.6 L14.2 15.4 M9.8 15.4 L14.2 8.6"/>
 </svg>
);

export const FlaskIcon = (props: IconProps) => ( // Simple Black/Gray Flask
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#B0BEC5" stroke="#37474F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
   <path d="M9 3h6v6l-4 9.5V21h8v-2.5L15 9V3z"/>
   <path d="M3 3h6v6L5 18.5V21h8v-2.5L9 9V3z"/>
 </svg>
);


// --- Tool Icons (using Lucide or slightly customized) ---

export const DockerIcon = (props: IconProps) => ( // Docker Blue Whale
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2496ED" stroke="white" strokeWidth="0.5" {...props}>
  <path d="M21.997 11.807c-1.412-3.81-4.86-6.48-8.997-6.48-1.935 0-3.76.493-5.328 1.373-.97.55-1.828 1.24-2.55 2.04-.72-.8-1.58-1.49-2.55-2.04C.997 5.84.498 4.007.498 2.077c0-1.14.93-2.07 2.07-2.07h16.86c1.14 0 2.07.93 2.07 2.07 0 1.93-.5 3.76-1.373 5.328-.72.97-1.24 1.828-2.04 2.55.8.72 1.49 1.58 2.04 2.55 1.027 1.67 1.58 3.57 1.58 5.57 0 1.14-.93 2.07-2.07 2.07H2.568c-1.14 0-2.07-.93-2.07-2.07 0-2 .553-3.9 1.58-5.57zM6.5 12.5h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6-3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z"/>
 </svg>
);
export const GitIcon = (props: IconProps) => <GitBranch {...props} className={cn("text-[#F05033]", props.className)} />; // Git orange
export const TravisCIIcon = (props: IconProps) => <TestTube {...props} className={cn("text-[#F44336]", props.className)} />; // Travis red
export const GCPIcon = (props: IconProps) => <CloudCog {...props} className={cn("text-[#4285F4]", props.className)} />; // Google blue
export const VSCodeIcon = (props: IconProps) => <Laptop {...props} className={cn("text-[#007ACC]", props.className)} />; // VS Code blue

// --- Database & API Icons ---

export const PostgreSQLIcon = (props: IconProps) => ( // PostgreSQL blue elephant
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#336791" {...props}>
  <path d="M49.8,28.1c-7.4,0-13.3,5.9-13.3,13.3c0,7.4,5.9,13.3,13.3,13.3s13.3-5.9,13.3-13.3 C63.1,34,57.2,28.1,49.8,28.1z M77.8,67.5c-2.5,0-4.5-2-4.5-4.5V49.8h-4.5v13.3c0,4.9-4,8.9-8.9,8.9h-8.9c-4.9,0-8.9-4-8.9-8.9V49.8 h-4.5v13.3c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5V37c0-2.5,2-4.5,4.5-4.5h4.5v-4.5c0-4.9,4-8.9,8.9-8.9h8.9 c4.9,0,8.9,4,8.9,8.9v4.5h4.5c2.5,0,4.5,2,4.5,4.5V63C82.3,65.5,80.3,67.5,77.8,67.5z"/>
 </svg>
);
export const MySQLIcon = (props: IconProps) => ( // MySQL blue/orange dolphin
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#00758F" {...props}>
  <path d="M103.6 63.1c-1-4.1-3.2-7.8-6.4-10.7-3.2-2.9-7.3-4.8-11.7-5.5-4.4-.7-8.9-.2-13.1 1.5-4.2 1.7-8 4.5-10.8 8.1-2.8 3.6-4.5 7.9-4.8 12.4-.3 4.5.7 9 3 12.9 2.3 3.9 5.7 6.9 10 8.6 4.3 1.7 9 2 13.5.8s8.7-3.8 12-7.1c3.3-3.3 5.4-7.7 6-12.3.6-4.6-.1-9.3-2.1-13.6zm-18.5 19c-2.7 2.7-6.4 4.2-10.2 4.3s-7.7-1.1-10.7-3.7c-3-2.6-4.8-6.3-5.1-10.2-.3-3.9 1.1-7.7 3.7-10.6 2.6-2.9 6.3-4.6 10.2-4.8 3.9-.2 7.8 1.2 10.6 3.9 2.8 2.7 4.4 6.4 4.5 10.3.1 3.9-1.3 7.8-4 10.6z" fill="#F29111"/>
  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm39.6 76.7c-2.3 3.9-5.7 6.9-10 8.6-4.3 1.7-9 2-13.5.8s-8.7-3.8-12-7.1c-3.3-3.3-5.4-7.7-6-12.3-.6-4.6.1-9.3 2.1-13.6 1-4.1 3.2-7.8 6.4-10.7 3.2-2.9 7.3-4.8 11.7-5.5 4.4-.7 8.9-.2 13.1 1.5 4.2 1.7 8 4.5 10.8 8.1 2.8 3.6 4.5 7.9 4.8 12.4.4 4.5-.6 9-2.9 12.9z"/>
 </svg>
);
export const RestAPIIcon = (props: IconProps) => <Link {...props} className={cn("text-green-500", props.className)} />; // Simple green link
export const KafkaIcon = (props: IconProps) => ( // Black/White abstract flow
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#231F20" stroke="white" strokeWidth="0.5" {...props}>
  <path d="M14.6 11.1c-1.2-1-3.1-1.5-5.1-.3-1.9 1.2-2.5 3.1-.3 5.1s3.1 2.5 5.1.3 2.5-3.1.3-5.1zm-3.5 7.2c-4.8 0-8.6-3.8-8.6-8.6s3.8-8.6 8.6-8.6 8.6 3.8 8.6 8.6-3.9 8.6-8.6 8.6zm5.8-10.9c.9-.8 2.3-1.1 3.7-.2 1.4.8 1.8 2.3.2 3.7-.8 1.4-2.3 1.8-3.7.2-1.4-.9-1.8-2.3-.2-3.7z"/>
 </svg>
);
export const ElasticsearchIcon = (props: IconProps) => ( // Teal/Orange Search
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00A8A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" fill="#FFCA8A" fillOpacity="0.3"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

// Add more icons as needed using Lucide or simple outlines
