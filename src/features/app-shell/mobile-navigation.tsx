"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Folder, Home, Plus, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MobileNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  isPrimary?: boolean;
};

const mobileItems: MobileNavItem[] = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Calendar", href: "/dashboard/calendar", icon: CalendarDays },
  { label: "Create", href: "/dashboard/create", icon: Plus, isPrimary: true },
  { label: "Nexus AI", href: "/dashboard/ai", icon: Sun },
  { label: "Projects", href: "/dashboard/projects", icon: Folder },
];

function isNavItemActive(item: MobileNavItem, pathname: string) {
  if (item.href === "/dashboard") {
    return pathname === item.href;
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-8 bottom-2 z-40 grid h-14 grid-cols-5 items-center rounded-[18px] border border-white/76 bg-white/78 px-1.5 shadow-[0_12px_34px_rgba(46,55,105,0.11)] backdrop-blur-2xl md:hidden"
    >
      {mobileItems.map((item) => {
        const Icon = item.icon;
        const isActive = isNavItemActive(item, pathname);

        if (item.isPrimary) {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="mx-auto grid size-11 -translate-y-1.5 place-items-center rounded-full bg-[linear-gradient(145deg,#7655ff,#5636ed)] text-white shadow-[0_9px_22px_rgba(91,57,235,0.28)] transition active:scale-95"
            >
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className={[
              "mx-auto grid size-10 place-items-center rounded-xl transition",
              isActive
                ? "bg-[#eeeaff] text-accent"
                : "text-[#111936] active:bg-white",
            ].join(" ")}
          >
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              fill={isActive ? "currentColor" : "none"}
              strokeWidth={isActive ? 1.9 : 1.65}
            />
          </Link>
        );
      })}
    </nav>
  );
}
