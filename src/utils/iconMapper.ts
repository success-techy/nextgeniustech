
import { 
  Terminal, 
  Cloud, 
  Globe, 
  GitBranch, 
  Code, 
  BarChart3, 
  Code2, 
  Database, 
  Shield,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Cloud,
  Globe,
  GitBranch,
  Code,
  BarChart3,
  Code2,
  Database,
  Shield
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Code;
};
