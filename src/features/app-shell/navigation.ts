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
  variant?: "primary-action" | "utility";
};

export const primaryNavItems: AppNavItem[] = [
  {
    label: "Home",
    href: "/dashboard",
    icon: Home,
    match: (pathname) => pathname === "/dashboard",
  },
  {
    label: "Life",
    href: "/dashboard/life",
    icon: Heart,
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
];

export const utilityNavItems: AppNavItem[] = [
  {
    label: "Create",
    href: "/dashboard/create",
    icon: Plus,
    variant: "primary-action",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    variant: "utility",
  },
];
