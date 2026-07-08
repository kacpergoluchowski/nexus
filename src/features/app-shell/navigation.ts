import {
  CalendarDays,
  FileText,
  Folder,
  GraduationCap,
  Heart,
  Home,
  Inbox,
  Plus,
  Settings,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AppNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  match?: (pathname: string) => boolean;
};

export const primaryNavItems: AppNavItem[] = [
  {
    label: "Home",
    href: "/dashboard",
    icon: Home,
    match: (pathname) => pathname === "/dashboard",
  },
  {
    label: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarDays,
  },
  {
    label: "Notes",
    href: "/dashboard/notes",
    icon: FileText,
  },
  {
    label: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    label: "Learning",
    href: "/dashboard/learning",
    icon: GraduationCap,
  },
  {
    label: "Nexus AI",
    href: "/dashboard/ai",
    icon: Sparkles,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: Folder,
  },
  {
    label: "Health",
    href: "/dashboard/health",
    icon: Heart,
  },
];

export const utilityNavItems: AppNavItem[] = [
  {
    label: "Create",
    href: "/dashboard/create",
    icon: Plus,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
