import { Bell, ChevronDown, Command, Search } from "lucide-react";
import Link from "next/link";
import { NexusLogo } from "./nexus-logo";
import { UserAvatar } from "./user-avatar";

export function AppHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden h-20 px-8 lg:block">
      <div className="relative flex h-full items-center justify-between">
        <Link
          href="/dashboard"
          className="flex w-fit items-center gap-3.5 text-foreground"
          aria-label="Nexus dashboard"
        >
          <NexusLogo className="size-9 shrink-0" />
          <span className="hidden text-[1.02rem] font-semibold tracking-[0.34em] sm:block">
            NEXUS
          </span>
        </Link>

        <form className="group absolute left-1/2 hidden h-[46px] w-[min(40vw,33rem)] -translate-x-1/2 items-center rounded-[15px] border border-[#aeb5d2]/24 bg-white/38 px-3.5 text-muted-foreground shadow-[0_10px_30px_rgba(48,56,99,0.085),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[22px] transition-[border-color,background-color,box-shadow] duration-200 focus-within:border-[#8b7ae0]/25 focus-within:bg-white/48 focus-within:shadow-[0_12px_34px_rgba(61,55,130,0.1),0_0_0_3px_rgba(104,71,255,0.04),inset_0_1px_0_rgba(255,255,255,0.86)] motion-reduce:transition-none lg:flex">
          <Search
            aria-hidden="true"
            className="mr-2.5 size-[17px] shrink-0 text-[#465172] transition-colors group-focus-within:text-accent"
            strokeWidth={1.6}
          />
          <label className="sr-only" htmlFor="ask-nexus">
            Ask Nexus
          </label>
          <input
            id="ask-nexus"
            type="search"
            placeholder="Ask Nexus anything..."
            autoComplete="off"
            className="min-w-0 flex-1 appearance-none bg-transparent text-[15px] font-medium text-[#151a38] outline-none placeholder:text-[15px] placeholder:font-normal placeholder:text-[#747c9b] [&::-webkit-search-cancel-button]:hidden"
          />
          <kbd className="ml-3 flex h-7 shrink-0 items-center gap-1 rounded-lg border border-[#aeb5d2]/22 bg-white/38 px-2 text-[0.65rem] font-semibold text-[#46506f] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] transition-colors group-focus-within:border-[#a99cf0]/30 group-focus-within:bg-white/54">
            <Command aria-hidden="true" className="size-3" strokeWidth={1.65} />
            K
          </kbd>
        </form>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="group relative grid size-11 place-items-center rounded-[15px] text-[#171d3d] transition-[background-color,box-shadow,transform] duration-200 hover:bg-white/42 hover:shadow-[0_8px_22px_rgba(42,49,91,0.065),inset_0_1px_0_rgba(255,255,255,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-95 motion-reduce:transition-none"
          >
            <Bell
              aria-hidden="true"
              className="size-[21px] transition-transform duration-200 group-hover:scale-[1.04] motion-reduce:transition-none"
              strokeWidth={1.6}
            />
            <span className="absolute right-[8px] top-[7px] size-2.5 rounded-full bg-accent shadow-[0_2px_7px_rgba(104,71,255,0.38)] ring-2 ring-[#f5f6fb]" />
          </button>

          <span
            aria-hidden="true"
            className="mx-0.5 h-7 w-px bg-[#cdd2e2]/65"
          />

          <button
            type="button"
            className="group flex h-12 items-center rounded-[16px] py-1 pl-1 pr-2 transition-[background-color,box-shadow,transform] duration-200 hover:bg-white/42 hover:shadow-[0_9px_26px_rgba(42,49,91,0.065),inset_0_1px_0_rgba(255,255,255,0.72)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] motion-reduce:transition-none"
            aria-label="Open account menu"
          >
            <UserAvatar className="size-10 text-xs" />
            <span className="ml-3 hidden min-w-[70px] text-left md:block">
              <span className="block text-[0.875rem] font-semibold leading-[1.1rem] text-[#11152f]">
                Kacper
              </span>
              <span className="mt-0.5 block text-[0.6875rem] font-medium leading-[0.9rem] text-[#737b99]">
                Pro Plan
              </span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className="ml-3 hidden size-3.5 text-[#59617f] transition-transform duration-200 group-hover:translate-y-0.5 md:block"
              strokeWidth={1.65}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
