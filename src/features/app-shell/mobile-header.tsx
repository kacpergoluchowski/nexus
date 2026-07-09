import Link from "next/link";
import { Bell, Menu } from "lucide-react";
import { NexusLogo } from "./nexus-logo";
import { UserAvatar } from "./user-avatar";

export function MobileHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[72px] px-4 lg:hidden">
      <div className="relative flex h-full items-center justify-between">
        <button
          type="button"
          aria-label="Open navigation menu"
          className="grid size-10 place-items-center rounded-[13px] border border-[#aeb5d2]/24 bg-white/48 text-[#111936] shadow-[0_8px_22px_rgba(46,55,105,0.075),inset_0_1px_0_rgba(255,255,255,0.76)] backdrop-blur-[20px] transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
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
            className="relative grid size-9 place-items-center rounded-xl text-[#111936] transition active:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            <Bell aria-hidden="true" className="size-[18px]" strokeWidth={1.65} />
            <span className="absolute right-1 top-1 size-2 rounded-full bg-accent ring-2 ring-white" />
          </button>

          <button
            type="button"
            aria-label="Open account menu"
            className="grid size-10 place-items-center rounded-full transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
          >
            <UserAvatar className="size-8 text-[0.65rem]" />
          </button>
        </div>
      </div>
    </header>
  );
}
