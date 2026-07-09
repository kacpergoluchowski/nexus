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
  const isCreate = item.variant === "primary-action";
  const isUtility = item.variant !== undefined;

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      className={[
        "group relative grid size-11 shrink-0 place-items-center transition-[color,background-color,box-shadow,transform] duration-200 [@media(max-height:640px)]:size-10",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none",
        isCreate
          ? "rounded-full bg-[linear-gradient(145deg,#7655ff,#5735ed)] text-white shadow-[0_10px_24px_rgba(91,57,235,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_14px_30px_rgba(91,57,235,0.38),inset_0_1px_0_rgba(255,255,255,0.3)] active:scale-95"
          : isActive
            ? "rounded-[14px] bg-white/88 text-accent shadow-[0_8px_22px_rgba(70,57,155,0.13),inset_0_1px_0_rgba(255,255,255,0.94)] ring-1 ring-[#ded9ff]/55"
            : "rounded-[14px] text-[#182142] hover:bg-white/62 hover:text-accent hover:shadow-[0_6px_18px_rgba(49,56,98,0.06)] active:scale-95",
      ].join(" ")}
    >
      <Icon
        aria-hidden="true"
        className={[
          isUtility
            ? ""
            : "transition-transform duration-200 group-hover:scale-[1.06] motion-reduce:transition-none",
          isCreate ? "size-[23px]" : "size-[22px]",
        ].join(" ")}
        strokeWidth={isCreate ? 1.8 : isActive ? 1.9 : 1.6}
      />
      <span className="pointer-events-none absolute left-[58px] z-50 -translate-x-1 whitespace-nowrap rounded-[10px] border border-white/10 bg-[#12162f]/96 px-2.5 py-1.5 text-[0.7rem] font-semibold text-white opacity-0 shadow-[0_10px_28px_rgba(17,22,47,0.22)] backdrop-blur-xl transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        {item.label}
      </span>
    </Link>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="fixed bottom-7 left-8 top-24 z-30 hidden w-[76px] rounded-[20px] border border-[#9ea5c8]/22 bg-[linear-gradient(145deg,rgba(255,255,255,0.28),rgba(255,255,255,0.1))] p-2.5 shadow-[0_2px_4px_rgba(28,35,72,0.035),0_20px_54px_rgba(50,58,105,0.11),inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(132,140,180,0.06)] backdrop-blur-[28px] backdrop-saturate-[1.65] lg:block [@media(max-height:640px)]:bottom-3 [@media(max-height:640px)]:top-[88px] [@media(max-height:640px)]:overflow-y-auto [@media(max-height:640px)]:overscroll-contain [@media(max-height:640px)]:[scrollbar-width:none] [@media(max-height:640px)]:[&::-webkit-scrollbar]:hidden">
      <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      <nav
        aria-label="Main navigation"
        className="flex h-full flex-col items-center justify-between [@media(max-height:640px)]:h-auto [@media(max-height:640px)]:min-h-max [@media(max-height:640px)]:justify-start"
      >
        <div className="flex flex-col items-center gap-2.5 [@media(max-height:640px)]:gap-1.5">
          {primaryNavItems.map((item) => (
            <SidebarLink key={item.href} item={item} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 [@media(max-height:640px)]:mt-4 [@media(max-height:640px)]:gap-2">
          {utilityNavItems.map((item) => (
            <SidebarLink key={item.href} item={item} />
          ))}
        </div>
      </nav>
    </aside>
  );
}
