import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import { NexusLogo } from "./nexus-logo";

export function MobileHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[72px] px-4 md:hidden">
      <div className="relative flex h-full items-center justify-between">
        <button
          type="button"
          aria-label="Open navigation menu"
          className="grid size-10 place-items-center rounded-[13px] border border-white/72 bg-white/64 text-[#111936] shadow-[0_8px_22px_rgba(46,55,105,0.08)] backdrop-blur-xl transition active:scale-95"
        >
          <Menu aria-hidden="true" className="size-[18px]" strokeWidth={1.7} />
        </button>

        <Link
          href="/dashboard"
          aria-label="Nexus dashboard"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5"
        >
          <NexusLogo className="size-7 shrink-0" />
          <span className="text-[0.86rem] font-semibold tracking-[0.25em] text-foreground">
            NEXUS
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Notifications"
            className="relative grid size-9 place-items-center rounded-xl text-[#111936] transition active:bg-white/60"
          >
            <Bell aria-hidden="true" className="size-[18px]" strokeWidth={1.65} />
            <span className="absolute right-1 top-1 size-2 rounded-full bg-accent ring-2 ring-white" />
          </button>

          <button
            type="button"
            aria-label="Open account menu"
            className="grid size-10 place-items-center rounded-full transition active:scale-95"
          >
            <span className="grid size-8 place-items-center rounded-full bg-[linear-gradient(145deg,#171a32_20%,#7b6258_58%,#d8c4b1)] text-[0.65rem] font-semibold text-white shadow-[0_5px_14px_rgba(22,26,55,0.16)]">
              K
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
