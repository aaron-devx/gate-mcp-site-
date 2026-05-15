import {
  User,
  Users,
  Cpu,
  Wallet,
  Zap,
  Maximize2,
  Filter,
  Archive,
  Repeat,
  BarChart3,
  Plug,
  ShieldCheck,
  Bot,
  Sparkles,
  Network,
  TerminalSquare,
  Image,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  User,
  Users,
  Cpu,
  Wallet,
  Zap,
  Maximize2,
  Filter,
  Archive,
  Repeat,
  BarChart3,
  Plug,
  ShieldCheck,
  Bot,
  Sparkles,
  Network,
  TerminalSquare,
  Image,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? HelpCircle;
  return <Cmp className={className} strokeWidth={1.75} />;
}
