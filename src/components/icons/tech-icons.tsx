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
} from 'lucide-react';

// Reusable Icon Props
interface IconProps extends LucideProps {} // Use LucideProps for consistency

// --- Language Icons (using Lucide or simple outlines) ---

export const JavaIcon = (props: IconProps) => <Flame {...props} />; // Lucide Flame as abstract representation
export const PythonIcon = (props: IconProps) => <Code {...props} />; // Generic Code icon
export const PHPIcon = (props: IconProps) => ( // Simple Outline
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="1"/>
    <path d="M8.5 9.5 V14.5"/>
    <path d="M8.5 12 H 11.5"/>
    <path d="M11.5 9.5 V 14.5"/>
    <path d="M15.5 9.5 V 14.5"/>
    <path d="M15.5 12 C 15.5 10.5 14 9.5 12.5 9.5"/>
 </svg>
);
export const CppIcon = (props: IconProps) => <Braces {...props} />; // Lucide Braces
export const SQLIcon = (props: IconProps) => <Database {...props} />; // Lucide Database
export const JSIcon = (props: IconProps) => <Code {...props} />; // Lucide Code

// --- Framework Icons (using Lucide or simple outlines) ---

export const CodeIgniterIcon = (props: IconProps) => <Flame {...props} />; // Lucide Flame
export const FastAPIIcon = (props: IconProps) => <Wind {...props} />; // Lucide Wind
export const ReactIcon = (props: IconProps) => <Atom {...props} />; // Lucide Atom
export const NodeJSIcon = (props: IconProps) => <Server {...props} />; // Lucide Server
export const FlaskIcon = (props: IconProps) => <FlaskConical {...props} />; // Lucide FlaskConical

// --- Tool Icons (using Lucide) ---

export const DockerIcon = (props: IconProps) => <Ship {...props} />; // Lucide Ship (common representation)
export const GitIcon = (props: IconProps) => <GitBranch {...props} />; // Lucide GitBranch
export const TravisCIIcon = (props: IconProps) => <TestTube {...props} />; // Lucide TestTube
export const GCPIcon = (props: IconProps) => <CloudCog {...props} />; // Lucide CloudCog
export const VSCodeIcon = (props: IconProps) => <Laptop {...props} />; // Lucide Laptop

// --- Database & API Icons (using Lucide) ---

export const PostgreSQLIcon = (props: IconProps) => <DatabaseBackup {...props} />; // Lucide DatabaseBackup
export const MySQLIcon = (props: IconProps) => <DatabaseIcon {...props} />; // Lucide DatabaseIcon (alternative)
export const RestAPIIcon = (props: IconProps) => <Link {...props} />; // Lucide Link
export const KafkaIcon = (props: IconProps) => <Workflow {...props} />; // Lucide Workflow (represents stream/pipeline)
export const ElasticsearchIcon = (props: IconProps) => <Search {...props} />; // Lucide Search

// Add more icons as needed using Lucide or simple outlines
