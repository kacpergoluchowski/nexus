"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavItems, utilityNavItems } from "./navigation";
import type { AppNavItem } from "./navigation";

function isNavItemActive(item: AppNavItem, pathname: string) {
  if (item.match) {
    return item.match(pathname);
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function SidebarLink({ item }: { item: AppNavItem }) {
  const pathname = usePathname();
  const Icon = item.icon;
  const isActive = isNavItemActive(item, pathname);

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group relative grid size-11 place-items-center rounded-2xl transition duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isActive
          ? "bg-white text-accent shadow-[0_14px_36px_rgba(87,62,236,0.16)] ring-1 ring-white/80"
          : "text-[#101a3d] hover:bg-white/66 hover:text-accent",
      ].join(" ")}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.65} />
      <span className="pointer-events-none absolute left-14 z-50 rounded-xl bg-[#111633] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
        {item.label}
      </span>
    </Link>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="fixed bottom-7 left-8 top-24 z-30 hidden w-20 rounded-[22px] border border-white/72 bg-white/52 p-3 shadow-[0_24px_70px_rgba(46,55,105,0.12)] backdrop-blur-2xl lg:block">
      <nav
        aria-label="Main navigation"
        className="flex h-full flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center gap-2">
          {primaryNavItems.map((item) => (
            <SidebarLink key={item.href} item={item} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          {utilityNavItems.map((item) => (
            <SidebarLink key={item.href} item={item} />
          ))}
        </div>
      </nav>
    </aside>
  );
}
